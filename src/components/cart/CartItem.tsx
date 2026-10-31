import React from 'react';
import { Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types/cart';
import { QuantitySelector } from '../product/QuantitySelector';
import { formatCurrency } from '../../lib/whatsapp';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const optionsList: string[] = [];

  if (item.selectedOptions.size) optionsList.push(item.selectedOptions.size.name);
  if (item.selectedOptions.milk) optionsList.push(item.selectedOptions.milk.name);
  if (item.selectedOptions.sugar) optionsList.push(item.selectedOptions.sugar.name);
  if (item.selectedOptions.extras && item.selectedOptions.extras.length > 0) {
    item.selectedOptions.extras.forEach(e => optionsList.push(`+${e.name}`));
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all">
      
      {/* Product Image & Title */}
      <div className="flex items-center gap-4">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-20 h-20 rounded-2xl object-cover shrink-0 border border-stone-100"
        />
        <div className="space-y-1">
          <h4 className="text-base font-bold text-stone-900 font-serif">
            {item.product.name}
          </h4>
          
          {optionsList.length > 0 && (
            <p className="text-xs text-stone-500 leading-snug">
              {optionsList.join(' • ')}
            </p>
          )}

          {item.selectedOptions.specialInstructions && (
            <p className="text-[11px] text-amber-700 italic">
              Note: "{item.selectedOptions.specialInstructions}"
            </p>
          )}

          <div className="text-xs font-mono font-semibold text-stone-600">
            {formatCurrency(item.unitPrice)} each
          </div>
        </div>
      </div>

      {/* Quantity & Price Controls */}
      <div className="flex items-center justify-between sm:justify-end gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
        <QuantitySelector
          quantity={item.quantity}
          onIncrease={() => onUpdateQuantity(item.quantity + 1)}
          onDecrease={() => onUpdateQuantity(item.quantity - 1)}
        />

        <div className="text-right">
          <div className="text-base font-extrabold text-amber-700 font-mono">
            {formatCurrency(item.totalPrice)}
          </div>
        </div>

        <button
          onClick={onRemove}
          className="p-2 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
          title="Remove from cart"
          aria-label="Remove item"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
};
