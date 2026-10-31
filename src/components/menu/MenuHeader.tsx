import React from 'react';
import { Search } from 'lucide-react';

interface MenuHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const MenuHeader: React.FC<MenuHeaderProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
          Handcrafted Daily
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-serif">
          Our Artisan Menu
        </h1>
        <p className="text-stone-300 text-base max-w-xl mx-auto">
          Explore single-origin coffee, handcrafted espresso creations, and freshly baked pastries. Customize your options and order directly.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto pt-2">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => onSearchChange(e.target.value)}
              placeholder="Search espresso, matcha, croissant, cheesecake..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-stone-800/90 text-white placeholder-stone-400 border border-stone-700 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm font-medium transition-all shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
