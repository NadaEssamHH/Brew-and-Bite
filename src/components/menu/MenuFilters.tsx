import React from 'react';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

interface MenuFiltersProps {
  showPopularOnly: boolean;
  onTogglePopularOnly: () => void;
  sortBy: 'featured' | 'price_low' | 'price_high';
  onSortChange: (sort: 'featured' | 'price_low' | 'price_high') => void;
  resultCount: number;
}

export const MenuFilters: React.FC<MenuFiltersProps> = ({
  showPopularOnly,
  onTogglePopularOnly,
  sortBy,
  onSortChange,
  resultCount,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-b border-stone-200">
      
      {/* Count */}
      <div className="text-stone-500 text-sm font-medium">
        Showing <span className="font-bold text-stone-900">{resultCount}</span> artisanal items
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap items-center gap-3">
        
        {/* Popular Only Toggle */}
        <button
          onClick={onTogglePopularOnly}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
            showPopularOnly
              ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-sm'
              : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Popular Only</span>
        </button>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-700">
          <SlidersHorizontal className="w-3.5 h-3.5 text-stone-500" />
          <select
            value={sortBy}
            onChange={e => onSortChange(e.target.value as any)}
            className="bg-transparent text-stone-800 font-semibold focus:outline-none cursor-pointer"
          >
            <option value="featured">Sort by Featured</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
          </select>
        </div>

      </div>
    </div>
  );
};
