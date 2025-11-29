import { ShoppingBag, Search, Home, User, ChevronLeft, ChevronRight, Grid3x3, Bookmark } from 'lucide-react';
import { 
  Button, 
  Input, 
  Badge, 
  Card, 
  CardImage, 
  CardContent, 
  CardTitle, 
  CardPrice,
  IconButton,
  Heading,
  Subheading,
  Label,
  Caption,
  Body,
  Divider,
  Container,
  Section
} from './components/ui';

export default function UIKitDemo() {
  return (
    <div className="min-h-screen bg-black py-12 pb-24">
      <Container>
        <div className="mb-8">
          <Heading className="text-white">UI KIT - E-COMMERCE ZARA</Heading>
          <Caption className="text-gray-400 mt-2">Sistema de diseño completo con todos los componentes</Caption>
        </div>
        <div className="space-y-12">
          {/* Typography */}
          <Section>
            <Subheading className="mb-6">Tipografía</Subheading>
            <div className="space-y-4">
              <Heading>Título Principal</Heading>
              <Subheading>Subtítulo</Subheading>
              <Label>Etiqueta</Label>
              <Caption>Caption Text</Caption>
              <Body>Texto del cuerpo para descripciones y contenido general.</Body>
            </div>
          </Section>

          <Divider />

          {/* Buttons */}
          <Section>
            <Subheading className="mb-6">Botones</Subheading>
            <div className="space-y-3">
              <Button variant="primary" fullWidth>Primary Button</Button>
              <Button variant="secondary" fullWidth>Secondary Button</Button>
              <Button variant="outline" fullWidth>Outline Button</Button>
              <Button variant="ghost" fullWidth>Ghost Button</Button>
            </div>
            
            <div className="flex gap-3 mt-6">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </Section>

          <Divider />

          {/* Icon Buttons */}
          <Section>
            <Subheading className="mb-6">Icon Buttons</Subheading>
            <div className="flex gap-3">
              <IconButton variant="default" ariaLabel="Search">
                <Search className="w-5 h-5" />
              </IconButton>
              <IconButton variant="light" ariaLabel="Bookmark">
                <Bookmark className="w-5 h-5" />
              </IconButton>
              <IconButton variant="dark" ariaLabel="Cart">
                <ShoppingBag className="w-5 h-5" />
              </IconButton>
            </div>
          </Section>

          <Divider />

          {/* Badges */}
          <Section>
            <Subheading className="mb-6">Badges</Subheading>
            <div className="flex gap-3 flex-wrap">
              <Badge variant="default">Nuevo</Badge>
              <Badge variant="outline">Destacado</Badge>
              <Badge variant="dark">Exclusivo</Badge>
            </div>
          </Section>

          <Divider />

          {/* Inputs */}
          <Section>
            <Subheading className="mb-6">Inputs</Subheading>
            <div className="space-y-4">
              <Input 
                label="Email"
                type="email" 
                placeholder="tu@email.com" 
              />
              <Input 
                label="Con error"
                type="text" 
                placeholder="Texto aquí"
                error="Este campo es requerido"
              />
              <Input 
                label="Correcto"
                type="text" 
                placeholder="ejemplo@mail.com"
                value="usuario@mail.com"
                success="Campo válido"
              />
              <Input 
                type="text" 
                placeholder="Sin label" 
              />
            </div>
          </Section>

          <Divider />

          {/* Cards */}
          <Section>
            <Subheading className="mb-6">Cards</Subheading>
            <div className="grid grid-cols-2 gap-3">
              <Card>
                <CardImage 
                  src="https://images.unsplash.com/photo-1506619928596-bb8c201545cc?w=400" 
                  alt="Producto"
                />
                <CardContent className="space-y-1">
                  <CardTitle>Producto</CardTitle>
                  <CardPrice>49,95 EUR</CardPrice>
                </CardContent>
              </Card>
              
              <Card onClick={() => alert('Card clicked')}>
                <CardImage 
                  src="https://images.unsplash.com/photo-1550872199-63f4382fe925?w=400" 
                  alt="Producto 2"
                />
                <CardContent className="space-y-1">
                  <CardTitle>Con Click</CardTitle>
                  <CardPrice>89,95 EUR</CardPrice>
                </CardContent>
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Bottom Navigation */}
          <Section>
            <Subheading className="mb-6 text-white">Menú Inferior</Subheading>
            <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
              <nav className="flex items-center justify-around py-3">
                <button className="flex flex-col items-center gap-1 px-4 py-2">
                  <Home className="w-5 h-5 text-white" />
                </button>
                <button className="flex flex-col items-center gap-1 px-4 py-2">
                  <Search className="w-5 h-5 text-white" />
                </button>
                <button className="flex flex-col items-center gap-1 px-4 py-2">
                  <span className="text-white text-xs uppercase tracking-widest">MENÚ</span>
                </button>
                <button className="flex flex-col items-center gap-1 px-4 py-2">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </button>
                <button className="flex flex-col items-center gap-1 px-4 py-2">
                  <User className="w-5 h-5 text-white" />
                </button>
              </nav>
            </div>
          </Section>

          <Divider />

          {/* Category Tabs */}
          <Section>
            <Subheading className="mb-6 text-white">Tabs de Categorías</Subheading>
            <div className="flex gap-4 overflow-x-auto">
              <button className="px-4 py-2 border border-white text-white text-xs uppercase tracking-wider whitespace-nowrap">
                NUEVA COLECCIÓN
              </button>
              <button className="px-4 py-2 border border-white text-white text-xs uppercase tracking-wider whitespace-nowrap">
                MUJER
              </button>
              <button className="px-4 py-2 border border-white text-white text-xs uppercase tracking-wider whitespace-nowrap">
                HOMBRE
              </button>
              <button className="px-4 py-2 border border-white text-white text-xs uppercase tracking-wider whitespace-nowrap">
                NIÑOS
              </button>
            </div>
          </Section>

          <Divider />

          {/* Carousel with Filters */}
          <Section>
            <Subheading className="mb-6 text-white">Carrusel + Filtros</Subheading>
            <div className="flex items-center gap-4">
              <div className="flex-1 flex items-center gap-3 min-w-0">
                <button className="shrink-0">
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <div className="flex gap-6 overflow-x-auto scrollbar-hide">
                  <button className="text-xs uppercase tracking-wider whitespace-nowrap text-white">
                    JIMAL PRINT
                  </button>
                  <button className="text-xs uppercase tracking-wider whitespace-nowrap text-gray-400">
                    BOTAS Y BOTINES
                  </button>
                  <button className="text-xs uppercase tracking-wider whitespace-nowrap text-gray-400">
                    MOCASINES
                  </button>
                </div>
                <button className="shrink-0">
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
              
              <button className="shrink-0 px-4 py-2 bg-white text-black text-xs uppercase tracking-wider">
                FILTROS
              </button>
            </div>
          </Section>

          <Divider />

          {/* Grid View Icons */}
          <Section>
            <Subheading className="mb-6 text-white">Iconos de Vista Grid</Subheading>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <button className="p-2">
                  <Grid3x3 className="w-5 h-5 text-white" strokeWidth={2} />
                </button>
                <Caption className="text-gray-400">Outline (Inactivo)</Caption>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button className="p-2 bg-white/10">
                  <Grid3x3 className="w-5 h-5 text-white" strokeWidth={2} fill="white" />
                </button>
                <Caption className="text-gray-400">Filled (Activo)</Caption>
              </div>
            </div>
          </Section>

          <Divider />

          {/* Product Card with Bookmark */}
          <Section>
            <Subheading className="mb-6 text-white">Tarjeta de Producto</Subheading>
            <Card>
              <CardImage 
                src="https://images.unsplash.com/photo-1506619928596-bb8c201545cc?w=400" 
                alt="Producto"
              />
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2">
                  <Bookmark className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <CardTitle className="text-white">CHAQUETA OVERSIZE</CardTitle>
                  </div>
                </div>
                <CardPrice className="text-white">49,95 EUR</CardPrice>
              </CardContent>
            </Card>
          </Section>

          <Divider />

          {/* Size Selector */}
          <Section>
            <Subheading className="mb-6 text-white">Selector de Tallas</Subheading>
            <div className="grid grid-cols-4 gap-2">
              {['XS', 'S', 'M', 'L'].map((size) => (
                <button
                  key={size}
                  className="aspect-square border border-gray-700 text-gray-400 text-xs uppercase tracking-wider hover:border-white hover:text-white transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
              <button className="aspect-square border-2 border-white bg-white text-black text-xs uppercase tracking-wider">
                XL
              </button>
            </div>
          </Section>

          <Divider />

          {/* Progress Indicator */}
          <Section>
            <Subheading className="mb-6 text-white">Indicador de Progreso (Checkout)</Subheading>
            <div className="flex items-center justify-center mb-4">
              {/* Paso 1 - Completado */}
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center">
                    <span className="text-black">1</span>
                  </div>
                </div>
                <div className="h-[2px] w-24 bg-white" />
              </div>

              {/* Paso 2 - Actual */}
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white">2</span>
                  </div>
                </div>
                <div className="h-[2px] w-24 bg-gray-700" />
              </div>

              {/* Paso 3 - Siguiente */}
              <div className="w-10 h-10 flex items-center justify-center">
                <span className="text-white">3</span>
              </div>
            </div>
            <div className="flex items-center justify-between px-2">
              <span className="text-xs text-white">Dirección</span>
              <span className="text-xs text-white">Pago</span>
              <span className="text-xs text-gray-600">Confirmar</span>
            </div>
          </Section>

          <Divider />

          {/* Color Palette */}
          <Section>
            <Subheading className="mb-6 text-white">Paleta de Colores</Subheading>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-black border border-white"></div>
                <Body className="text-white">Negro #000000 - Fondo</Body>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white border border-gray-600"></div>
                <Body className="text-white">Blanco #FFFFFF - Texto</Body>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-900 border border-gray-600"></div>
                <Body className="text-white">Gray 900 - Bordes</Body>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-400 border border-gray-600"></div>
                <Body className="text-white">Gray 400 - Texto secundario</Body>
              </div>
            </div>
          </Section>
        </div>

        {/* Bottom Navigation Fixed */}
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
            <button className="flex flex-col items-center gap-1 px-4 py-2">
              <ShoppingBag className="w-5 h-5 text-white" />
            </button>
            <button className="flex flex-col items-center gap-1 px-4 py-2">
              <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </nav>
      </Container>
    </div>
  );
}
