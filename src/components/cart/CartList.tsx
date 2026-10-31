import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem as CartItemType } from '../../types/cart';
import { CartItem } from './CartItem';

interface CartListProps {
  items: CartItemType[];
  onUpdateQuantity: (cartItemId: string, quantity: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartList: React.FC<CartListProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center space-y-6 shadow-sm">
        <div className="w-20 h-20 rounded-full bg-amber-100/70 flex items-center justify-center mx-auto text-amber-700">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold font-serif text-stone-900">Your Cart is Empty</h3>
          <p className="text-stone-500 text-sm max-w-md mx-auto">
            Looks like you haven't added any coffee or bakery treats to your order yet.
          </p>
        </div>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-lg shadow-amber-600/20 transition-all"
        >
          <span>Browse Artisan Menu</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center pb-2">
        <h3 className="text-xl font-bold font-serif text-stone-900">
          Order Items ({items.length})
        </h3>
        <button
          onClick={onClearCart}
          className="text-xs font-semibold text-rose-600 hover:underline"
        >
          Clear All Items
        </button>
      </div>

      <div className="space-y-4">
        {items.map(item => (
          <CartItem
            key={item.cartItemId}
            item={item}
            onUpdateQuantity={qty => onUpdateQuantity(item.cartItemId, qty)}
            onRemove={() => onRemoveItem(item.cartItemId)}
          />
        ))}
      </div>
    </div>
  );
};
