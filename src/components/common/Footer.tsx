import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, MapPin, Phone, Mail, Clock} from 'lucide-react';
import { STORE_LOCATION } from '../../data/locationData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-white font-serif tracking-tight">
                Brew & Bite
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Crafting single-origin artisanal coffee and hand-laminated bakery fresh every dawn. Experience coffee culture redefined.
            </p>
            <div className="flex items-center gap-3 pt-2 text-stone-400">
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Quick Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-amber-500 transition-colors">Artisan Menu</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-500 transition-colors">Our Story & Craft</Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-amber-500 transition-colors">Store Location & Hours</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-amber-500 transition-colors">Your Order Cart</Link>
              </li>
              <li>
                <Link to="/owner" className="hover:text-amber-500 transition-colors text-amber-500/80 font-medium">Owner Catalog Portal</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Find & Contact Us</h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span>{STORE_LOCATION.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-600 shrink-0" />
                <span>{STORE_LOCATION.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-600 shrink-0" />
                <span>{STORE_LOCATION.email}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Opening Hours</h3>
            <div className="space-y-2 text-sm text-stone-400">
              <div className="flex items-center gap-2 mb-2 text-amber-500 font-medium">
                <Clock className="w-4 h-4" />
                <span>Fresh Coffee Daily</span>
              </div>
              {STORE_LOCATION.openingHours.map((item, i) => (
                <div key={i} className="flex justify-between border-b border-stone-800/80 pb-1.5">
                  <span className="text-stone-300">{item.days}</span>
                  <span className="text-amber-400 font-mono text-xs">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-stone-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Brew & Bite Artisan Roastery. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-stone-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-stone-400 cursor-pointer">WhatsApp Order Protocol</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
