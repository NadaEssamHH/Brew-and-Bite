import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { CustomerInfo } from './CustomerInfo';
import { PickupOptions } from './PickupOptions';
import { CheckoutSummary } from './CheckoutSummary';
import { CustomerInfo as CustomerInfoType, PickupDetails } from '../../types/order';

export const CheckoutForm: React.FC = () => {
  const { cartItems, subtotal, tax, totalAmount, placeOrder } = useCart();
  const navigate = useNavigate();

  const [customerInfo, setCustomerInfo] = useState<CustomerInfoType>({
    name: '',
    phone: '',
    notes: '',
  });

  const [pickupDetails, setPickupDetails] = useState<PickupDetails>({
    type: 'table',
    tableNumber: '1',
    pickupTime: 'ASAP (~10-15 mins)',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    if (pickupDetails.type === 'table' && !pickupDetails.tableNumber) {
      alert('Please enter your table number for table pickup.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      placeOrder(customerInfo, pickupDetails);
      setIsSubmitting(false);
      navigate('/confirmation');
    }, 400);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-7 space-y-6">
        <CustomerInfo info={customerInfo} onChange={setCustomerInfo} />
        <PickupOptions pickup={pickupDetails} onChange={setPickupDetails} />
      </div>

      <div className="lg:col-span-5">
        <CheckoutSummary
          items={cartItems}
          subtotal={subtotal}
          tax={tax}
          totalAmount={totalAmount}
          isSubmitting={isSubmitting}
        />
      </div>
    </form>
  );
};
