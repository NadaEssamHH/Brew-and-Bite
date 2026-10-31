import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';
import { STORE_LOCATION } from '../../data/locationData';

export const OpeningHours: React.FC = () => {
  return (
    <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 space-y-6 shadow-xl border border-stone-800">
      <div className="flex items-center justify-between border-b border-stone-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold font-serif text-white">
            Opening Hours
          </h3>
        </div>
        
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/30">
          <CheckCircle className="w-3.5 h-3.5" />
          Open Today
        </span>
      </div>

      <div className="space-y-4">
        {STORE_LOCATION.openingHours.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center py-2 border-b border-stone-800/60 text-sm">
            <span className="font-semibold text-stone-200">{item.days}</span>
            <span className="font-mono text-amber-400 font-bold">{item.hours}</span>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/60 text-xs text-stone-300">
        <p className="font-bold text-amber-400 mb-1">Kitchen & Barista Cutoff:</p>
        <p>Kitchen food orders stop 30 minutes before closing. Beverage service runs until close.</p>
      </div>
    </div>
  );
};
