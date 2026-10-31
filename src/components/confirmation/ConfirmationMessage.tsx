import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { Order } from '../../types/order';

interface ConfirmationMessageProps {
  order: Order;
}

export const ConfirmationMessage: React.FC<ConfirmationMessageProps> = ({ order }) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-stone-200 text-center space-y-4 shadow-sm">
      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
        <span>Order Received #{order.id}</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-stone-900">
        Thank You, {order.customer.name}!
      </h1>

      <p className="text-stone-600 text-sm max-w-lg mx-auto leading-relaxed">
        Your order has been recorded in our system. Click the button below to send your formatted order details directly to our barista team on WhatsApp to finalize pickup!
      </p>
    </div>
  );
};
