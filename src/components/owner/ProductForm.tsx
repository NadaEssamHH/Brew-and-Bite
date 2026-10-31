import React, { useState, useEffect } from 'react';
import { MenuItem, CategoryId } from '../../types/menu';
import { DEFAULT_SIZES, DEFAULT_MILKS, DEFAULT_SUGAR_LEVELS, DEFAULT_EXTRAS } from '../../data/menuData';
import { X, Check } from 'lucide-react';

interface ProductFormProps {
  product?: MenuItem | null; // null if creating new item
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: MenuItem | Omit<MenuItem, 'id'>) => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  product,
  isOpen,
  onClose,
  onSave,
}) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<CategoryId>('espresso');
  const [price, setPrice] = useState('4.50');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [popular, setPopular] = useState(false);
  const [available, setAvailable] = useState(true);
  const [prepTimeMinutes, setPrepTimeMinutes] = useState('4');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setCategory(product.category);
      setPrice(product.price.toString());
      setDescription(product.description);
      setImage(product.image);
      setPopular(!!product.popular);
      setAvailable(product.available);
      setPrepTimeMinutes(product.prepTimeMinutes ? product.prepTimeMinutes.toString() : '4');
    } else {
      setName('');
      setCategory('espresso');
      setPrice('4.50');
      setDescription('');
      setImage('https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80');
      setPopular(false);
      setAvailable(true);
      setPrepTimeMinutes('4');
    }
  }, [product, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const itemData = {
      name,
      category,
      price: parseFloat(price) || 0,
      description,
      image: image || 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
      popular,
      available,
      prepTimeMinutes: parseInt(prepTimeMinutes) || 3,
      // Assign default customization options if coffee beverage
      sizeOptions: ['espresso', 'cold_brew', 'tea'].includes(category) ? DEFAULT_SIZES : undefined,
      milkOptions: ['espresso', 'cold_brew', 'tea'].includes(category) ? DEFAULT_MILKS : undefined,
      sugarOptions: ['espresso', 'cold_brew', 'tea'].includes(category) ? DEFAULT_SUGAR_LEVELS : undefined,
      extraOptions: ['espresso', 'cold_brew', 'tea'].includes(category) ? DEFAULT_EXTRAS : undefined,
    };

    if (product) {
      onSave({ ...itemData, id: product.id });
    } else {
      onSave(itemData);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b border-stone-100 pb-4">
          <h3 className="text-2xl font-bold font-serif text-stone-900">
            {product ? 'Edit Menu Item' : 'Add New Menu Item'}
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-xl hover:bg-stone-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold text-stone-700">
          
          <div className="space-y-1.5">
            <label className="block uppercase tracking-wider">Product Title *</label>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Vanilla Cold Foam Latte"
              className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-amber-600 text-sm font-medium"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block uppercase tracking-wider">Category *</label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value as CategoryId)}
                className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-amber-600 text-sm font-medium cursor-pointer"
              >
                <option value="espresso">Hot & Espresso</option>
                <option value="cold_brew">Cold Brew & Iced</option>
                <option value="tea">Teas & Specialty</option>
                <option value="bakery">Artisan Bakery</option>
                <option value="dessert">Sweet Treats</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block uppercase tracking-wider">Price ($) *</label>
              <input
                type="number"
                step="0.10"
                min="0"
                required
                value={price}
                onChange={e => setPrice(e.target.value)}
                className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-amber-600 text-sm font-mono font-bold"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block uppercase tracking-wider">Description</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Detailed description of flavors and ingredients..."
              rows={3}
              className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-amber-600 text-sm font-medium"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block uppercase tracking-wider">Image URL</label>
            <input
              type="url"
              value={image}
              onChange={e => setImage(e.target.value)}
              placeholder="https://images.unsplash.com/..."
              className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-amber-600 text-xs font-mono"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <label className="flex items-center gap-2 cursor-pointer p-3 rounded-xl border border-stone-200">
              <input
                type="checkbox"
                checked={popular}
                onChange={e => setPopular(e.target.checked)}
                className="w-4 h-4 text-amber-600 rounded"
              />
              <span>Mark as Popular</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer p-3 rounded-xl border border-stone-200">
              <input
                type="checkbox"
                checked={available}
                onChange={e => setAvailable(e.target.checked)}
                className="w-4 h-4 text-amber-600 rounded"
              />
              <span>Currently In Stock</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="pt-4 flex justify-end gap-3 border-t border-stone-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold shadow-md"
            >
              {product ? 'Save Changes' : 'Create Item'}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
