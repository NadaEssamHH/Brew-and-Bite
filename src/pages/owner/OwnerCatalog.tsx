import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { OwnerSidebar } from '../../components/owner/OwnerSidebar';
import { ProductTable } from '../../components/owner/ProductTable';
import { ProductForm } from '../../components/owner/ProductForm';
import { MenuItem } from '../../types/menu';

export const OwnerCatalog: React.FC = () => {
  const {
    menuItems,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    toggleItemAvailability,
  } = useCart();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<MenuItem | null>(null);

  const handleOpenAddForm = () => {
    setEditingProduct(null);
    setIsFormOpen(true);
  };

  const handleOpenEditForm = (product: MenuItem) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  const handleSaveProduct = (itemData: MenuItem | Omit<MenuItem, 'id'>) => {
    if ('id' in itemData) {
      updateMenuItem(itemData as MenuItem);
    } else {
      addMenuItem(itemData as Omit<MenuItem, 'id'>);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-stone-900">
            Catalog Management
          </h1>
          <p className="text-stone-500 text-sm mt-1">
            Owner Dashboard (SCR-08) — Manage coffee and bakery items, update prices, and toggle in-stock status.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4">
          <OwnerSidebar
            onAddNewProduct={handleOpenAddForm}
            totalProductsCount={menuItems.length}
          />
        </div>

        <div className="lg:col-span-8">
          <ProductTable
            products={menuItems}
            onEditProduct={handleOpenEditForm}
            onDeleteProduct={deleteMenuItem}
            onToggleAvailability={toggleItemAvailability}
          />
        </div>
      </div>

      <ProductForm
        product={editingProduct}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSaveProduct}
      />

    </div>
  );
};
