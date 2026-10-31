import React from 'react';
import { Coffee } from 'lucide-react';

interface LoaderProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Loader: React.FC<LoaderProps> = ({ text = 'Brewing perfection...', size = 'md' }) => {
  const iconSizes = {
    sm: 24,
    md: 36,
    lg: 48,
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 gap-3">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl animate-pulse" />
        <Coffee size={iconSizes[size]} className="text-amber-600 animate-bounce relative z-10" />
      </div>
      {text && <p className="text-stone-600 font-medium text-sm animate-pulse">{text}</p>}
    </div>
  );
};
