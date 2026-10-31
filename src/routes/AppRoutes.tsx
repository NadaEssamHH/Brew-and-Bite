import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';
import { ProductCustomization } from '../pages/ProductCustomization';
import { Cart } from '../pages/Cart';
import { Checkout } from '../pages/Checkout';
import { OrderConfirmation } from '../pages/OrderConfirmation';
import { About } from '../pages/About';
import { Location } from '../pages/Location';
import { OwnerCatalog } from '../pages/owner/OwnerCatalog';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/product/:id" element={<ProductCustomization />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/confirmation" element={<OrderConfirmation />} />
      <Route path="/about" element={<About />} />
      <Route path="/location" element={<Location />} />
      <Route path="/owner" element={<OwnerCatalog />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
