import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { CartList } from '../components/cart/CartList';
import { CartSummary } from '../components/cart/CartSummary';
import { ArrowLeft } from 'lucide-react';

export const Cart: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, subtotal, tax, totalAmount } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-stone-900">
            Your Order Cart
          </h1>
          <p className="text-stone-500 text-sm mt-1">
            Review your customized items before advancing to table or takeaway pickup checkout.
          </p>
        </div>

        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-stone-600 hover:text-amber-700 font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Add More Items</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7">
          <CartList
            items={cartItems}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeFromCart}
            onClearCart={clearCart}
          />
        </div>

        <div className="lg:col-span-5">
          <CartSummary
            subtotal={subtotal}
            tax={tax}
            totalAmount={totalAmount}
            disabled={cartItems.length === 0}
          />
        </div>
      </div>

    </div>
  );
};
