import { MenuItem, SizeOption, MilkOption, SugarOption, ExtraOption } from './menu';

export interface CartItemOptions {
  size?: SizeOption;
  milk?: MilkOption;
  sugar?: SugarOption;
  extras?: ExtraOption[];
  specialInstructions?: string;
}

export interface CartItem {
  cartItemId: string; // unique hash based on product ID + options
  product: MenuItem;
  quantity: number;
  selectedOptions: CartItemOptions;
  unitPrice: number;
  totalPrice: number;
}
