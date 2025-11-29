import { ChevronLeft, X } from 'lucide-react';
import { useState } from 'react';

interface FiltersScreenProps {
  onNavigate: (screen: string, data?: any) => void;
}

export function FiltersScreen({ onNavigate }: FiltersScreenProps) {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 200]);

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'Negro', hex: '#000000' },
    { name: 'Blanco', hex: '#FFFFFF' },
    { name: 'Beige', hex: '#D4C5B9' },
    { name: 'Azul', hex: '#2B5797' },
    { name: 'Verde', hex: '#4A5D4F' },
    { name: 'Rosa', hex: '#D4A5A5' }
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

  const clearAll = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange([0, 200]);
  };

  const hasFilters = selectedSizes.length > 0 || selectedColors.length > 0 || priceRange[0] > 0 || priceRange[1] < 200;

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-black z-50 border-b border-gray-200 dark:border-gray-900">
        <div className="px-4 py-4 flex items-center justify-between">
          <button onClick={() => onNavigate('catalog')}>
            <ChevronLeft className="w-6 h-6 dark:text-white" />
          </button>
          <h1 className="text-sm uppercase tracking-[0.3em] dark:text-white">Filtros</h1>
          {hasFilters && (
            <button onClick={clearAll} className="text-xs uppercase tracking-wider underline dark:text-white">
              Limpiar
            </button>
          )}
          {!hasFilters && <div className="w-6"></div>}
        </div>
      </header>

      {/* Filters Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-8">
        {/* Size Filter */}
        <div>
          <h2 className="text-xs uppercase tracking-widest mb-4 dark:text-white">Talla</h2>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => toggleSize(size)}
                className={`py-3 text-xs uppercase tracking-wider border transition-colors
                  ${selectedSizes.includes(size)
                    ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
                    : 'bg-transparent dark:text-white border-gray-300 dark:border-gray-700'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div>
          <h2 className="text-xs uppercase tracking-widest mb-4 dark:text-white">Color</h2>
          <div className="grid grid-cols-3 gap-3">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => toggleColor(color.name)}
                className="relative"
              >
                <div
                  className={`w-full aspect-square rounded-full border-2 transition-all
                    ${selectedColors.includes(color.name)
                      ? 'border-black dark:border-white scale-95'
                      : 'border-gray-200 dark:border-gray-800'}`}
                  style={{ backgroundColor: color.hex }}
                >
                  {selectedColors.includes(color.name) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center
                        ${color.hex === '#FFFFFF' ? 'bg-black' : 'bg-white'}`}>
                        <X className={`w-4 h-4 ${color.hex === '#FFFFFF' ? 'text-white' : 'text-black'}`} />
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-[10px] text-center mt-1 uppercase tracking-wider dark:text-white">
                  {color.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h2 className="text-xs uppercase tracking-widest mb-4 dark:text-white">Precio</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm dark:text-white">
              <span>{priceRange[0]} EUR</span>
              <span>{priceRange[1]} EUR</span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="200"
                step="5"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="w-full h-1 bg-gray-200 dark:bg-gray-800 appearance-none cursor-pointer slider"
              />
              <input
                type="range"
                min="0"
                max="200"
                step="5"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-1 bg-gray-200 dark:bg-gray-800 appearance-none cursor-pointer slider absolute top-0"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Mínimo</p>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-full text-sm dark:text-white dark:bg-black focus:outline-none"
                />
              </div>
              <div className="border border-gray-300 dark:border-gray-700 px-3 py-2">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Máximo</p>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 200])}
                  className="w-full text-sm dark:text-white dark:bg-black focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Active Filters Summary */}
        {hasFilters && (
          <div className="pt-4 border-t border-gray-200 dark:border-gray-900">
            <h3 className="text-xs uppercase tracking-widest mb-3 dark:text-white">Filtros activos</h3>
            <div className="flex flex-wrap gap-2">
              {selectedSizes.map((size) => (
                <span key={size} className="px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-[10px] uppercase tracking-wider flex items-center gap-1">
                  {size}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => toggleSize(size)} />
                </span>
              ))}
              {selectedColors.map((color) => (
                <span key={color} className="px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-[10px] uppercase tracking-wider flex items-center gap-1">
                  {color}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => toggleColor(color)} />
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fixed Apply Button */}
      <div className="sticky bottom-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-900 px-4 py-4">
        <button
          onClick={() => onNavigate('catalog')}
          className="w-full py-4 bg-black dark:bg-white text-white dark:text-black text-xs uppercase tracking-[0.2em] active:opacity-80"
        >
          Aplicar filtros {hasFilters && `(${selectedSizes.length + selectedColors.length})`}
        </button>
      </div>
    </div>
  );
}
