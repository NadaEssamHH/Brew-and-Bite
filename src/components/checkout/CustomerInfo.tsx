import React from 'react';
import { CustomerInfo as CustomerInfoType } from '../../types/order';
import { User, Phone, FileText } from 'lucide-react';

interface CustomerInfoProps {
  info: CustomerInfoType;
  onChange: (info: CustomerInfoType) => void;
}

export const CustomerInfo: React.FC<CustomerInfoProps> = ({ info, onChange }) => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6 shadow-sm">
      <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
          1
        </div>
        <h3 className="text-xl font-bold font-serif text-stone-900">
          Customer Contact Info
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        
        {/* Name Input */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              required
              value={info.name}
              onChange={e => onChange({ ...info, name: e.target.value })}
              placeholder="e.g. Alex Morgan"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 text-sm"
            />
          </div>
        </div>

        {/* Phone Input */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="tel"
              required
              value={info.phone}
              onChange={e => onChange({ ...info, phone: e.target.value })}
              placeholder="e.g. +1 555-019-2834"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 text-sm"
            />
          </div>
        </div>

      </div>

      {/* Order Notes */}
      <div className="space-y-2 pt-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
          General Order Notes (Optional)
        </label>
        <div className="relative">
          <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
          <textarea
            value={info.notes || ''}
            onChange={e => onChange({ ...info, notes: e.target.value })}
            placeholder="e.g. Please bring extra napkins, allergic to peanuts..."
            rows={2}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 text-sm"
          />
        </div>
      </div>

    </div>
  );
};
