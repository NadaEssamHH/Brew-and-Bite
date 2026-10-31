import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Layers, PlusCircle, ArrowLeft, ShieldCheck } from 'lucide-react';

interface OwnerSidebarProps {
  onAddNewProduct: () => void;
  totalProductsCount: number;
}

export const OwnerSidebar: React.FC<OwnerSidebarProps> = ({
  onAddNewProduct,
  totalProductsCount,
}) => {
  return (
    <aside className="bg-stone-900 text-stone-100 rounded-3xl p-6 space-y-8 shadow-xl border border-stone-800">
      
      <div className="space-y-3">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-amber-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Storefront</span>
        </Link>
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center">
            <Coffee className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-serif text-white">
              Owner Portal
            </h2>
            <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider block">
              Menu Catalog Manager
            </span>
          </div>
        </div>
      </div>

      {/* Primary Action Button */}
      <button
        onClick={onAddNewProduct}
        className="w-full py-3.5 px-4 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-lg shadow-amber-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
      >
        <PlusCircle className="w-5 h-5" />
        <span>Add New Menu Item</span>
      </button>

      {/* Navigation Stats */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
          Catalog Stats
        </span>
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-800/80 border border-stone-700/60 text-xs">
          <div className="flex items-center gap-2 text-stone-300">
            <Layers className="w-4 h-4 text-amber-500" />
            <span>Total Catalog Items</span>
          </div>
          <span className="font-bold text-amber-400 font-mono text-sm">
            {totalProductsCount}
          </span>
        </div>
      </div>

      <div className="pt-4 border-t border-stone-800/80 space-y-2 text-xs text-stone-400">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Live Catalog Sync</span>
        </div>
        <p className="text-[11px] leading-relaxed">
          Changes made here instantly update the public customer menu across the app.
        </p>
      </div>

    </aside>
  );
};
