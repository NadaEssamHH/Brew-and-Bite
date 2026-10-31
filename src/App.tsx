import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { AppRoutes } from './routes/AppRoutes';

export const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-stone-50 font-sans text-stone-900 selection:bg-amber-500 selection:text-white">
          <Navbar />
          <div className="flex-1">
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
