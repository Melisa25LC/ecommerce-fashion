# Estructura del Proyecto E-commerce ZARA Style

## 📁 Estructura de Archivos

```
/
├── App.tsx                          # Archivo principal con navegación
├── styles/
│   └── globals.css                  # Estilos globales y Helvetica Now Text
├── components/
│   ├── figma/
│   │   └── ImageWithFallback.tsx    # Componente de imagen (protegido)
│   └── ui/                          # UI Kit
│       ├── index.ts                 # Exportaciones del UI Kit
│       ├── Button.tsx               # Botones con variantes
│       ├── Input.tsx                # Inputs con estados error/success
│       ├── Badge.tsx                # Etiquetas
│       ├── Card.tsx                 # Tarjetas de producto
│       ├── IconButton.tsx           # Botones con iconos
│       ├── Typography.tsx           # Componentes de texto
│       ├── Divider.tsx              # Separadores
│       └── Container.tsx            # Contenedores
├── screens/                         # Pantallas del flujo
│   ├── HomeScreen.tsx               # 1. Home con categorías
│   ├── CatalogScreen.tsx            # 2. Listado con filtros
│   ├── FiltersScreen.tsx            # 3. Pantalla de filtros
│   ├── ProductScreen.tsx            # 4. Detalle de producto
│   ├── CartScreen.tsx               # 5. Carrito de compra
│   ├── CheckoutScreen.tsx           # 6. Proceso de pago
│   └── ConfirmationScreen.tsx       # 7. Confirmación de pedido
└── ui-kit-demo.tsx                  # Demo del UI Kit (opcional)
```

## 🎨 Características del Diseño

- **Tipografía**: Helvetica Now Text
- **Paleta**: Blanco/Negro/Gris
- **Modo oscuro**: Fondo negro puro (#000000)
- **Layout**: Mobile-first (max 480px)
- **Tracking**: Amplio en textos (estilo luxury fashion)

## 🚀 Flujo de Navegación

1. **Home** → Categorías + Búsqueda + Filtros rápidos
2. **Catálogo** → Grid de productos + Filtros + Ordenamiento
3. **Filtros** → Talla + Color + Precio
4. **Producto** → Galería + Selector de talla + Guía de tallas
5. **Carrito** → Resumen + Control de cantidades
6. **Checkout** → 3 pasos (Dirección → Pago → Confirmar)
7. **Confirmación** → Éxito + Número de pedido

## 📦 Componentes del UI Kit

### Buttons
- Primary, Secondary, Outline, Ghost
- Tamaños: sm, md, lg

### Inputs
- Estados: normal, error (rojo), success (verde)
- Con/sin label

### Cards
- CardImage, CardContent, CardTitle, CardPrice

### Typography
- Heading, Subheading, Label, Caption, Body

### Otros
- Badge, IconButton, Divider, Container

## 🛠️ Tecnologías

- React + TypeScript
- Tailwind CSS v4.0
- Lucide React (iconos)
- Imágenes: Unsplash

## 💡 Cómo usar

1. Navega por las pantallas usando los botones de navegación
2. Usa el toggle (sol/luna) arriba a la derecha para cambiar tema
3. El flujo completo funciona: Home → Catálogo → Producto → Carrito → Checkout → Confirmación

## 📝 Notas

- El proyecto usa `max-w-md` para simular experiencia móvil
- Todas las imágenes son de Unsplash
- Los datos son simulados (mock data)
- El modo oscuro se aplica globalmente con la clase `dark`
