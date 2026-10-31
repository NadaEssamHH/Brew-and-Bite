import { CartItem } from './cart';

export type PickupType = 'table' | 'takeaway';

export interface CustomerInfo {
  name: string;
  phone: string;
  notes?: string;
}

export interface PickupDetails {
  type: PickupType;
  tableNumber?: string;
  pickupTime?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  customer: CustomerInfo;
  pickup: PickupDetails;
  subtotal: number;
  tax: number;
  totalAmount: number;
  createdAt: string;
  status: 'pending' | 'sent_whatsapp';
}
