import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, ShoppingBag, Menu as MenuIcon, X, Store } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemsCount } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Our Story', path: '/about' },
    { name: 'Location & Hours', path: '/location' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 nav-glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-600/20 group-hover:scale-105 transition-transform">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-stone-900 font-serif block leading-tight">
                Brew & Bite
              </span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-amber-700 block">
                Artisan Roastery & Bakery
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  isActive(link.path)
                    ? 'text-amber-700'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 rounded-full animate-fade-in" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Action Icons (Cart & Owner Portal) */}
          <div className="flex items-center gap-3">
            
            {/* Owner Portal Link */}
            <Link
              to="/owner"
              className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs font-semibold text-stone-700 hover:text-amber-700 hover:bg-amber-100/50 rounded-xl transition-all"
              title="Owner Menu Management"
            >
              <Store className="w-4 h-4 text-amber-600" />
              <span>Owner Portal</span>
            </Link>

            {/* Shopping Cart Button */}
            <Link
              to="/cart"
              className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-100/70 hover:bg-amber-200/80 text-stone-900 transition-all duration-200 border border-amber-200/60 shadow-sm group"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 text-amber-800 group-hover:scale-110 transition-transform" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-bounce">
                  {totalItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-stone-700 hover:bg-stone-200/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-900 text-stone-100 border-b border-stone-800 animate-fade-in px-4 pt-3 pb-6 space-y-3">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                isActive(link.path)
                  ? 'bg-amber-600 text-white font-semibold'
                  : 'text-stone-300 hover:bg-stone-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-stone-800">
            <Link
              to="/owner"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-3 text-stone-300 hover:bg-stone-800 rounded-xl"
            >
              <Store className="w-5 h-5 text-amber-500" />
              <span>Owner Admin Portal</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
