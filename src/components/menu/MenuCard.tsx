import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Plus, Clock, Ban } from 'lucide-react';
import { MenuItem } from '../../types/menu';
import { formatCurrency } from '../../lib/whatsapp';

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div
      className={`group bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
        !item.available ? 'opacity-65 grayscale-[30%]' : ''
      }`}
    >
      {/* Image Header with Badges */}
      <div className="relative h-52 overflow-hidden bg-stone-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {item.popular && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
              <Sparkles className="w-3 h-3" />
              Popular
            </span>
          )}
        </div>

        {!item.available && (
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px] flex items-center justify-center text-white">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900/90 text-stone-200 text-xs font-bold border border-stone-700">
              <Ban className="w-4 h-4 text-rose-500" />
              Sold Out / Out of Stock
            </span>
          </div>
        )}

        {item.prepTimeMinutes && (
          <div className="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[11px] font-medium flex items-center gap-1">
            <Clock className="w-3 h-3 text-amber-400" />
            <span>{item.prepTimeMinutes} mins</span>
          </div>
        )}
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-xl font-bold font-serif text-stone-900 group-hover:text-amber-700 transition-colors">
              {item.name}
            </h3>
            <span className="text-lg font-extrabold text-amber-700 font-mono shrink-0">
              {formatCurrency(item.price)}
            </span>
          </div>

          <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          {item.available ? (
            <Link
              to={`/product/${item.id}`}
              className="w-full py-3 px-4 rounded-xl bg-amber-100/70 hover:bg-amber-600 text-amber-900 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Customize & Add to Order</span>
            </Link>
          ) : (
            <button
              disabled
              className="w-full py-3 px-4 rounded-xl bg-stone-100 text-stone-400 font-semibold text-xs cursor-not-allowed text-center"
            >
              Currently Unavailable
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
