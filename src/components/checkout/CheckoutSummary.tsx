import React from 'react';
import { CartItem } from '../../types/cart';
import { formatCurrency } from '../../lib/whatsapp';

interface CheckoutSummaryProps {
  items: CartItem[];
  subtotal: number;
  tax: number;
  totalAmount: number;
  isSubmitting?: boolean;
}

export const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  items,
  subtotal,
  tax,
  totalAmount,
  isSubmitting = false,
}) => {
  return (
    <div className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-stone-800 sticky top-24">
      <h3 className="text-xl font-bold font-serif text-white border-b border-stone-800 pb-4">
        Order Review
      </h3>

      {/* Mini Item List */}
      <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
        {items.map(item => (
          <div key={item.cartItemId} className="flex justify-between items-start text-xs border-b border-stone-800/60 pb-2">
            <div>
              <span className="font-bold text-amber-400">{item.quantity}x </span>
              <span className="font-semibold text-stone-200">{item.product.name}</span>
              {item.selectedOptions.size && (
                <span className="text-stone-400 block text-[11px]">{item.selectedOptions.size.name}</span>
              )}
            </div>
            <span className="font-mono text-stone-300 font-semibold">
              {formatCurrency(item.totalPrice)}
            </span>
          </div>
        ))}
      </div>

      {/* Price breakdown */}
      <div className="space-y-2 text-xs pt-2 border-t border-stone-800">
        <div className="flex justify-between text-stone-400">
          <span>Subtotal</span>
          <span className="font-mono">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between text-stone-400">
          <span>Tax (8%)</span>
          <span className="font-mono">{formatCurrency(tax)}</span>
        </div>
        <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-stone-800">
          <span>Total Amount</span>
          <span className="font-mono text-amber-400 text-lg">{formatCurrency(totalAmount)}</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-base shadow-xl shadow-amber-600/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        {isSubmitting ? 'Processing Order...' : 'Confirm Order & Send via WhatsApp'}
      </button>
    </div>
  );
};
