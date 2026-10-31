import React from 'react';
import { MenuItem } from '../../types/menu';
import { Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { formatCurrency } from '../../lib/whatsapp';

interface ProductDetailsProps {
  product: MenuItem;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="space-y-6">
      {/* Category & Badge */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1 rounded-full">
          {product.category.replace('_', ' ')}
        </span>
        {product.popular && (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Sparkles className="w-3.5 h-3.5" />
            Customer Favorite
          </span>
        )}
      </div>

      {/* Title & Base Price */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-200 pb-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-stone-900">
          {product.name}
        </h1>
        <div className="text-2xl font-extrabold text-amber-700 font-mono">
          {formatCurrency(product.price)}
          <span className="text-xs font-normal text-stone-500 ml-1">base price</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-stone-600 text-base leading-relaxed">
        {product.description}
      </p>

      {/* Quick Specs */}
      <div className="flex flex-wrap gap-6 text-xs text-stone-500 pt-2 border-t border-stone-100">
        {product.prepTimeMinutes && (
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>Prep Time: ~{product.prepTimeMinutes} mins</span>
          </div>
        )}
        {product.calories && (
          <div className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-amber-600" />
            <span>Est. {product.calories} kcal</span>
          </div>
        )}
      </div>
    </div>
  );
};
