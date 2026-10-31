import React from 'react';
import { Order } from '../../types/order';
import { formatCurrency } from '../../lib/whatsapp';
import { Utensils, ShoppingBag, User, Phone, MapPin } from 'lucide-react';

interface OrderDetailsProps {
  order: Order;
}

export const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6 shadow-sm">
      <h3 className="text-xl font-bold font-serif text-stone-900 border-b border-stone-100 pb-4">
        Order Breakdown
      </h3>

      {/* Mode Badge & Customer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-stone-500 font-semibold">
            <User className="w-3.5 h-3.5 text-amber-600" />
            <span>Customer</span>
          </div>
          <p className="font-bold text-stone-900 text-sm">{order.customer.name}</p>
          <p className="text-stone-500 flex items-center gap-1">
            <Phone className="w-3 h-3" />
            {order.customer.phone}
          </p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-stone-500 font-semibold">
            {order.pickup.type === 'table' ? (
              <Utensils className="w-3.5 h-3.5 text-amber-600" />
            ) : (
              <ShoppingBag className="w-3.5 h-3.5 text-amber-600" />
            )}
            <span>Pickup Mode</span>
          </div>
          {order.pickup.type === 'table' ? (
            <p className="font-bold text-amber-900 text-sm">
              Table Pickup — <span className="underline">Table #{order.pickup.tableNumber}</span>
            </p>
          ) : (
            <p className="font-bold text-amber-900 text-sm">
              Takeaway — {order.pickup.pickupTime}
            </p>
          )}
        </div>
      </div>

      {/* Items list */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
          Items Ordered
        </span>
        {order.items.map((item, idx) => {
          const opts: string[] = [];
          if (item.selectedOptions.size) opts.push(item.selectedOptions.size.name);
          if (item.selectedOptions.milk) opts.push(item.selectedOptions.milk.name);
          if (item.selectedOptions.sugar) opts.push(item.selectedOptions.sugar.name);
          if (item.selectedOptions.extras && item.selectedOptions.extras.length > 0) {
            item.selectedOptions.extras.forEach(e => opts.push(`+${e.name}`));
          }
          return (
            <div key={idx} className="flex justify-between items-start text-xs border-b border-stone-100 pb-2.5">
              <div className="space-y-0.5">
                <p className="font-bold text-stone-900 text-sm">
                  {item.quantity}x {item.product.name}
                </p>
                {opts.length > 0 && (
                  <p className="text-stone-500">{opts.join(', ')}</p>
                )}
                {item.selectedOptions.specialInstructions && (
                  <p className="text-amber-700 italic">"{item.selectedOptions.specialInstructions}"</p>
                )}
              </div>
              <span className="font-mono font-bold text-stone-800 text-sm">
                {formatCurrency(item.totalPrice)}
              </span>
            </div>
          );
        })}
      </div>

      {/* Pricing Summary */}
      <div className="pt-2 border-t border-stone-200 space-y-1.5 text-xs">
        <div className="flex justify-between text-stone-600">
          <span>Subtotal</span>
          <span className="font-mono">{formatCurrency(order.subtotal)}</span>
        </div>
        <div className="flex justify-between text-stone-600">
          <span>Tax (8%)</span>
          <span className="font-mono">{formatCurrency(order.tax)}</span>
        </div>
        <div className="flex justify-between text-base font-extrabold text-stone-900 pt-2 border-t border-stone-200">
          <span>Total Payable</span>
          <span className="font-mono text-amber-700 text-lg">{formatCurrency(order.totalAmount)}</span>
        </div>
      </div>
    </div>
  );
};
