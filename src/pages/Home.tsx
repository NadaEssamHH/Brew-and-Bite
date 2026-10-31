import React from 'react';
import { Hero } from '../components/home/Hero';
import { CounterSection } from '../components/home/CounterSection';
import { CraftSection } from '../components/home/CraftSection';
import { LocationPreview } from '../components/home/LocationPreview';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <CounterSection />
      <CraftSection />
      <LocationPreview />
    </div>
  );
};
