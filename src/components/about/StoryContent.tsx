import React from 'react';
import { Coffee, Wheat, Flame } from 'lucide-react';

export const StoryContent: React.FC = () => {
  return (
    <div className="py-16 space-y-16">
      
      {/* Chapter 1: Coffee Sourcing */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
            <Coffee className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold font-serif text-stone-900">
            Direct Trade Micro-Lots
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Every bean served at Brew & Bite is traced back to small family farms in high-altitude volcanic soils of Yirgacheffe, Huila, and Huehuetenango. We pay above fair-trade premiums to support organic agricultural practices and local farming communities.
          </p>
        </div>
        <div className="lg:col-span-6">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"
            alt="Coffee Sourcing"
            className="w-full h-80 object-cover rounded-3xl shadow-xl border border-stone-200"
          />
        </div>
      </div>

      {/* Chapter 2: The Bakery */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center lg:flex-row-reverse">
        <div className="lg:col-span-6 lg:order-2 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
            <Wheat className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold font-serif text-stone-900">
            72-Hour Laminated Pastries
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Our head baker wakes up at 3:00 AM every single morning to fold 84 layers of European churned butter into unbleached organic flour. No artificial additives, no shortcuts — just traditional stone deck baking techniques that create irresistible golden crispiness.
          </p>
        </div>
        <div className="lg:col-span-6 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
            alt="Artisan Pastries"
            className="w-full h-80 object-cover rounded-3xl shadow-xl border border-stone-200"
          />
        </div>
      </div>

    </div>
  );
};
