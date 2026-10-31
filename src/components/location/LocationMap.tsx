import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { STORE_LOCATION } from '../../data/locationData';

export const LocationMap: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-4 shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold font-serif text-stone-900 flex items-center gap-2">
          <Navigation className="w-5 h-5 text-amber-600" />
          <span>Interactive Location</span>
        </h3>
        <span className="text-xs text-stone-500">Culinary District</span>
      </div>

      {/* Styled Mock Map Frame */}
      <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
          alt="Location Map Preview"
          className="w-full h-full object-cover opacity-60 hover:opacity-75 transition-opacity"
        />

        {/* Map Marker Pin Card Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent flex items-end p-6">
          <div className="bg-stone-900/90 backdrop-blur-md border border-stone-700/80 p-4 rounded-2xl text-white w-full flex items-center justify-between shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">{STORE_LOCATION.name}</h4>
                <p className="text-stone-300 text-xs">{STORE_LOCATION.address}</p>
              </div>
            </div>
            <a
              href={STORE_LOCATION.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-xl transition-colors shrink-0"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
