import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 20,
}) => {
  return (
    <div className="flex items-center gap-3 bg-stone-100 p-1.5 rounded-2xl border border-stone-200">
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= min}
        className="w-10 h-10 rounded-xl bg-white text-stone-800 hover:bg-stone-200 flex items-center justify-center font-bold text-sm shadow-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="w-8 text-center font-extrabold text-stone-900 font-mono text-base">
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        disabled={quantity >= max}
        className="w-10 h-10 rounded-xl bg-white text-stone-800 hover:bg-stone-200 flex items-center justify-center font-bold text-sm shadow-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};
