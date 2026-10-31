import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { CheckoutForm } from '../components/checkout/CheckoutForm';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const Checkout: React.FC = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-stone-900">
            Pickup Checkout
          </h1>
          <p className="text-stone-500 text-sm mt-1">
            Specify your contact information and choose Table or Takeaway Pickup.
          </p>
        </div>

        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-stone-600 hover:text-amber-700 font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Cart</span>
        </Link>
      </div>

      <CheckoutForm />

    </div>
  );
};
