import { ChevronLeft, Share2, ChevronRight, Home, Search, ShoppingBag, User } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import favoriteIcon from 'figma:asset/46f5d32054089b7095f156cba76a6a64de26da24.png';

interface ProductScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  data?: any;
}

export function ProductScreen({ onNavigate, data }: ProductScreenProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const product = data || {
    name: 'Blazer estructura',
    price: '89,95 EUR',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
      'https://images.unsplash.com/photo-1594938384040-1043ae4df1e9?w=800'
    ]
  };

  const sizes = [
    { size: 'XS', stock: 'Disponible' },
    { size: 'S', stock: 'Disponible' },
    { size: 'M', stock: 'Últimas unidades' },
    { size: 'L', stock: 'Disponible' },
    { size: 'XL', stock: 'Agotado' }
  ];

  const images = product.images || [product.image, product.image];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-black z-50 border-b border-gray-200 dark:border-gray-900">
        <div className="px-4 py-4 flex items-center justify-between">
          <button onClick={() => onNavigate('catalog')}>
            <ChevronLeft className="w-6 h-6 dark:text-white" />
          </button>
          <div className="flex gap-4 items-center">
            <Share2 className="w-5 h-5 dark:text-white cursor-pointer" />
            <button className="cursor-pointer">
              <img src={favoriteIcon} alt="Favorito" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Image Gallery */}
      <div className="relative">
        <div className="aspect-[3/4] bg-gray-100">
          <ImageWithFallback
            src={images[currentImage]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Image Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
          {images.map((_: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                idx === currentImage ? 'bg-white w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="px-4 py-6 space-y-6">
        {/* Title and Price */}
        <div>
          <h1 className="text-lg uppercase tracking-wider mb-2 dark:text-white">{product.name}</h1>
          <p className="text-lg dark:text-white">{product.price}</p>
        </div>

        {/* Description */}
        <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>Blazer de corte recto confeccionado en tejido de alta calidad. Cuello solapa y manga larga acabada en puño con botones. Cierre frontal con botones a contraste.</p>
        </div>

        {/* Size Selection */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs uppercase tracking-widest dark:text-white">Seleccionar talla</h2>
            <button
              onClick={() => setShowSizeGuide(!showSizeGuide)}
              className="text-xs uppercase tracking-wider underline dark:text-white"
            >
              Guía de tallas
            </button>
          </div>

          {showSizeGuide && (
            <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className="py-2 text-left dark:text-white">Talla</th>
                    <th className="py-2 text-left dark:text-white">Pecho (cm)</th>
                    <th className="py-2 text-left dark:text-white">Cintura (cm)</th>
                  </tr>
                </thead>
                <tbody className="dark:text-gray-400">
                  <tr><td className="py-1">XS</td><td>80-84</td><td>60-64</td></tr>
                  <tr><td className="py-1">S</td><td>84-88</td><td>64-68</td></tr>
                  <tr><td className="py-1">M</td><td>88-92</td><td>68-72</td></tr>
                  <tr><td className="py-1">L</td><td>92-96</td><td>72-76</td></tr>
                  <tr><td className="py-1">XL</td><td>96-100</td><td>76-80</td></tr>
                </tbody>
              </table>
            </div>
          )}

          <div className="grid grid-cols-5 gap-2">
            {sizes.map(({ size, stock }) => (
              <button
                key={size}
                onClick={() => stock !== 'Agotado' && setSelectedSize(size)}
                disabled={stock === 'Agotado'}
                className={`py-3 text-xs uppercase tracking-wider border transition-colors relative
                  ${stock === 'Agotado' 
                    ? 'border-gray-200 dark:border-gray-800 text-gray-300 dark:text-gray-700 cursor-not-allowed line-through' 
                    : selectedSize === size
                    ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
                    : 'bg-transparent dark:text-white border-gray-300 dark:border-gray-700'}`}
              >
                {size}
                {stock === 'Últimas unidades' && selectedSize !== size && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {selectedSize && (
            <p className="mt-2 text-xs text-gray-500">
              {sizes.find(s => s.size === selectedSize)?.stock}
            </p>
          )}
        </div>

        {/* Details */}
        <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-900">
          <button className="w-full flex items-center justify-between py-3 text-xs uppercase tracking-wider dark:text-white">
            Composición y cuidados
            <ChevronRight className="w-4 h-4" />
          </button>
          <button className="w-full flex items-center justify-between py-3 text-xs uppercase tracking-wider dark:text-white border-t border-gray-200 dark:border-gray-900">
            Envío y devoluciones
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Fixed Add to Cart Button */}
      <div className="sticky bottom-20 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-900 px-4 py-4">
        <button
          onClick={() => selectedSize && onNavigate('cart', { ...product, size: selectedSize })}
          disabled={!selectedSize}
          className={`w-full py-4 text-xs uppercase tracking-[0.2em] transition-all
            ${selectedSize
              ? 'bg-black dark:bg-white text-white dark:text-black active:scale-95'
              : 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'}`}
        >
          {selectedSize ? 'Añadir al carrito' : 'Selecciona una talla'}
        </button>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-50">
        <div className="max-w-md mx-auto flex items-center justify-around py-3">
          <button 
            onClick={() => onNavigate('home')}
            className="flex flex-col items-center gap-1 px-4 py-2"
          >
            <Home className="w-5 h-5 text-white" />
          </button>
          <button className="flex flex-col items-center gap-1 px-4 py-2">
            <Search className="w-5 h-5 text-white" />
          </button>
          <button className="flex flex-col items-center gap-1 px-4 py-2">
            <span className="text-white text-xs uppercase tracking-widest">MENÚ</span>
          </button>
          <button 
            onClick={() => onNavigate('cart')}
            className="flex flex-col items-center gap-1 px-4 py-2"
          >
            <ShoppingBag className="w-5 h-5 text-white" />
          </button>
          <button className="flex flex-col items-center gap-1 px-4 py-2">
            <User className="w-5 h-5 text-white" />
          </button>
        </div>
      </nav>
    </div>
  );
}
