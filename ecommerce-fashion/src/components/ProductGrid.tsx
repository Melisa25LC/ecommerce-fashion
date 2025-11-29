import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'ABRIGO ESTRUCTURADO',
    price: '89,95 EUR',
    image: 'https://images.unsplash.com/photo-1550872199-63f4382fe925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwd29tYW4lMjBjb2F0fGVufDF8fHx8MTc2NDM2MzI2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: 'Nuevo'
  },
  {
    id: 2,
    name: 'CONJUNTO ELEGANTE',
    price: '79,95 EUR',
    image: 'https://images.unsplash.com/photo-1635205383450-e0fee6fe73c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbWFuJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjQzNjMyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: null
  },
  {
    id: 3,
    name: 'VESTIDO NEGRO',
    price: '49,95 EUR',
    image: 'https://images.unsplash.com/photo-1634826260499-7d97a6049913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBibGFja3xlbnwxfHx8fDE3NjQzNjMyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: null
  },
  {
    id: 4,
    name: 'ACCESORIOS MINIMAL',
    price: '29,95 EUR',
    image: 'https://images.unsplash.com/photo-1601281866896-1576541e77a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBtaW5pbWFsfGVufDF8fHx8MTc2NDMwMjI3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: 'Destacado'
  },
  {
    id: 5,
    name: 'VESTIDO ELEGANTE',
    price: '69,95 EUR',
    image: 'https://images.unsplash.com/photo-1764265148862-7ee72a4fb367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZHJlc3MlMjBlbGVnYW50fGVufDF8fHx8MTc2NDI5NjAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: null
  },
  {
    id: 6,
    name: 'CONJUNTO FORMAL',
    price: '99,95 EUR',
    image: 'https://images.unsplash.com/photo-1506619928596-bb8c201545cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwd29tYW4lMjBtaW5pbWFsfGVufDF8fHx8MTc2NDM2MzI2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: null
  }
];

export function ProductGrid() {
  return (
    <section className="px-4 py-8">
      {/* Section Header */}
      <div className="mb-6">
        <h3 className="uppercase tracking-widest text-sm mb-1 dark:text-white">Tendencias</h3>
        <p className="text-gray-600 dark:text-gray-500 text-xs">Descubre las últimas novedades</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="cursor-pointer active:opacity-80 transition-opacity">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-2">
        <ImageWithFallback 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        
        {/* Tag */}
        {product.tag && (
          <div className="absolute top-2 left-2 bg-white px-2 py-1 text-[9px] uppercase tracking-widest">
            {product.tag}
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-2 right-2 p-1.5 bg-white/90 active:bg-white transition-colors"
        >
          <Heart 
            className={`w-3.5 h-3.5 transition-colors ${
              isFavorite ? 'fill-black stroke-black' : 'stroke-black'
            }`}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-0.5">
        <p className="text-xs uppercase tracking-wide line-clamp-2 dark:text-white">{product.name}</p>
        <p className="text-xs dark:text-gray-500">{product.price}</p>
      </div>
    </div>
  );
}
