import { ChevronLeft, Trash2, Plus, Minus } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

interface CartScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  data?: any;
}

export function CartScreen({ onNavigate, data }: CartScreenProps) {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Blazer estructura',
      price: 89.95,
      size: data?.size || 'M',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400'
    },
    {
      id: 2,
      name: 'Vestido midi satén',
      price: 49.95,
      size: 'S',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400'
    }
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 3.95;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-black z-50 border-b border-gray-200 dark:border-gray-900">
        <div className="px-4 py-4 flex items-center justify-between">
          <button onClick={() => onNavigate('catalog')}>
            <ChevronLeft className="w-6 h-6 dark:text-white" />
          </button>
          <h1 className="text-sm uppercase tracking-[0.3em] dark:text-white">Carrito</h1>
          <div className="w-6"></div>
        </div>
      </header>

      {items.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">Tu carrito está vacío</p>
          <button
            onClick={() => onNavigate('catalog')}
            className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black text-xs uppercase tracking-[0.2em]"
          >
            Seguir comprando
          </button>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-200 dark:border-gray-900">
                <div className="w-24 h-32 bg-gray-100 flex-shrink-0">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs uppercase tracking-wide mb-1 dark:text-white">{item.name}</h3>
                    <p className="text-xs text-gray-500 mb-1">Talla: {item.size}</p>
                    <p className="text-sm dark:text-white">{item.price.toFixed(2)} EUR</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-700">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 active:bg-gray-100 dark:active:bg-gray-900"
                      >
                        <Minus className="w-3 h-3 dark:text-white" />
                      </button>
                      <span className="text-xs dark:text-white w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 active:bg-gray-100 dark:active:bg-gray-900"
                      >
                        <Plus className="w-3 h-3 dark:text-white" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 active:bg-gray-100 dark:active:bg-gray-900"
                    >
                      <Trash2 className="w-4 h-4 text-gray-400 dark:text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="border-t border-gray-200 dark:border-gray-900 px-4 py-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="dark:text-white">Subtotal</span>
              <span className="dark:text-white">{subtotal.toFixed(2)} EUR</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="dark:text-white">Envío</span>
              <span className="dark:text-white">
                {shipping === 0 ? 'Gratis' : `${shipping.toFixed(2)} EUR`}
              </span>
            </div>
            {shipping === 0 && (
              <p className="text-xs text-green-500">¡Envío gratuito en pedidos superiores a 50 EUR!</p>
            )}
            {shipping > 0 && (
              <p className="text-xs text-gray-500">
                Añade {(50 - subtotal).toFixed(2)} EUR más para envío gratuito
              </p>
            )}
            <div className="pt-3 border-t border-gray-200 dark:border-gray-900 flex justify-between">
              <span className="uppercase tracking-wider dark:text-white">Total</span>
              <span className="dark:text-white">{total.toFixed(2)} EUR</span>
            </div>
          </div>

          {/* Fixed Checkout Button */}
          <div className="sticky bottom-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-900 px-4 py-4">
            <button
              onClick={() => onNavigate('checkout')}
              className="w-full py-4 bg-black dark:bg-white text-white dark:text-black text-xs uppercase tracking-[0.2em] active:opacity-80"
            >
              Proceder al pago
            </button>
          </div>
        </>
      )}
    </div>
  );
}
