import React from 'react';
import { MenuItem } from '../../types/menu';
import { MenuCard } from './MenuCard';
import { Coffee } from 'lucide-react';

interface MenuGridProps {
  items: MenuItem[];
}

export const MenuGrid: React.FC<MenuGridProps> = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="py-20 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto text-amber-700">
          <Coffee className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-stone-800 font-serif">No Menu Items Found</h3>
        <p className="text-stone-500 text-sm max-w-md mx-auto">
          We couldn't find any drinks or bakery items matching your search or filters. Try adjusting your search term.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {items.map(item => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
};
