export type CategoryId = 'all' | 'espresso' | 'cold_brew' | 'tea' | 'bakery' | 'dessert';

export interface Category {
  id: CategoryId;
  name: string;
  icon?: string;
  description?: string;
}

export interface SizeOption {
  id: 'S' | 'M' | 'L';
  name: string;
  priceModifier: number; // e.g. 0 for S, +0.75 for M, +1.50 for L
}

export interface MilkOption {
  id: string;
  name: string;
  priceModifier: number;
}

export interface SugarOption {
  id: string;
  name: string;
}

export interface ExtraOption {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  description: string;
  image: string;
  popular?: boolean;
  available: boolean;
  sizeOptions?: SizeOption[];
  milkOptions?: MilkOption[];
  sugarOptions?: SugarOption[];
  extraOptions?: ExtraOption[];
  prepTimeMinutes?: number;
  calories?: number;
}
