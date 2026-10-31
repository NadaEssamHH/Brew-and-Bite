import React from 'react';
import { LocationInfo } from '../components/location/LocationInfo';
import { OpeningHours } from '../components/location/OpeningHours';
import { LocationMap } from '../components/location/LocationMap';

export const Location: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
          Find Us
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-stone-900">
          Store Location & Hours
        </h1>
        <p className="text-stone-600 text-sm">
          We look forward to brewing your favorite cup. Walk in anytime or place your table order online!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-8">
          <LocationInfo />
          <LocationMap />
        </div>

        <div className="lg:col-span-5">
          <OpeningHours />
        </div>
      </div>
    </div>
  );
};
