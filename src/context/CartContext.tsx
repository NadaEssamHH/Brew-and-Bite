import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { MenuItem } from '../types/menu';
import { CartItem, CartItemOptions } from '../types/cart';
import { Order, CustomerInfo, PickupDetails } from '../types/order';
import { INITIAL_MENU_ITEMS } from '../data/menuData';

interface CartContextType {
  cartItems: CartItem[];
  menuItems: MenuItem[];
  activeOrder: Order | null;
  addToCart: (product: MenuItem, options: CartItemOptions, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  tax: number;
  totalAmount: number;
  totalItemsCount: number;
  placeOrder: (customer: CustomerInfo, pickup: PickupDetails) => Order;
  // Admin / Owner Catalog management
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  updateMenuItem: (item: MenuItem) => void;
  deleteMenuItem: (id: string) => void;
  toggleItemAvailability: (id: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_CART_KEY = 'brew_and_bite_cart';
const LOCAL_STORAGE_MENU_KEY = 'brew_and_bite_menu';

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Menu State
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_MENU_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse menu items from storage', e);
      }
    }
    return INITIAL_MENU_ITEMS;
  });

  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse cart items from storage', e);
      }
    }
    return [];
  });

  const [activeOrder, setActiveOrder] = useState<Order | null>(null);

  // Sync with LocalStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_MENU_KEY, JSON.stringify(menuItems));
  }, [menuItems]);

  // Helper to generate unique cart item ID based on item ID + options
  const generateCartItemId = (product: MenuItem, options: CartItemOptions): string => {
    const sizeId = options.size?.id || 'none';
    const milkId = options.milk?.id || 'none';
    const sugarId = options.sugar?.id || 'none';
    const extraIds = options.extras?.map(e => e.id).sort().join(',') || 'none';
    return `${product.id}_${sizeId}_${milkId}_${sugarId}_${extraIds}`;
  };

  // Helper to calculate unit price with options
  const calculateUnitPrice = (product: MenuItem, options: CartItemOptions): number => {
    let base = product.price;
    if (options.size) {
      base += options.size.priceModifier;
    }
    if (options.milk) {
      base += options.milk.priceModifier;
    }
    if (options.extras && options.extras.length > 0) {
      const extrasCost = options.extras.reduce((sum, ext) => sum + ext.price, 0);
      base += extrasCost;
    }
    return base;
  };

  const addToCart = (product: MenuItem, options: CartItemOptions, quantity: number = 1) => {
    const cartItemId = generateCartItemId(product, options);
    const unitPrice = calculateUnitPrice(product, options);

    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        const newQty = updated[existingIndex].quantity + quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          totalPrice: newQty * unitPrice,
        };
        return updated;
      } else {
        const newItem: CartItem = {
          cartItemId,
          product,
          quantity,
          selectedOptions: options,
          unitPrice,
          totalPrice: quantity * unitPrice,
        };
        return [...prev, newItem];
      }
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item => {
        if (item.cartItemId === cartItemId) {
          return {
            ...item,
            quantity,
            totalPrice: quantity * item.unitPrice,
          };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const tax = subtotal * 0.08; // 8% sales tax
  const totalAmount = subtotal + tax;
  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const placeOrder = (customer: CustomerInfo, pickup: PickupDetails): Order => {
    const orderId = Math.floor(100000 + Math.random() * 900000).toString();
    const newOrder: Order = {
      id: orderId,
      items: [...cartItems],
      customer,
      pickup,
      subtotal,
      tax,
      totalAmount,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };
    setActiveOrder(newOrder);
    clearCart();
    return newOrder;
  };

  // Owner Admin functions
  const addMenuItem = (itemData: Omit<MenuItem, 'id'>) => {
    const newId = `custom-${Date.now()}`;
    const newItem: MenuItem = {
      ...itemData,
      id: newId,
    };
    setMenuItems(prev => [newItem, ...prev]);
  };

  const updateMenuItem = (updatedItem: MenuItem) => {
    setMenuItems(prev => prev.map(item => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleItemAvailability = (id: string) => {
    setMenuItems(prev =>
      prev.map(item => (item.id === id ? { ...item, available: !item.available } : item))
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        menuItems,
        activeOrder,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        tax,
        totalAmount,
        totalItemsCount,
        placeOrder,
        addMenuItem,
        updateMenuItem,
        deleteMenuItem,
        toggleItemAvailability,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
