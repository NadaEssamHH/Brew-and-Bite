import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { STORE_LOCATION } from '../../data/locationData';

export const LocationPreview: React.FC = () => {
  return (
    <section className="py-20 bg-stone-100 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-amber-700 bg-amber-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Flagship Roastery</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif">
              Visit Our Flagship Store
            </h2>

            <p className="text-stone-600 text-base leading-relaxed">
              Step into our warm ambient space filled with the rich aroma of freshly pulled espresso shots and hot croissants. Enjoy free Wi-Fi, table service ordering, and outdoor garden seating.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase text-stone-400">Address</span>
                <p className="text-sm font-semibold text-stone-800">{STORE_LOCATION.address}</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase text-stone-400">Hours Today</span>
                <p className="text-sm font-semibold text-amber-700 flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Fri: 6:30 AM - 8:00 PM</span>
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                to="/location"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Full Hours & Map</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${STORE_LOCATION.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Call Store</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-stone-900 text-stone-100 p-8 rounded-3xl space-y-4">
              <h3 className="text-lg font-bold font-serif text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <span>Store Amenities</span>
              </h3>
              <ul className="space-y-3 text-sm text-stone-300">
                {STORE_LOCATION.amenities.map((amenity, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
