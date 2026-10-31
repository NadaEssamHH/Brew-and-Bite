import React from 'react';
import { MenuItem } from '../../types/menu';
import { formatCurrency } from '../../lib/whatsapp';
import { Edit3, Trash2, CheckCircle2, XCircle, Sparkles } from 'lucide-react';

interface ProductTableProps {
  products: MenuItem[];
  onEditProduct: (product: MenuItem) => void;
  onDeleteProduct: (id: string) => void;
  onToggleAvailability: (id: string) => void;
}

export const ProductTable: React.FC<ProductTableProps> = ({
  products,
  onEditProduct,
  onDeleteProduct,
  onToggleAvailability,
}) => {
  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-stone-900 text-stone-300 text-xs uppercase tracking-wider font-semibold border-b border-stone-800">
              <th className="py-4 px-6">Product</th>
              <th className="py-4 px-4">Category</th>
              <th className="py-4 px-4">Price</th>
              <th className="py-4 px-4 text-center">Status</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-sm">
            {products.map(product => (
              <tr key={product.id} className="hover:bg-stone-50/80 transition-colors">
                
                {/* Product Thumbnail & Name */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-xl object-cover border border-stone-200 shrink-0"
                    />
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm font-serif">
                        {product.name}
                      </h4>
                      {product.popular && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full mt-0.5">
                          <Sparkles className="w-3 h-3 text-amber-600" /> Popular
                        </span>
                      )}
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="py-4 px-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 bg-stone-100 px-2.5 py-1 rounded-lg">
                    {product.category.replace('_', ' ')}
                  </span>
                </td>

                {/* Price */}
                <td className="py-4 px-4 font-mono font-bold text-amber-700">
                  {formatCurrency(product.price)}
                </td>

                {/* Status Toggle */}
                <td className="py-4 px-4 text-center">
                  <button
                    onClick={() => onToggleAvailability(product.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      product.available
                        ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                        : 'bg-rose-100 text-rose-800 hover:bg-rose-200'
                    }`}
                    title="Click to toggle availability"
                  >
                    {product.available ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>In Stock</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5 text-rose-600" />
                        <span>Sold Out</span>
                      </>
                    )}
                  </button>
                </td>

                {/* Action Buttons */}
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => onEditProduct(product)}
                      className="p-2 text-stone-600 hover:text-amber-700 hover:bg-amber-100/60 rounded-xl transition-all"
                      title="Edit Product"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
                          onDeleteProduct(product.id);
                        }
                      }}
                      className="p-2 text-stone-400 hover:text-rose-600 hover:bg-rose-100/60 rounded-xl transition-all"
                      title="Delete Product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
