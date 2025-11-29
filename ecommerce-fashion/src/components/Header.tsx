import { Search, ShoppingBag, Menu } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black transition-colors">
      {/* Top announcement bar */}
      <div className="bg-black text-white text-center py-2 px-4">
        <p className="text-[10px] tracking-widest uppercase">Envío gratis + 30€</p>
      </div>

      {/* Main header */}
      <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-900">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            className="p-2 -ml-2 active:bg-gray-50 dark:active:bg-gray-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5 dark:text-white" />
          </button>

          {/* Logo */}
          <div className="flex-1 text-center">
            <h1 className="tracking-[0.35em] uppercase text-xl dark:text-white">Zara</h1>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button className="p-2 active:bg-gray-50 dark:active:bg-gray-900 transition-colors">
              <Search className="w-5 h-5 dark:text-white" />
            </button>
            <button className="p-2 -mr-2 active:bg-gray-50 dark:active:bg-gray-900 transition-colors relative">
              <ShoppingBag className="w-5 h-5 dark:text-white" />
              <span className="absolute top-1.5 right-0.5 w-1.5 h-1.5 bg-black dark:bg-white rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-900 flex flex-col gap-4 pb-2">
            <a href="#" className="active:opacity-60 transition-opacity uppercase tracking-widest text-xs dark:text-white">Mujer</a>
            <a href="#" className="active:opacity-60 transition-opacity uppercase tracking-widest text-xs dark:text-white">Hombre</a>
            <a href="#" className="active:opacity-60 transition-opacity uppercase tracking-widest text-xs dark:text-white">Niños</a>
            <a href="#" className="active:opacity-60 transition-opacity uppercase tracking-widest text-xs dark:text-white">Belleza</a>
          </nav>
        )}
      </div>

      {/* Category tabs */}
      <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-100 dark:border-gray-900 px-4">
        <button className="py-3 px-4 text-xs uppercase tracking-widest whitespace-nowrap border-b-2 border-black dark:border-white dark:text-white">
          Nuevo
        </button>
        <button className="py-3 px-4 text-xs uppercase tracking-widest whitespace-nowrap text-gray-500 dark:text-gray-500 active:text-black dark:active:text-white">
          Tendencias
        </button>
        <button className="py-3 px-4 text-xs uppercase tracking-widest whitespace-nowrap text-gray-500 dark:text-gray-500 active:text-black dark:active:text-white">
          Edición
        </button>
        <button className="py-3 px-4 text-xs uppercase tracking-widest whitespace-nowrap text-gray-500 dark:text-gray-500 active:text-black dark:active:text-white">
          Rebajas
        </button>
      </div>
    </header>
  );
}
