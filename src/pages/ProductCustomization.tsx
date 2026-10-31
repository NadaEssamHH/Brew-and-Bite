import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { ProductDetails } from '../components/product/ProductDetails';
import { ProductCustomization as ProductCustomizationForm } from '../components/product/ProductCustomization';
import { QuantitySelector } from '../components/product/QuantitySelector';
import { AddToCartButton } from '../components/product/AddToCartButton';
import { CartItemOptions } from '../types/cart';
import { ArrowLeft, Ban } from 'lucide-react';

export const ProductCustomization: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { menuItems, addToCart } = useCart();

  const product = useMemo(() => {
    return menuItems.find(item => item.id === id);
  }, [menuItems, id]);

  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<CartItemOptions>({});

  // Set defaults when product is loaded
  useEffect(() => {
    if (product) {
      setSelectedOptions({
        size: product.sizeOptions?.[0],
        milk: product.milkOptions?.[0],
        sugar: product.sugarOptions?.[1], // e.g. 25% or default
        extras: [],
        specialInstructions: '',
      });
    }
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold font-serif text-stone-800">Product Not Found</h2>
        <p className="text-stone-500 text-sm">The menu item you are looking for does not exist or was removed.</p>
        <Link to="/menu" className="inline-block px-6 py-2.5 bg-amber-600 text-white font-bold text-xs rounded-xl">
          Return to Menu
        </Link>
      </div>
    );
  }

  // Calculate total unit price based on customization
  const unitPrice = useMemo(() => {
    let base = product.price;
    if (selectedOptions.size) base += selectedOptions.size.priceModifier;
    if (selectedOptions.milk) base += selectedOptions.milk.priceModifier;
    if (selectedOptions.extras && selectedOptions.extras.length > 0) {
      base += selectedOptions.extras.reduce((sum, e) => sum + e.price, 0);
    }
    return base;
  }, [product, selectedOptions]);

  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    addToCart(product, selectedOptions, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Back button */}
      <Link
        to="/menu"
        className="inline-flex items-center gap-2 text-stone-600 hover:text-amber-700 font-semibold text-sm transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Menu</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Image Preview */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-3xl overflow-hidden border border-stone-200 shadow-xl bg-stone-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 sm:h-[450px] object-cover"
            />
            {!product.available && (
              <div className="absolute inset-0 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 rounded-xl font-bold text-xs">
                  <Ban className="w-4 h-4" />
                  <span>Currently Out of Stock</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Customization Controls */}
        <div className="lg:col-span-7 space-y-8">
          <ProductDetails product={product} />

          {product.available ? (
            <>
              <ProductCustomizationForm
                product={product}
                selectedOptions={selectedOptions}
                onChangeOptions={setSelectedOptions}
              />

              <div className="pt-6 border-t border-stone-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold uppercase text-stone-700">Quantity</span>
                  <QuantitySelector
                    quantity={quantity}
                    onIncrease={() => setQuantity(prev => prev + 1)}
                    onDecrease={() => setQuantity(prev => Math.max(1, prev - 1))}
                  />
                </div>

                <AddToCartButton
                  totalPrice={totalPrice}
                  onAddToCart={handleAddToCart}
                />
              </div>
            </>
          ) : (
            <div className="p-6 rounded-2xl bg-stone-100 text-stone-500 font-semibold text-sm text-center">
              This item is temporarily sold out and cannot be ordered right now.
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
