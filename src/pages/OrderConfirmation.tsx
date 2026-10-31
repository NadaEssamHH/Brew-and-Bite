import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { ConfirmationMessage } from '../components/confirmation/ConfirmationMessage';
import { OrderDetails } from '../components/confirmation/OrderDetails';
import { SendWhatsAppButton } from '../components/confirmation/SendWhatsAppButton';
import { Coffee, ArrowRight } from 'lucide-react';

export const OrderConfirmation: React.FC = () => {
  const { activeOrder } = useCart();

  if (!activeOrder) {
    return <Navigate to="/menu" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 animate-fade-in">
      
      <ConfirmationMessage order={activeOrder} />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-7">
          <OrderDetails order={activeOrder} />
        </div>

        <div className="md:col-span-5 space-y-6">
          <SendWhatsAppButton order={activeOrder} />

          <div className="text-center pt-2">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-bold text-sm"
            >
              <Coffee className="w-4 h-4" />
              <span>Place Another Order</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};
