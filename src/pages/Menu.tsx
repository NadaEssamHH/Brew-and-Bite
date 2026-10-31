import React, { useState, useMemo } from 'react';
import { useCart } from '../hooks/useCart';
import { CategoryId } from '../types/menu';
import { MenuHeader } from '../components/menu/MenuHeader';
import { CategoryTabs } from '../components/menu/CategoryTabs';
import { MenuFilters } from '../components/menu/MenuFilters';
import { MenuGrid } from '../components/menu/MenuGrid';

export const Menu: React.FC = () => {
  const { menuItems } = useCart();
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopularOnly, setShowPopularOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price_low' | 'price_high'>('featured');

  const filteredItems = useMemo(() => {
    return menuItems
      .filter(item => {
        // Category match
        if (activeCategory !== 'all' && item.category !== activeCategory) {
          return false;
        }
        // Search query match
        if (
          searchQuery &&
          !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !item.description.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return false;
        }
        // Popular filter
        if (showPopularOnly && !item.popular) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price_low') return a.price - b.price;
        if (sortBy === 'price_high') return b.price - a.price;
        return 0;
      });
  }, [menuItems, activeCategory, searchQuery, showPopularOnly, sortBy]);

  return (
    <div>
      <MenuHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <CategoryTabs activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <MenuFilters
          showPopularOnly={showPopularOnly}
          onTogglePopularOnly={() => setShowPopularOnly(!showPopularOnly)}
          sortBy={sortBy}
          onSortChange={setSortBy}
          resultCount={filteredItems.length}
        />
        <MenuGrid items={filteredItems} />
      </main>
    </div>
  );
};
