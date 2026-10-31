import React from 'react';
import { CATEGORIES } from '../../data/menuData';
import { CategoryId } from '../../types/menu';

interface CategoryTabsProps {
  activeCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="bg-stone-900 border-b border-stone-800 sticky top-20 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 overflow-x-auto py-4 scrollbar-none">
          {CATEGORIES.map(category => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30 scale-105'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
