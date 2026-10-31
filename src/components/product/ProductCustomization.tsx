import React from 'react';
import { MenuItem, SizeOption, MilkOption, SugarOption, ExtraOption } from '../../types/menu';
import { CartItemOptions } from '../../types/cart';
import { formatCurrency } from '../../lib/whatsapp';
import { Check } from 'lucide-react';

interface ProductCustomizationProps {
  product: MenuItem;
  selectedOptions: CartItemOptions;
  onChangeOptions: (options: CartItemOptions) => void;
}

export const ProductCustomization: React.FC<ProductCustomizationProps> = ({
  product,
  selectedOptions,
  onChangeOptions,
}) => {

  const handleSelectSize = (size: SizeOption) => {
    onChangeOptions({ ...selectedOptions, size });
  };

  const handleSelectMilk = (milk: MilkOption) => {
    onChangeOptions({ ...selectedOptions, milk });
  };

  const handleSelectSugar = (sugar: SugarOption) => {
    onChangeOptions({ ...selectedOptions, sugar });
  };

  const handleToggleExtra = (extra: ExtraOption) => {
    const currentExtras = selectedOptions.extras || [];
    const exists = currentExtras.some(e => e.id === extra.id);
    const newExtras = exists
      ? currentExtras.filter(e => e.id !== extra.id)
      : [...currentExtras, extra];
    onChangeOptions({ ...selectedOptions, extras: newExtras });
  };

  const handleNotesChange = (instructions: string) => {
    onChangeOptions({ ...selectedOptions, specialInstructions: instructions });
  };

  return (
    <div className="space-y-8 py-4">
      
      {/* 1. Size Selection */}
      {product.sizeOptions && product.sizeOptions.length > 0 && (
        <div className="space-y-3">
          <label className="block text-sm font-bold text-stone-900 uppercase tracking-wider">
            1. Select Drink Size
          </label>
          <div className="grid grid-cols-3 gap-3">
            {product.sizeOptions.map(size => {
              const isSelected = selectedOptions.size?.id === size.id;
              return (
                <button
                  key={size.id}
                  type="button"
                  onClick={() => handleSelectSize(size)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'border-amber-600 bg-amber-50/80 ring-2 ring-amber-600/30 font-bold text-amber-900'
                      : 'border-stone-200 bg-white hover:border-stone-300 text-stone-700'
                  }`}
                >
                  <div className="text-sm font-semibold">{size.name}</div>
                  <div className="text-xs text-stone-500 font-mono mt-0.5">
                    {size.priceModifier > 0 ? `+${formatCurrency(size.priceModifier)}` : 'Standard'}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. Milk Options */}
      {product.milkOptions && product.milkOptions.length > 0 && (
        <div className="space-y-3">
          <label className="block text-sm font-bold text-stone-900 uppercase tracking-wider">
            2. Choose Milk Type
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {product.milkOptions.map(milk => {
              const isSelected = selectedOptions.milk?.id === milk.id;
              return (
                <button
                  key={milk.id}
                  type="button"
                  onClick={() => handleSelectMilk(milk)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'border-amber-600 bg-amber-50/80 ring-2 ring-amber-600/30 font-bold text-amber-900'
                      : 'border-stone-200 bg-white hover:border-stone-300 text-stone-700'
                  }`}
                >
                  <div className="text-xs font-semibold">{milk.name}</div>
                  <div className="text-[11px] text-stone-500 font-mono mt-0.5">
                    {milk.priceModifier > 0 ? `+${formatCurrency(milk.priceModifier)}` : 'Included'}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Sugar Level */}
      {product.sugarOptions && product.sugarOptions.length > 0 && (
        <div className="space-y-3">
          <label className="block text-sm font-bold text-stone-900 uppercase tracking-wider">
            3. Sweetness / Sugar Level
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {product.sugarOptions.map(sugar => {
              const isSelected = selectedOptions.sugar?.id === sugar.id;
              return (
                <button
                  key={sugar.id}
                  type="button"
                  onClick={() => handleSelectSugar(sugar)}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer text-xs font-semibold ${
                    isSelected
                      ? 'border-amber-600 bg-amber-600 text-white font-bold'
                      : 'border-stone-200 bg-white hover:border-stone-300 text-stone-700'
                  }`}
                >
                  {sugar.name}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Extra Options / Add-ons */}
      {product.extraOptions && product.extraOptions.length > 0 && (
        <div className="space-y-3">
          <label className="block text-sm font-bold text-stone-900 uppercase tracking-wider">
            4. Add-ons & Extra Shots
          </label>
          <div className="space-y-2">
            {product.extraOptions.map(extra => {
              const isChecked = selectedOptions.extras?.some(e => e.id === extra.id);
              return (
                <div
                  key={extra.id}
                  onClick={() => handleToggleExtra(extra)}
                  className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                    isChecked
                      ? 'border-amber-600 bg-amber-50/60 text-amber-900 font-semibold'
                      : 'border-stone-200 bg-white hover:border-stone-300 text-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                      isChecked ? 'bg-amber-600 border-amber-600 text-white' : 'border-stone-300 bg-white'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="text-xs font-medium">{extra.name}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-700">
                    +{formatCurrency(extra.price)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 5. Special Instructions */}
      <div className="space-y-2">
        <label className="block text-sm font-bold text-stone-900 uppercase tracking-wider">
          Special Barista Instructions
        </label>
        <textarea
          value={selectedOptions.specialInstructions || ''}
          onChange={e => handleNotesChange(e.target.value)}
          placeholder="e.g. Extra hot, light ice, serve in mug..."
          rows={2}
          className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-amber-600 text-xs text-stone-800 placeholder-stone-400"
        />
      </div>

    </div>
  );
};
