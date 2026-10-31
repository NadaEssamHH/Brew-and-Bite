import React from 'react';
import { Coffee, Flame, Wheat, MessageSquare } from 'lucide-react';
import { CRAFT_FEATURES } from '../../data/homeData';

export const CraftSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee': return <Coffee className="w-8 h-8 text-amber-600" />;
      case 'Flame': return <Flame className="w-8 h-8 text-amber-600" />;
      case 'Wheat': return <Wheat className="w-8 h-8 text-amber-600" />;
      case 'MessageSquare': return <MessageSquare className="w-8 h-8 text-amber-600" />;
      default: return <Coffee className="w-8 h-8 text-amber-600" />;
    }
  };

  return (
    <section className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-amber-500 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
            Uncompromising Standards
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white">
            The Craft Behind Every Sip & Bite
          </h2>
          <p className="text-stone-400 text-base leading-relaxed">
            From direct-trade bean sourcing to slow dough fermentation, we never take shortcuts.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CRAFT_FEATURES.map((item, idx) => (
            <div
              key={idx}
              className="bg-stone-800/80 border border-stone-700/60 hover:border-amber-500/50 p-8 rounded-3xl space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 mb-6">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-bold text-white font-serif">{item.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
