import React, { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { formatCurrency } from '../../lib/whatsapp';

interface AddToCartButtonProps {
  totalPrice: number;
  onAddToCart: () => void;
  disabled?: boolean;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  totalPrice,
  onAddToCart,
  disabled = false,
}) => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    onAddToCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={`w-full py-4 px-6 rounded-2xl font-bold text-base flex items-center justify-between transition-all duration-300 shadow-xl cursor-pointer ${
        added
          ? 'bg-emerald-600 text-white shadow-emerald-600/30'
          : 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/30 active:scale-[0.99]'
      } disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      <div className="flex items-center gap-3">
        {added ? (
          <>
            <Check className="w-5 h-5 animate-bounce" />
            <span>Added to Cart!</span>
          </>
        ) : (
          <>
            <ShoppingBag className="w-5 h-5" />
            <span>Add Item to Cart</span>
          </>
        )}
      </div>

      <span className="font-mono text-lg font-extrabold bg-black/10 px-3 py-1 rounded-xl">
        {formatCurrency(totalPrice)}
      </span>
    </button>
  );
};
