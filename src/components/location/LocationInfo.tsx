import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import { STORE_LOCATION } from '../../data/locationData';

export const LocationInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-stone-200 space-y-6 shadow-sm">
      <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
        <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
          <MapPin className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold font-serif text-stone-900">
            {STORE_LOCATION.name}
          </h2>
          <span className="text-xs text-amber-700 font-semibold uppercase tracking-wider">
            Main Flagship Roastery
          </span>
        </div>
      </div>

      <div className="space-y-4 text-sm text-stone-700">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block text-stone-900">Address</span>
            <p className="text-stone-600">{STORE_LOCATION.address}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-amber-600 shrink-0" />
          <div>
            <span className="font-bold block text-stone-900">Phone Support</span>
            <a href={`tel:${STORE_LOCATION.phone}`} className="text-amber-700 font-semibold hover:underline">
              {STORE_LOCATION.phone}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-amber-600 shrink-0" />
          <div>
            <span className="font-bold block text-stone-900">Email Enquiries</span>
            <a href={`mailto:${STORE_LOCATION.email}`} className="text-amber-700 font-semibold hover:underline">
              {STORE_LOCATION.email}
            </a>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-stone-100 flex flex-wrap gap-3">
        <a
          href={STORE_LOCATION.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-all"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <a
          href={`https://wa.me/${STORE_LOCATION.whatsappPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
