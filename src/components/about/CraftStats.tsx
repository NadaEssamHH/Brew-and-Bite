import React from 'react';
import { Award, Heart, Shield, Sparkles } from 'lucide-react';

export const CraftStats: React.FC = () => {
  const Badges = [
    { icon: Award, title: 'Best Local Roaster 2025', desc: 'Voted #1 Specialty Coffee Spot' },
    { icon: Heart, title: '100% Sustainable', desc: 'Compostable cups & zero food waste' },
    { icon: Shield, title: 'Quality Guaranteed', desc: 'If it\'s not perfect, we remake it' },
    { icon: Sparkles, title: 'Master Baristas', desc: 'SCA Certified Extraction Experts' },
  ];

  return (
    <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 sm:p-12 my-12 border border-stone-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Badges.map((b, i) => {
          const Icon = b.icon;
          return (
            <div key={i} className="space-y-3 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20 mx-auto sm:mx-0">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold font-serif text-white">{b.title}</h4>
              <p className="text-stone-400 text-xs">{b.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
