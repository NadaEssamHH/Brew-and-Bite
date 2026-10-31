import React from 'react';
import { StoryHero } from '../components/about/StoryHero';
import { StoryContent } from '../components/about/StoryContent';
import { CraftStats } from '../components/about/CraftStats';

export const About: React.FC = () => {
  return (
    <div>
      <StoryHero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StoryContent />
        <CraftStats />
      </main>
    </div>
  );
};
