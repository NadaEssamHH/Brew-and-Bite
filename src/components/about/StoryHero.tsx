import React from 'react';
import { Sparkles } from 'lucide-react';

export const StoryHero: React.FC = () => {
  return (
    <div className="bg-stone-900 text-white py-20 px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <div className="max-w-4xl mx-auto space-y-4">
        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
          Our Heritage & Passion
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif">
          Crafting Coffee & Community
        </h1>
        <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Founded with a simple vision: bring uncompromised single-origin coffee micro-lots and old-world French baking under one roof.
        </p>
      </div>
    </div>
  );
};
