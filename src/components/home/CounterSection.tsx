import React from 'react';
import { STATS } from '../../data/homeData';

export const CounterSection: React.FC = () => {
  return (
    <section className="bg-amber-600 text-white py-12 relative z-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-amber-500/50">
          {STATS.map((stat, idx) => (
            <div key={idx} className={`${idx > 0 ? 'pt-6 md:pt-0' : ''} space-y-1`}>
              <div className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight text-amber-100">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
