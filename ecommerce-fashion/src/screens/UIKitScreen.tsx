import { 
  Search, 
  ShoppingBag, 
  User, 
  Home, 
  ChevronDown, 
  X, 
  Check, 
  AlertCircle, 
  AlertTriangle, 
  Info, 
  CheckCircle,
  Mail,
  Lock,
  Eye,
  Bookmark,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

export function UIKitScreen() {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white py-8 px-4 pb-24">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl uppercase tracking-[0.2em] mb-2">UI KIT – COMPONENTES</h1>
          <p className="text-xs uppercase tracking-wider text-gray-400">Sistema de diseño completo</p>
        </div>

        {/* ============ TIPOGRAFÍA ============ */}
        <section>
          <h2 className="text-sm uppercase tracking-[0.15em] mb-8 pb-3 border-b border-gray-800">TIPOGRAFÍA</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-wider text-gray-500">H1 - Heading 1</p>
              <h1 className="text-[32px] leading-[40px] tracking-[0.05em] uppercase">NUEVA COLECCIÓN</h1>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-wider text-gray-500">H2 - Heading 2</p>
              <h2 className="text-[24px] leading-[32px] tracking-[0.05em] uppercase">Tendencias Otoño</h2>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-wider text-gray-500">H3 - Subheading</p>
              <h3 className="text-[18px] leading-[24px] tracking-[0.05em] uppercase">Categoría</h3>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-wider text-gray-500">Label</p>
              <p className="text-[14px] leading-[20px] tracking-[0.1em] uppercase font-medium">FILTROS</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-wider text-gray-500">Body</p>
              <p className="text-[14px] leading-[20px] tracking-[0.025em]">Texto del cuerpo para descripciones y contenido general de productos.</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-wider text-gray-500">Caption</p>
              <p className="text-[12px] leading-[16px] tracking-[0.05em] uppercase">3 TALLAS DISPONIBLES</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-wider text-gray-500">Price</p>
              <p className="text-[12px] leading-[16px] tracking-[0.025em]">49,95 EUR</p>
            </div>
          </div>
        </section>

        {/* ============ COLORES ============ */}
        <section>
          <h2 className="text-sm uppercase tracking-[0.15em] mb-8 pb-3 border-b border-gray-800">COLORES</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Primary Colors */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Principales</p>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-black border-2 border-white"></div>
                <div>
                  <p className="text-xs uppercase tracking-wide">Negro</p>
                  <p className="text-xs text-gray-400">#000000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-white border border-gray-700"></div>
                <div>
                  <p className="text-xs uppercase tracking-wide">Blanco</p>
                  <p className="text-xs text-gray-400">#FFFFFF</p>
                </div>
              </div>
            </div>

            {/* Gray Scale */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Escala de Grises</p>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-900 border border-gray-700"></div>
                <div>
                  <p className="text-xs uppercase tracking-wide">Gray 900</p>
                  <p className="text-xs text-gray-400">#111827</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-800 border border-gray-700"></div>
                <div>
                  <p className="text-xs uppercase tracking-wide">Gray 800</p>
                  <p className="text-xs text-gray-400">#1F2937</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-700 border border-gray-600"></div>
                <div>
                  <p className="text-xs uppercase tracking-wide">Gray 700</p>
                  <p className="text-xs text-gray-400">#374151</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-600 border border-gray-500"></div>
                <div>
                  <p className="text-xs uppercase tracking-wide">Gray 600</p>
                  <p className="text-xs text-gray-400">#4B5563</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-400"></div>
                <div>
                  <p className="text-xs uppercase tracking-wide">Gray 400</p>
                  <p className="text-xs text-gray-400">#9CA3AF</p>
                </div>
              </div>
            </div>

            {/* Status Colors */}
            <div className="space-y-3 col-span-2">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Estados</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-green-500"></div>
                  <div>
                    <p className="text-xs uppercase tracking-wide">Success</p>
                    <p className="text-xs text-gray-400">#10B981</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-red-500"></div>
                  <div>
                    <p className="text-xs uppercase tracking-wide">Error</p>
                    <p className="text-xs text-gray-400">#EF4444</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-yellow-500"></div>
                  <div>
                    <p className="text-xs uppercase tracking-wide">Warning</p>
                    <p className="text-xs text-gray-400">#F59E0B</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-blue-500"></div>
                  <div>
                    <p className="text-xs uppercase tracking-wide">Info</p>
                    <p className="text-xs text-gray-400">#3B82F6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BOTONES ============ */}
        <section>
          <h2 className="text-sm uppercase tracking-[0.15em] mb-8 pb-3 border-b border-gray-800">BOTONES</h2>
          
          {/* Primary Buttons */}
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Primary Button</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Normal</p>
                  <button className="w-full py-4 px-6 bg-white text-black text-xs uppercase tracking-[0.2em]">
                    Añadir al carrito
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Hover</p>
                  <button className="w-full py-4 px-6 bg-white text-black text-xs uppercase tracking-[0.2em] opacity-90">
                    Añadir al carrito
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Active</p>
                  <button className="w-full py-4 px-6 bg-white text-black text-xs uppercase tracking-[0.2em] opacity-80">
                    Añadir al carrito
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Disabled</p>
                  <button className="w-full py-4 px-6 bg-gray-800 text-gray-600 text-xs uppercase tracking-[0.2em] cursor-not-allowed">
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Secondary Button (Outline)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Normal</p>
                  <button className="w-full py-4 px-6 bg-transparent border border-white text-white text-xs uppercase tracking-[0.2em]">
                    Ver detalles
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Hover</p>
                  <button className="w-full py-4 px-6 bg-white/10 border border-white text-white text-xs uppercase tracking-[0.2em]">
                    Ver detalles
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Active</p>
                  <button className="w-full py-4 px-6 bg-white text-black border border-white text-xs uppercase tracking-[0.2em]">
                    Ver detalles
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Disabled</p>
                  <button className="w-full py-4 px-6 bg-transparent border border-gray-700 text-gray-600 text-xs uppercase tracking-[0.2em] cursor-not-allowed">
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>

            {/* Text/Link Buttons */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Text Link Button</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Normal</p>
                  <button className="text-xs uppercase tracking-wider text-white underline">
                    Ver más productos
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Hover</p>
                  <button className="text-xs uppercase tracking-wider text-gray-300 underline">
                    Ver más productos
                  </button>
                </div>
              </div>
            </div>

            {/* Icon Buttons */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Buttons con Icono</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Normal</p>
                  <button className="w-full py-4 px-6 bg-white text-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Carrito
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Icon Only</p>
                  <button className="w-12 h-12 bg-transparent border border-white flex items-center justify-center">
                    <Search className="w-5 h-5 text-white" />
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Icon Only Filled</p>
                  <button className="w-12 h-12 bg-white flex items-center justify-center">
                    <Bookmark className="w-5 h-5 text-black" />
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Disabled</p>
                  <button className="w-12 h-12 bg-gray-800 flex items-center justify-center cursor-not-allowed">
                    <User className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Size Variants */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Tamaños</p>
              <div className="flex flex-col gap-3">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Large</p>
                  <button className="py-4 px-8 bg-white text-black text-xs uppercase tracking-[0.2em]">
                    Botón Large
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Medium</p>
                  <button className="py-3 px-6 bg-white text-black text-xs uppercase tracking-[0.2em]">
                    Botón Medium
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Small</p>
                  <button className="py-2 px-4 bg-white text-black text-xs uppercase tracking-[0.2em]">
                    Botón Small
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ INPUTS ============ */}
        <section>
          <h2 className="text-sm uppercase tracking-[0.15em] mb-8 pb-3 border-b border-gray-800">INPUTS</h2>
          
          <div className="space-y-6">
            {/* Text Input States */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Input Field</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Normal</p>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Nombre completo</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-transparent border border-gray-700 text-white text-sm placeholder:text-gray-600"
                      placeholder="Juan Pérez"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Focus</p>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-transparent border-2 border-white text-white text-sm"
                      value="usuario@email.com"
                      readOnly
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Error</p>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Contraseña</label>
                    <input 
                      type="password" 
                      className="w-full px-4 py-3 bg-transparent border-2 border-red-500 text-white text-sm"
                      value="123"
                      readOnly
                    />
                    <p className="text-xs text-red-500 mt-1">La contraseña debe tener al menos 8 caracteres</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Success</p>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Código postal</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-transparent border-2 border-green-500 text-white text-sm"
                      value="28001"
                      readOnly
                    />
                    <p className="text-xs text-green-500 mt-1">Código postal válido</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Disabled</p>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-600 mb-2">País</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-gray-600 text-sm cursor-not-allowed"
                      value="España"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Input with Icon */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Input con Icono</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Search Bar</p>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      className="w-full pl-12 pr-4 py-3 bg-transparent border border-gray-700 text-white text-sm placeholder:text-gray-600"
                      placeholder="Buscar productos..."
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Email Input</p>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="email" 
                      className="w-full pl-12 pr-4 py-3 bg-transparent border border-gray-700 text-white text-sm placeholder:text-gray-600"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Password Input</p>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="password" 
                      className="w-full pl-12 pr-12 py-3 bg-transparent border border-gray-700 text-white text-sm placeholder:text-gray-600"
                      placeholder="••••••••"
                    />
                    <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            {/* Select / Dropdown */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Select Field / Dropdown</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Closed</p>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-transparent border border-gray-700 text-white text-sm appearance-none cursor-pointer">
                      <option value="">Seleccionar talla</option>
                      <option value="xs">XS</option>
                      <option value="s">S</option>
                      <option value="m">M</option>
                      <option value="l">L</option>
                      <option value="xl">XL</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Open / Expanded</p>
                  <div className="relative">
                    <button className="w-full px-4 py-3 bg-transparent border-2 border-white text-white text-sm text-left flex items-center justify-between">
                      <span>M</span>
                      <ChevronDown className="w-5 h-5" />
                    </button>
                    <div className="absolute top-full left-0 right-0 mt-1 bg-black border border-white z-10">
                      <button className="w-full px-4 py-2 text-sm text-left text-gray-400 hover:bg-white/10">XS</button>
                      <button className="w-full px-4 py-2 text-sm text-left text-gray-400 hover:bg-white/10">S</button>
                      <button className="w-full px-4 py-2 text-sm text-left bg-white/10 text-white">M</button>
                      <button className="w-full px-4 py-2 text-sm text-left text-gray-400 hover:bg-white/10">L</button>
                      <button className="w-full px-4 py-2 text-sm text-left text-gray-400 hover:bg-white/10">XL</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CHECKBOXES & RADIOS ============ */}
        <section>
          <h2 className="text-sm uppercase tracking-[0.15em] mb-8 pb-3 border-b border-gray-800">CHECKBOXES & RADIO BUTTONS</h2>
          
          <div className="space-y-6">
            {/* Checkboxes */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Checkbox</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Unchecked</p>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-5 h-5 border-2 border-white"></div>
                    <span className="text-sm">Aceptar términos</span>
                  </label>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Checked</p>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-5 h-5 border-2 border-white bg-white flex items-center justify-center">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-sm">Aceptar términos</span>
                  </label>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Indeterminate</p>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-5 h-5 border-2 border-white bg-white flex items-center justify-center">
                      <div className="w-2.5 h-0.5 bg-black"></div>
                    </div>
                    <span className="text-sm">Seleccionar algunos</span>
                  </label>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Disabled</p>
                  <label className="flex items-center gap-3 cursor-not-allowed">
                    <div className="w-5 h-5 border-2 border-gray-700 bg-gray-800"></div>
                    <span className="text-sm text-gray-600">No disponible</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Radio Buttons */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Radio Button</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Unselected</p>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-5 h-5 rounded-full border-2 border-white"></div>
                    <span className="text-sm">Envío estándar</span>
                  </label>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Selected</p>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                    </div>
                    <span className="text-sm">Envío express</span>
                  </label>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Disabled Unselected</p>
                  <label className="flex items-center gap-3 cursor-not-allowed">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-700"></div>
                    <span className="text-sm text-gray-600">No disponible</span>
                  </label>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Disabled Selected</p>
                  <label className="flex items-center gap-3 cursor-not-allowed">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-700 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                    </div>
                    <span className="text-sm text-gray-600">Seleccionado</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Toggle Switch */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Toggle Switch</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Off</p>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-12 h-6 bg-gray-700 rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                    </div>
                    <span className="text-sm">Notificaciones</span>
                  </label>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">On</p>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-12 h-6 bg-white rounded-full relative">
                      <div className="w-5 h-5 bg-black rounded-full absolute right-0.5 top-0.5"></div>
                    </div>
                    <span className="text-sm">Notificaciones</span>
                  </label>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Disabled Off</p>
                  <label className="flex items-center gap-3 cursor-not-allowed">
                    <div className="w-12 h-6 bg-gray-800 rounded-full relative">
                      <div className="w-5 h-5 bg-gray-600 rounded-full absolute left-0.5 top-0.5"></div>
                    </div>
                    <span className="text-sm text-gray-600">No disponible</span>
                  </label>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Disabled On</p>
                  <label className="flex items-center gap-3 cursor-not-allowed">
                    <div className="w-12 h-6 bg-gray-700 rounded-full relative">
                      <div className="w-5 h-5 bg-gray-500 rounded-full absolute right-0.5 top-0.5"></div>
                    </div>
                    <span className="text-sm text-gray-600">Activado</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ NAVEGACIÓN ============ */}
        <section>
          <h2 className="text-sm uppercase tracking-[0.15em] mb-8 pb-3 border-b border-gray-800">NAVEGACIÓN</h2>
          
          <div className="space-y-8">
            {/* Top Navbar */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Navbar Top</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Header Principal</p>
                  <div className="border border-gray-800 p-4 flex items-center justify-between">
                    <ChevronLeft className="w-6 h-6 text-white" />
                    <h1 className="text-xs uppercase tracking-[0.3em]">Catálogo</h1>
                    <div className="flex gap-3">
                      <Search className="w-6 h-6 text-white" />
                      <ShoppingBag className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Bottom Navigation</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Default</p>
                  <div className="border border-gray-800 bg-black">
                    <div className="flex items-center justify-around py-3">
                      <button className="flex flex-col items-center gap-1 px-4 py-2">
                        <Home className="w-5 h-5 text-white" />
                      </button>
                      <button className="flex flex-col items-center gap-1 px-4 py-2">
                        <Search className="w-5 h-5 text-gray-600" />
                      </button>
                      <button className="flex flex-col items-center gap-1 px-4 py-2">
                        <span className="text-white text-xs uppercase tracking-widest">MENÚ</span>
                      </button>
                      <button className="flex flex-col items-center gap-1 px-4 py-2">
                        <ShoppingBag className="w-5 h-5 text-gray-600" />
                      </button>
                      <button className="flex flex-col items-center gap-1 px-4 py-2">
                        <User className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Tabs Horizontales</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Variante 1 - Bordered</p>
                  <div className="flex gap-4 border-b border-gray-800 pb-4">
                    <button className="px-4 py-2 border border-white text-white text-xs uppercase tracking-wider">
                      NUEVA COLECCIÓN
                    </button>
                    <button className="px-4 py-2 border border-white text-white text-xs uppercase tracking-wider">
                      MUJER
                    </button>
                    <button className="px-4 py-2 border border-white text-white text-xs uppercase tracking-wider">
                      HOMBRE
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Variante 2 - Underlined</p>
                  <div className="flex gap-8 border-b border-gray-800">
                    <button className="pb-3 text-xs uppercase tracking-wider text-white border-b-2 border-white">
                      TODO
                    </button>
                    <button className="pb-3 text-xs uppercase tracking-wider text-gray-600">
                      ROPA
                    </button>
                    <button className="pb-3 text-xs uppercase tracking-wider text-gray-600">
                      ZAPATOS
                    </button>
                    <button className="pb-3 text-xs uppercase tracking-wider text-gray-600">
                      ACCESORIOS
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Variante 3 - Pills</p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white text-black text-xs uppercase tracking-wider">
                      NUEVO
                    </button>
                    <button className="px-4 py-2 bg-transparent border border-gray-700 text-gray-400 text-xs uppercase tracking-wider">
                      TENDENCIAS
                    </button>
                    <button className="px-4 py-2 bg-transparent border border-gray-700 text-gray-400 text-xs uppercase tracking-wider">
                      REBAJAS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CARDS ============ */}
        <section>
          <h2 className="text-sm uppercase tracking-[0.15em] mb-8 pb-3 border-b border-gray-800">CARDS</h2>
          
          <div className="space-y-6">
            {/* Simple Card */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Card Simple</p>
              <div className="border border-gray-800 p-6">
                <h3 className="text-sm uppercase tracking-wider mb-2">Título de la tarjeta</h3>
                <p className="text-sm text-gray-400">Descripción breve del contenido de esta tarjeta.</p>
              </div>
            </div>

            {/* Card con Imagen */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Card con Imagen</p>
              <div className="border border-gray-800">
                <div className="aspect-[3/4] bg-gray-900 flex items-center justify-center">
                  <p className="text-xs text-gray-600">IMAGEN 3:4</p>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <Bookmark className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <h3 className="text-xs uppercase tracking-wide">CHAQUETA OVERSIZE LANA</h3>
                  </div>
                  <p className="text-xs">89,95 EUR</p>
                </div>
              </div>
            </div>

            {/* Card con CTA */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Card con CTA</p>
              <div className="border border-gray-800 p-6 space-y-4">
                <div>
                  <h3 className="text-sm uppercase tracking-wider mb-2">Nueva colección</h3>
                  <p className="text-sm text-gray-400">Descubre las últimas tendencias de la temporada.</p>
                </div>
                <button className="w-full py-3 px-6 bg-white text-black text-xs uppercase tracking-[0.2em]">
                  Ver colección
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FEEDBACK ============ */}
        <section>
          <h2 className="text-sm uppercase tracking-[0.15em] mb-8 pb-3 border-b border-gray-800">FEEDBACK</h2>
          
          <div className="space-y-8">
            {/* Toast/Alert Messages */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Toast / Alert Messages</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 border-l-4 border-green-500 bg-green-500/10">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-green-500 mb-1">Success</p>
                    <p className="text-sm text-white">Producto añadido al carrito correctamente</p>
                  </div>
                  <button>
                    <X className="w-4 h-4 text-green-500" />
                  </button>
                </div>
                
                <div className="flex items-start gap-3 p-4 border-l-4 border-red-500 bg-red-500/10">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-red-500 mb-1">Error</p>
                    <p className="text-sm text-white">No se pudo procesar el pago. Intenta de nuevo.</p>
                  </div>
                  <button>
                    <X className="w-4 h-4 text-red-500" />
                  </button>
                </div>
                
                <div className="flex items-start gap-3 p-4 border-l-4 border-yellow-500 bg-yellow-500/10">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-yellow-500 mb-1">Warning</p>
                    <p className="text-sm text-white">Quedan pocas unidades de este producto</p>
                  </div>
                  <button>
                    <X className="w-4 h-4 text-yellow-500" />
                  </button>
                </div>
                
                <div className="flex items-start gap-3 p-4 border-l-4 border-blue-500 bg-blue-500/10">
                  <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-blue-500 mb-1">Info</p>
                    <p className="text-sm text-white">Envío gratuito en pedidos superiores a 50€</p>
                  </div>
                  <button>
                    <X className="w-4 h-4 text-blue-500" />
                  </button>
                </div>
              </div>
            </div>

            {/* Modals */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Modales</p>
              <div className="space-y-4">
                {/* Alert Modal */}
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Modal de Alerta</p>
                  <div className="border border-gray-800 bg-black p-6 max-w-sm">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-sm uppercase tracking-wider">Atención</h3>
                      <button>
                        <X className="w-5 h-5 text-white" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-400 mb-6">
                      ¿Estás seguro de que quieres eliminar este producto del carrito?
                    </p>
                    <div className="flex gap-3">
                      <button className="flex-1 py-3 px-6 bg-transparent border border-white text-white text-xs uppercase tracking-[0.2em]">
                        Cancelar
                      </button>
                      <button className="flex-1 py-3 px-6 bg-white text-black text-xs uppercase tracking-[0.2em]">
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Confirmation Modal */}
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Modal de Confirmación</p>
                  <div className="border border-gray-800 bg-black p-6 max-w-sm">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="w-6 h-6 text-green-500" />
                      </div>
                    </div>
                    <h3 className="text-sm uppercase tracking-wider text-center mb-2">Pedido confirmado</h3>
                    <p className="text-sm text-gray-400 text-center mb-6">
                      Tu pedido #123456 ha sido procesado correctamente
                    </p>
                    <button className="w-full py-3 px-6 bg-white text-black text-xs uppercase tracking-[0.2em]">
                      Ver pedido
                    </button>
                  </div>
                </div>
                
                {/* Form Modal */}
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Modal con Formulario</p>
                  <div className="border border-gray-800 bg-black p-6 max-w-sm">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-sm uppercase tracking-wider">Newsletter</h3>
                      <button>
                        <X className="w-5 h-5 text-white" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">
                      Suscríbete para recibir nuestras novedades
                    </p>
                    <div className="space-y-4">
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-transparent border border-gray-700 text-white text-sm placeholder:text-gray-600"
                        placeholder="tu@email.com"
                      />
                      <button className="w-full py-3 px-6 bg-white text-black text-xs uppercase tracking-[0.2em]">
                        Suscribirse
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Spacing */}
        <div className="h-16"></div>
      </div>
    </div>
  );
}
