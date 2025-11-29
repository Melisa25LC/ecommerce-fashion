import { Search, ShoppingBag, User, Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Badge } from '../components/ui';

interface HomeScreenProps {
  onNavigate: (screen: string, data?: any) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const categories = [
    'Nueva colección',
    'Mujer',
    'Hombre', 
    'Niños'
  ];

  const subcategories = ['JIMAL PRINT', 'BOTAS Y BOTINES', 'MOCASINES', 'SANDALIAS', 'TACONES'];

  const products = [
    { id: 1, name: 'Blazer estructura', price: '89,95 EUR', badge: 'Nuevo', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400' },
    { id: 2, name: 'Vestido midi', price: '49,95 EUR', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400' },
    { id: 3, name: 'Pantalón wide leg', price: '39,95 EUR', badge: 'Destacado', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400' },
    { id: 4, name: 'Camisa oversize', price: '29,95 EUR', image: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=400' }
  ];

  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-black z-50 border-b border-gray-900">
        {/* Main Section Tabs */}
        <div className="px-4 py-4 border-b border-gray-900 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onNavigate('catalog', { category })}
                className="px-4 py-2 border border-white text-white text-xs uppercase tracking-wider whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Subcategories Carousel + Filters */}
        <div className="px-4 py-4 flex items-center gap-4">
          <div className="flex-1 flex items-center gap-3 min-w-0">
            <button className="shrink-0">
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <div className="flex gap-6 overflow-x-auto scrollbar-hide">
              {subcategories.map((subcat) => (
                <button
                  key={subcat}
                  className="text-xs uppercase tracking-wider whitespace-nowrap text-gray-400"
                >
                  {subcat}
                </button>
              ))}
            </div>
            <button className="shrink-0">
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
          
          <button 
            onClick={() => onNavigate('filters')}
            className="shrink-0 px-4 py-2 bg-white text-black text-xs uppercase tracking-wider"
          >
            FILTROS
          </button>
        </div>
      </header>

      {/* Editorial Section */}
      <section className="px-4 py-6">
        <div className="relative aspect-[4/5] bg-gray-100 mb-3">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800"
            alt="Editorial"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
            <h2 className="text-white text-lg uppercase tracking-wider mb-1">Primavera 2025</h2>
            <p className="text-white/90 text-xs tracking-wide">Nueva colección</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm uppercase tracking-widest text-white">Destacados</h2>
          <button 
            onClick={() => onNavigate('catalog')}
            className="text-xs uppercase tracking-wider underline text-white"
          >
            Ver todo
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <div key={product.id} onClick={() => onNavigate('product', product)} className="cursor-pointer active:opacity-80">
              <div className="relative aspect-[3/4] bg-gray-900">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                  style={{
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    maskImage: 'linear-gradient(to top, black, transparent)',
                    WebkitMaskImage: 'linear-gradient(to top, black, transparent)'
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-start gap-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="pt-0.5 pointer-events-auto"
                      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </button>
                    <div className="flex-1">
                      <h3 className="text-xs uppercase tracking-wide mb-1 text-white">{product.name}</h3>
                      <p className="text-xs text-gray-300">{product.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-50">
        <div className="max-w-md mx-auto flex items-center justify-around py-3">
          <button className="flex flex-col items-center gap-1 px-4 py-2">
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
