import { ChevronLeft, ChevronRight, X, Home, Search, ShoppingBag, User } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Badge } from '../components/ui';
import { useState } from 'react';

interface CatalogScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  data?: any;
}

export function CatalogScreen({ onNavigate, data }: CatalogScreenProps) {
  const [viewMode, setViewMode] = useState<'single' | 'double' | 'grid'>('grid');
  const [activeFilters, setActiveFilters] = useState<string[]>(['NEGROS']);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>(['AZUL']);
  
  const categories = ['JIMAL PRINT', 'BOTAS Y BOTINES', 'MOCASINES', 'SANDALIAS', 'TACONES'];
  const [activeCategory, setActiveCategory] = useState('BOTAS Y BOTINES');

  const sizes = [
    'MX 23 (US 5)',
    'MX 23½ (US 6)',
    'MX 24 (US 6½)',
    'MX 24½ (US 7½)',
    'MX 24 (US XS)',
    'MX 25½ (US 8)',
    'MX 26½ (US 10)'
  ];

  const colors = [
    { name: 'AZUL', color: '#4A90E2' },
    { name: 'BEIGE', color: '#D4C5B9' },
    { name: 'BLANCO', color: '#FFFFFF' },
    { name: 'CAQUI', color: '#8B8B4B' },
    { name: 'NEGRO', color: '#000000' }
  ];

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const products = [
    { id: 1, name: 'Blazer estructura', price: '89,95 EUR', stock: '3 tallas disponibles', badge: 'Nuevo', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400' },
    { id: 2, name: 'Vestido midi satén', price: '49,95 EUR', stock: 'Disponible', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400' },
    { id: 3, name: 'Pantalón wide leg', price: '39,95 EUR', stock: 'Últimas unidades', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400' },
    { id: 4, name: 'Camisa oversize lino', price: '29,95 EUR', stock: 'Disponible', image: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=400' },
    { id: 5, name: 'Vestido camisero', price: '35,95 EUR', stock: '5 tallas disponibles', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400' },
    { id: 6, name: 'Top cropped', price: '19,95 EUR', stock: 'Disponible', badge: 'Destacado', image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=400' },
    { id: 7, name: 'Falda midi plisada', price: '45,95 EUR', stock: 'Disponible', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400' },
    { id: 8, name: 'Chaqueta denim', price: '59,95 EUR', stock: '2 tallas disponibles', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400' }
  ];

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-black z-50 border-b border-gray-200 dark:border-gray-900">
        {/* Main Section Tabs */}
        <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-900 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 min-w-max">
            {['NUEVA COLECCIÓN', 'MUJER', 'HOMBRE', 'NIÑOS'].map((section) => (
              <button
                key={section}
                className="px-4 py-2 border border-white text-white text-xs uppercase tracking-wider whitespace-nowrap"
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Carousel + Filters */}
        <div className="px-4 py-4 flex items-center gap-4">
          <div className="flex-1 flex items-center gap-3 min-w-0">
            <button className="shrink-0">
              <ChevronLeft className="w-4 h-4 dark:text-white" />
            </button>
            <div className="flex gap-6 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs uppercase tracking-wider whitespace-nowrap transition-all
                    ${activeCategory === cat 
                      ? 'dark:text-white' 
                      : 'dark:text-gray-400'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button className="shrink-0">
              <ChevronRight className="w-4 h-4 dark:text-white" />
            </button>
          </div>
          
          <button 
            onClick={() => setFiltersOpen(true)}
            className="shrink-0 px-4 py-2 bg-white text-black text-xs uppercase tracking-wider"
          >
            FILTROS
          </button>
        </div>

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="px-4 pb-3 border-b border-gray-200 dark:border-gray-900">
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => removeFilter(filter)}
                  className="flex items-center gap-2 px-3 py-1.5 bg-transparent border border-white text-white text-xs uppercase tracking-wider"
                >
                  {filter}
                  <X className="w-3 h-3" />
                </button>
              ))}
            </div>
          </div>
        )}
      </header>



      {/* Products Grid */}
      <div className={`px-4 py-4 grid gap-4 ${
        viewMode === 'single' ? 'grid-cols-1' : 
        viewMode === 'double' ? 'grid-cols-2' : 
        'grid-cols-2'
      }`}>
        {products.map((product) => (
          <div 
            key={product.id}
            onClick={() => onNavigate('product', product)}
            className="cursor-pointer active:opacity-80"
          >
            <div className="relative aspect-[3/4] bg-gray-100">
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

      {/* Filters Modal */}
      {filtersOpen && (
        <div className="fixed inset-0 bg-black z-[100] overflow-y-auto">
          <div className="min-h-screen">
            {/* Header */}
            <div className="sticky top-0 bg-black z-10 px-4 py-4 border-b border-gray-900 flex items-center justify-between">
              <button onClick={() => setFiltersOpen(false)}>
                <X className="w-6 h-6 text-white" />
              </button>
              <span className="text-xs uppercase tracking-wider text-gray-400">MUJER</span>
            </div>

            {/* Categories Tabs */}
            <div className="border-b border-gray-900">
              <div className="flex px-4 gap-8 overflow-x-auto scrollbar-hide">
                {['MUJER', 'HOMBRE', 'NIÑOS', 'HOME', 'VISTA 2', 'FILTROS'].map((tab, index) => (
                  <button 
                    key={tab}
                    className={`py-4 text-xs uppercase tracking-wider whitespace-nowrap ${
                      index === 5 ? 'text-white' : 'text-gray-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Content */}
            <div className="px-4 py-6">
              {/* Limpiar Filtros */}
              <button className="text-xs uppercase tracking-wider text-white mb-8">
                LIMPIAR FILTROS
              </button>

              {/* Ordenar */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-white mb-4">ORDENAR</h3>
                <div className="space-y-3">
                  <button className="block text-sm text-gray-400 uppercase tracking-wide">
                    PRECIO ASCENDENTE
                  </button>
                  <button className="block text-sm text-gray-400 uppercase tracking-wide">
                    PRECIO DESCENDENTE
                  </button>
                </div>
              </div>

              {/* Talla */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-white mb-4">TALLA</h3>
                <div className="space-y-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`block text-sm uppercase tracking-wide ${
                        selectedSizes.includes(size) ? 'text-white' : 'text-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                  <button className="block text-sm text-gray-400 uppercase tracking-wide">
                    VER MÁS
                  </button>
                </div>
              </div>

              {/* Color */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-white mb-4">COLOR</h3>
                <div className="space-y-3">
                  {colors.map((colorItem) => (
                    <button
                      key={colorItem.name}
                      onClick={() => toggleColor(colorItem.name)}
                      className="flex items-center gap-3"
                    >
                      <div 
                        className="w-4 h-4 border border-gray-600"
                        style={{ backgroundColor: colorItem.color }}
                      />
                      <span className={`text-sm uppercase tracking-wide ${
                        selectedColors.includes(colorItem.name) ? 'text-white' : 'text-gray-400'
                      }`}>
                        {colorItem.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Ver Resultados Button */}
              <button className="w-full mt-8 py-4 border border-white text-white text-xs uppercase tracking-[0.2em] active:bg-white active:text-black transition-colors">
                VER RESULTADOS
              </button>
            </div>
          </div>
        </div>
      )}

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
