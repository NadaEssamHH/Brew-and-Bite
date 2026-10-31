import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, ArrowRight, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { HERO_SLIDES } from '../../data/homeData';

export const Hero: React.FC = () => {
  const slide = HERO_SLIDES[0];

  return (
    <section className="relative bg-stone-950 text-white overflow-hidden py-20 lg:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-35">
        <img
          src={slide.bgImage}
          alt="Brew and Bite Artisan Coffee"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Handcrafted Single Origin & Fresh Baking</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif leading-tight text-stone-50">
              Where Specialty Coffee Meets <span className="text-amber-500 underline decoration-amber-500/40">Artisan Bakery</span>
            </h1>

            {/* Subtitle */}
            <p className="text-stone-300 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
              {slide.subtitle} Order directly for instant table pickup or takeaway via our smooth WhatsApp order flow.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/menu"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-base shadow-xl shadow-amber-600/30 hover:scale-[1.02] transition-all"
              >
                <Coffee className="w-5 h-5" />
                <span>{slide.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-stone-900/80 hover:bg-stone-800 text-stone-200 font-semibold text-base border border-stone-700 hover:border-amber-500/50 transition-all"
              >
                <span>{slide.ctaSecondary}</span>
              </Link>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-6 border-t border-stone-800/80 text-stone-400 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Express Table & Counter Pickup</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Pay In-Person at Store</span>
              </div>
            </div>

          </div>

          {/* Hero Side Graphic Card */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden border border-stone-800 shadow-2xl bg-stone-900/90 p-4">
              <img
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80"
                alt="Signature Latte"
                className="w-full h-72 object-cover rounded-2xl mb-4"
              />
              <div className="p-2 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Top Featured</span>
                  <span className="text-amber-300 font-extrabold text-lg">$5.50</span>
                </div>
                <h3 className="text-xl font-bold text-white font-serif">Signature Spanish Latte</h3>
                <p className="text-stone-400 text-xs line-clamp-2">
                  Double espresso pulled from washed Sidama beans with textured condensed milk.
                </p>
                <Link
                  to="/menu"
                  className="block text-center w-full py-2.5 mt-2 bg-amber-600/20 hover:bg-amber-600 text-amber-300 hover:text-white rounded-xl text-xs font-bold transition-all"
                >
                  Order Now on Menu
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
