import React from 'react';
import { PickupDetails, PickupType } from '../../types/order';
import { Utensils, ShoppingBag, Hash, Clock } from 'lucide-react';

interface PickupOptionsProps {
  pickup: PickupDetails;
  onChange: (pickup: PickupDetails) => void;
}

export const PickupOptions: React.FC<PickupOptionsProps> = ({ pickup, onChange }) => {
  const handleTypeSelect = (type: PickupType) => {
    if (type === 'table') {
      onChange({ ...pickup, type, tableNumber: pickup.tableNumber || '1' });
    } else {
      onChange({ ...pickup, type, pickupTime: pickup.pickupTime || 'In 15 mins' });
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6 shadow-sm">
      <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
          2
        </div>
        <h3 className="text-xl font-bold font-serif text-stone-900">
          Pickup Preference
        </h3>
      </div>

      {/* Pickup Type Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Table Pickup Card */}
        <div
          onClick={() => handleTypeSelect('table')}
          className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
            pickup.type === 'table'
              ? 'border-amber-600 bg-amber-50/60 shadow-md ring-2 ring-amber-600/20'
              : 'border-stone-200 bg-white hover:border-stone-300'
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2.5 rounded-xl ${
              pickup.type === 'table' ? 'bg-amber-600 text-white' : 'bg-stone-100 text-stone-700'
            }`}>
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-base">Dine-In / Table Pickup</h4>
              <p className="text-xs text-stone-500">Served directly to your cafe table</p>
            </div>
          </div>
        </div>

        {/* Takeaway Card */}
        <div
          onClick={() => handleTypeSelect('takeaway')}
          className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
            pickup.type === 'takeaway'
              ? 'border-amber-600 bg-amber-50/60 shadow-md ring-2 ring-amber-600/20'
              : 'border-stone-200 bg-white hover:border-stone-300'
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2.5 rounded-xl ${
              pickup.type === 'takeaway' ? 'bg-amber-600 text-white' : 'bg-stone-100 text-stone-700'
            }`}>
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-base">Takeaway / Counter</h4>
              <p className="text-xs text-stone-500">Quick grab & go at counter</p>
            </div>
          </div>
        </div>

      </div>

      {/* Conditional Inputs */}
      {pickup.type === 'table' ? (
        <div className="p-4 rounded-2xl bg-amber-100/50 border border-amber-200 space-y-2 animate-fade-in">
          <label className="block text-xs font-bold uppercase tracking-wider text-amber-900">
            Table Number <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Hash className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-700" />
            <input
              type="text"
              required
              value={pickup.tableNumber || ''}
              onChange={e => onChange({ ...pickup, tableNumber: e.target.value })}
              placeholder="e.g. Table 4 or Outdoor 12"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-amber-300 bg-white focus:outline-none focus:border-amber-600 text-sm font-bold text-stone-900"
            />
          </div>
          <p className="text-[11px] text-amber-800">
            Look at the table marker or sticker at your seat for the table number.
          </p>
        </div>
      ) : (
        <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 space-y-2 animate-fade-in">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
            Estimated Pickup Time
          </label>
          <div className="relative">
            <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
            <select
              value={pickup.pickupTime || 'In 15 mins'}
              onChange={e => onChange({ ...pickup, pickupTime: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:border-amber-600 text-sm font-semibold text-stone-800 cursor-pointer"
            >
              <option value="ASAP (10-15 mins)">ASAP (~10 - 15 mins)</option>
              <option value="In 20 mins">In 20 mins</option>
              <option value="In 30 mins">In 30 mins</option>
              <option value="In 45 mins">In 45 mins</option>
            </select>
          </div>
        </div>
      )}

    </div>
  );
};
