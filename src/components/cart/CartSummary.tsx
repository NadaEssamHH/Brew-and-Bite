import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';
import { formatCurrency } from '../../lib/whatsapp';

interface CartSummaryProps {
  subtotal: number;
  tax: number;
  totalAmount: number;
  disabled?: boolean;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  tax,
  totalAmount,
  disabled = false,
}) => {
  return (
    <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 space-y-6 shadow-xl border border-stone-800 sticky top-24">
      <h3 className="text-xl font-bold font-serif text-white border-b border-stone-800 pb-4">
        Summary
      </h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-stone-300">
          <span>Subtotal</span>
          <span className="font-mono font-semibold">{formatCurrency(subtotal)}</span>
        </div>

        <div className="flex justify-between text-stone-300">
          <span>Sales Tax (8%)</span>
          <span className="font-mono font-semibold">{formatCurrency(tax)}</span>
        </div>

        <div className="border-t border-stone-800 pt-3 flex justify-between text-lg font-bold text-white">
          <span>Total</span>
          <span className="font-mono text-amber-400 text-xl">{formatCurrency(totalAmount)}</span>
        </div>
      </div>

      <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2 text-xs text-stone-300">
        <div className="flex items-center gap-2 font-semibold text-amber-400">
          <CreditCard className="w-4 h-4" />
          <span>Pay at Store / Pickup</span>
        </div>
        <p className="text-stone-400">
          No online payment card needed now. Orders are submitted via WhatsApp and paid upon receipt.
        </p>
      </div>

      <Link
        to={disabled ? '#' : '/checkout'}
        className={`w-full py-4 px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all duration-200 shadow-lg ${
          disabled
            ? 'bg-stone-800 text-stone-500 cursor-not-allowed pointer-events-none'
            : 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/30 active:scale-[0.99]'
        }`}
      >
        <span>Proceed to Checkout</span>
        <ArrowRight className="w-5 h-5" />
      </Link>

      <div className="flex items-center justify-center gap-2 text-xs text-stone-400">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span>Instant WhatsApp Pickup Order Confirmation</span>
      </div>
    </div>
  );
};
