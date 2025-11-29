# 📐 ESPECIFICACIONES DE DISEÑO PARA FIGMA
## E-Commerce ZARA - Modo Oscuro

---

## 🎨 SISTEMA DE COLORES

### Colores Principales
- **Fondo Principal:** `#000000` (Negro puro)
- **Texto Principal:** `#FFFFFF` (Blanco)
- **Texto Secundario:** `#9CA3AF` (Gray 400)
- **Texto Desactivado:** `#4B5563` (Gray 600)
- **Bordes Principales:** `#1F2937` (Gray 800)
- **Bordes Secundarios:** `#374151` (Gray 700)
- **Bordes Activos:** `#FFFFFF` (Blanco)

### Colores de Acento
- **Botón Primary:** Fondo `#FFFFFF`, Texto `#000000`
- **Botón Secondary:** Fondo `#000000`, Borde `#FFFFFF`, Texto `#FFFFFF`

---

## 🔤 TIPOGRAFÍA

### Familia Tipográfica
**Helvetica Now Text** (si no está disponible, usar Helvetica Neue o Inter)

### Tamaños y Estilos

#### Heading 1
- **Font Size:** 32px
- **Line Height:** 40px
- **Font Weight:** 500
- **Letter Spacing:** 0.05em (5%)
- **Transform:** Uppercase

#### Heading 2 (Subheading)
- **Font Size:** 24px
- **Line Height:** 32px
- **Font Weight:** 500
- **Letter Spacing:** 0.05em
- **Transform:** Uppercase

#### Label
- **Font Size:** 14px
- **Line Height:** 20px
- **Font Weight:** 500
- **Letter Spacing:** 0.1em (10%)
- **Transform:** Uppercase

#### Body Text
- **Font Size:** 14px
- **Line Height:** 20px
- **Font Weight:** 400
- **Letter Spacing:** 0.025em (2.5%)

#### Caption
- **Font Size:** 12px
- **Line Height:** 16px
- **Font Weight:** 400
- **Letter Spacing:** 0.05em
- **Transform:** Uppercase

#### Buttons
- **Font Size:** 12px
- **Line Height:** 16px
- **Font Weight:** 500
- **Letter Spacing:** 0.2em (20%)
- **Transform:** Uppercase

#### Product Title
- **Font Size:** 12px
- **Line Height:** 16px
- **Font Weight:** 400
- **Letter Spacing:** 0.05em
- **Transform:** Uppercase

#### Price
- **Font Size:** 12px
- **Line Height:** 16px
- **Font Weight:** 400
- **Letter Spacing:** 0.025em

---

## 📱 DIMENSIONES DE PANTALLA

### Mobile (Principal)
- **Width:** 480px (máximo)
- **Width recomendado:** 375px - 428px
- **Layout:** Scroll vertical ilimitado

### Espaciado Global
- **Padding Horizontal:** 16px (4 unidades)
- **Padding Vertical:** 16px (4 unidades)
- **Gap entre elementos:** 12px - 16px

---

## 🧩 COMPONENTES

### 1. BOTONES

#### Botón Primary
- **Padding:** 16px (vertical) x 24px (horizontal)
- **Border:** None
- **Background:** `#FFFFFF`
- **Text Color:** `#000000`
- **Border Radius:** 0px (rectangular)
- **Font:** 12px, 500 weight, uppercase, letter-spacing 0.2em

#### Botón Secondary (Outline)
- **Padding:** 16px x 24px
- **Border:** 1px solid `#FFFFFF`
- **Background:** Transparent
- **Text Color:** `#FFFFFF`
- **Border Radius:** 0px

#### Botón Filtros
- **Padding:** 8px x 16px
- **Border:** None
- **Background:** `#FFFFFF`
- **Text Color:** `#000000`
- **Font:** 12px, 500 weight, uppercase, letter-spacing 0.2em

---

### 2. TABS DE CATEGORÍAS

#### Tab Individual
- **Padding:** 8px x 16px
- **Border:** 1px solid `#FFFFFF`
- **Background:** Transparent
- **Text Color:** `#FFFFFF`
- **Font:** 12px, uppercase, letter-spacing 0.15em
- **Gap entre tabs:** 16px

#### Contenedor Tabs
- **Display:** Horizontal scroll
- **Padding:** 16px (horizontal)
- **Gap:** 16px
- **Border Bottom:** 1px solid `#1F2937`

---

### 3. CARRUSEL DE SUBCATEGORÍAS

#### Estructura
```
[←] ITEM 1  ITEM 2  ITEM 3  ITEM 4 [→] [FILTROS]
```

#### Flechas
- **Icon:** ChevronLeft / ChevronRight
- **Size:** 16px x 16px
- **Color:** `#FFFFFF`
- **Padding:** 8px

#### Items
- **Font:** 12px, uppercase, letter-spacing 0.15em
- **Color Activo:** `#FFFFFF`
- **Color Inactivo:** `#9CA3AF`
- **Gap:** 24px
- **Padding:** 16px (vertical)

---

### 4. MENÚ INFERIOR (Bottom Navigation)

#### Contenedor
- **Height:** 64px
- **Background:** `#000000`
- **Border Top:** 1px solid `#1F2937`
- **Position:** Fixed bottom
- **Display:** Flex, space-around

#### Botón Individual
- **Width:** ~75px
- **Padding:** 12px x 16px
- **Gap:** 4px (entre icono y texto)
- **Align:** Center

#### Iconos
- **Size:** 20px x 20px
- **Color:** `#FFFFFF`
- **Stroke Width:** 2px

#### Texto "MENÚ"
- **Font:** 12px, uppercase, letter-spacing 0.2em
- **Color:** `#FFFFFF`

#### 5 Botones (en orden):
1. Home (icono)
2. Search (icono)
3. MENÚ (texto)
4. ShoppingBag (icono)
5. User (icono)

---

### 5. TARJETA DE PRODUCTO

#### Contenedor
- **Width:** 100% en grid 2 columnas
- **Gap entre cards:** 12px
- **Background:** Transparent

#### Imagen
- **Aspect Ratio:** 3:4 (vertical)
- **Width:** 100%
- **Object Fit:** Cover

#### Contenido
- **Padding:** 12px (top), 0 (horizontal)
- **Gap:** 8px

#### Bookmark + Título
- **Layout:** Flex horizontal
- **Gap:** 8px
- **Align:** Start

#### Icono Bookmark
- **Size:** 16px x 16px
- **Color:** `#FFFFFF`
- **Position:** Left side

#### Título
- **Font:** 12px, uppercase, letter-spacing 0.05em
- **Color:** `#FFFFFF`
- **Max Lines:** 2

#### Precio
- **Font:** 12px, letter-spacing 0.025em
- **Color:** `#FFFFFF`

---

### 6. ICONOS DE VISTA GRID

#### Icono Inactivo (Outline)
- **Icon:** Grid3x3
- **Size:** 20px x 20px
- **Color:** `#FFFFFF`
- **Stroke:** 2px

#### Icono Activo (Filled)
- **Icon:** LayoutGrid
- **Size:** 20px x 20px
- **Color:** `#FFFFFF`
- **Fill:** Solid

---

### 7. SELECTOR DE TALLAS

#### Grid Layout
- **Columns:** 4
- **Gap:** 8px

#### Botón de Talla (Inactivo)
- **Aspect Ratio:** 1:1 (cuadrado)
- **Border:** 1px solid `#374151` (gray-700)
- **Background:** Transparent
- **Text Color:** `#9CA3AF`
- **Font:** 12px, uppercase, letter-spacing 0.15em

#### Botón de Talla (Hover)
- **Border:** 1px solid `#FFFFFF`
- **Text Color:** `#FFFFFF`

#### Botón de Talla (Seleccionado)
- **Border:** 2px solid `#FFFFFF`
- **Background:** `#FFFFFF`
- **Text Color:** `#000000`

---

### 8. INDICADOR DE PROGRESO (Checkout)

#### Estructura: 3 pasos
```
(1)  ━━━━  (2)  ━━━━  3
ENVÍO      PAGO      RESUMEN
```

#### Paso Completado
- **Circle:** 24px diameter
- **Background:** `#000000`
- **Border:** 1px solid `#FFFFFF`
- **Number:** `#FFFFFF`, 12px, centered
- **Label:** `#9CA3AF`, 12px, uppercase

#### Paso Actual
- **Circle:** 24px diameter
- **Background:** Transparent
- **Border:** 2px solid `#FFFFFF`
- **Number:** `#FFFFFF`, 12px, centered
- **Label:** `#FFFFFF`, 12px, uppercase

#### Paso Siguiente
- **Circle:** None (solo número)
- **Number:** `#4B5563`, 12px
- **Label:** `#4B5563`, 12px, uppercase

#### Línea Conectora
- **Height:** 1px
- **Color:** `#1F2937`
- **Margin:** 8px horizontal

---

### 9. INPUTS

#### Campo de Texto
- **Height:** 48px
- **Padding:** 12px x 16px
- **Border:** 1px solid `#374151`
- **Background:** Transparent
- **Text Color:** `#FFFFFF`
- **Placeholder:** `#6B7280`
- **Border Radius:** 0px

#### Label
- **Font:** 12px, uppercase, letter-spacing 0.1em
- **Color:** `#9CA3AF`
- **Margin Bottom:** 8px

#### Estado Focus
- **Border:** 1px solid `#FFFFFF`

#### Estado Error
- **Border:** 1px solid `#EF4444`
- **Error Text:** `#EF4444`, 12px

---

### 10. FILTROS (Modal Full Screen)

#### Header
- **Height:** 56px
- **Padding:** 16px
- **Border Bottom:** 1px solid `#1F2937`
- **Background:** `#000000`

#### Botón Cerrar (X)
- **Size:** 24px x 24px
- **Color:** `#FFFFFF`

#### Sección de Filtro
- **Padding:** 24px 16px
- **Border Bottom:** 1px solid `#1F2937`

#### Título de Sección
- **Font:** 14px, 500 weight, uppercase, letter-spacing 0.15em
- **Color:** `#FFFFFF`
- **Margin Bottom:** 16px

#### Opción de Filtro
- **Padding:** 12px 0
- **Font:** 14px, uppercase, letter-spacing 0.1em
- **Color Inactivo:** `#9CA3AF`
- **Color Activo:** `#FFFFFF`

#### Color Swatch
- **Size:** 16px x 16px
- **Border:** 1px solid `#374151`
- **Margin Right:** 12px

#### Botón "Ver Resultados"
- **Width:** 100%
- **Padding:** 16px
- **Border:** 1px solid `#FFFFFF`
- **Background:** Transparent
- **Text:** `#FFFFFF`, 12px, uppercase, letter-spacing 0.2em
- **Margin Top:** 32px

---

## 📐 LAYOUTS DE PANTALLAS

### HOME SCREEN

#### Estructura
```
┌─────────────────────────────────┐
│ [NUEVA COLECCIÓN] [MUJER] ...  │ ← Tabs (scroll horizontal)
├─────────────────────────────────┤
│ [←] CAT1 CAT2 CAT3 [→] [FILTROS]│ ← Carrusel + Filtros
├─────────────────────────────────┤
│                                 │
│  [Imagen Hero]                  │ ← Hero Section
│                                 │
├─────────────────────────────────┤
│  NUEVA COLECCIÓN                │
│  ┌─────┐ ┌─────┐               │
│  │ IMG │ │ IMG │               │ ← Grid 2 columnas
│  └─────┘ └─────┘               │
│  ┌─────┐ ┌─────┐               │
│  │ IMG │ │ IMG │               │
│  └─────┘ └─────┘               │
│                                 │
└─────────────────────────────────┘
│ [🏠] [🔍] [MENÚ] [🛍] [👤]     │ ← Bottom Nav (fixed)
└─────────────────────────────────┘
```

**Espaciado:**
- Hero Section: Margen bottom 32px
- Título Sección: Margen bottom 24px
- Grid: Gap 12px

---

### CATALOG SCREEN

#### Estructura
```
┌─────────────────────────────────┐
│ ← ATRÁS           🔲 🔲         │ ← Header con iconos grid
├─────────────────────────────────┤
│ [MUJER] [HOMBRE] [NIÑOS] ...   │ ← Tabs
├─────────────────────────────────┤
│ [←] CAT1 CAT2 [→] [FILTROS]   │ ← Carrusel
├─────────────────────────────────┤
│  ┌─────┐ ┌─────┐               │
│  │ IMG │ │ IMG │               │ ← Grid productos
│  │🔖TXT│ │🔖TXT│               │
│  │PRICE│ │PRICE│               │
│  └─────┘ └─────┘               │
│  ┌─────┐ ┌─────┐               │
│  │ IMG │ │ IMG │               │
│  └─────┘ └─────┘               │
└─────────────────────────────────┘
│ [🏠] [🔍] [MENÚ] [🛍] [👤]     │
└─────────────────────────────────┘
```

---

### PRODUCT SCREEN

#### Estructura
```
┌─────────────────────────────────┐
│ ← ATRÁS               🔖 🛍     │ ← Header
├─────────────────────────────────┤
│                                 │
│  [Imagen Principal]             │ ← Carousel imágenes
│                                 │
│  ● ○ ○                         │ ← Dots indicadores
├─────────────────────────────────┤
│  CHAQUETA OVERSIZE              │ ← Título
│  49,95 EUR                      │ ← Precio
│                                 │
│  TALLA                          │
│  [XS] [S] [M] [L] [XL]         │ ← Selector tallas
│                                 │
│  COLOR                          │
│  ◼ ◻ ◼                         │ ← Selector colores
│                                 │
│  Descripción del producto...    │ ← Descripción
│                                 │
│  [AÑADIR AL CARRITO]           │ ← Botón primary
└─────────────────────────────────┘
│ [🏠] [🔍] [MENÚ] [🛍] [👤]     │
└─────────────────────────────────┘
```

**Espaciado:**
- Padding contenido: 16px
- Gap entre secciones: 24px
- Botón bottom: Margen top 32px

---

### CART SCREEN

#### Estructura
```
┌─────────────────────────────────┐
│ ← CARRITO                       │ ← Header
├─────────────────────────────────┤
│  ┌─────┐ Producto 1             │
│  │ IMG │ Talla: M                │ ← Item carrito
│  └─────┘ 49,95 EUR      [- 1 +] │
│                            [×]   │
├─────────────────────────────────┤
│  ┌─────┐ Producto 2             │
│  │ IMG │ Talla: L                │
│  └─────┘ 89,95 EUR      [- 1 +] │
│                            [×]   │
├─────────────────────────────────┤
│                                 │
│  Subtotal           139,90 EUR  │
│  Envío              GRATIS      │
│  ─────────────────────────────  │
│  Total              139,90 EUR  │
│                                 │
│  [FINALIZAR COMPRA]            │
└─────────────────────────────────┘
│ [🏠] [🔍] [MENÚ] [🛍] [👤]     │
└─────────────────────────────────┘
```

---

### CHECKOUT SCREEN

#### Estructura
```
┌─────────────────────────────────┐
│ ← CHECKOUT                      │
├─────────────────────────────────┤
│  (1) ━━━ ②  ━━━ 3              │ ← Progress
│ ENVÍO   PAGO   RESUMEN          │
├─────────────────────────────────┤
│  INFORMACIÓN DE PAGO            │
│                                 │
│  [Número de tarjeta]           │
│  [MM/AA]  [CVV]                │
│  [Nombre en tarjeta]           │
│                                 │
│  DIRECCIÓN DE FACTURACIÓN       │
│  ☑ Igual que dirección envío   │
│                                 │
│  RESUMEN DEL PEDIDO             │
│  Subtotal           139,90 EUR  │
│  Envío              GRATIS      │
│  Total              139,90 EUR  │
│                                 │
│  [CONFIRMAR PAGO]              │
└─────────────────────────────────┘
│ [🏠] [🔍] [MENÚ] [🛍] [👤]     │
└─────────────────────────────────┘
```

---

### CONFIRMATION SCREEN

#### Estructura
```
┌─────────────────────────────────┐
│ ← CONFIRMACIÓN                  │
├─────────────────────────────────┤
│                                 │
│         ✓                       │ ← Check icon (48px)
│                                 │
│  PEDIDO CONFIRMADO              │ ← Título
│                                 │
│  Nº PEDIDO: #123456             │
│                                 │
│  Te enviaremos un email con     │
│  los detalles de tu pedido.     │
│                                 │
│  DETALLES DEL ENVÍO             │
│  Juan Pérez                     │
│  Calle Principal 123            │
│  28001 Madrid, España           │
│                                 │
│  RESUMEN DEL PEDIDO             │
│  ┌─────┐ Producto 1             │
│  │ IMG │ 49,95 EUR              │
│  └─────┘                        │
│                                 │
│  Total              139,90 EUR  │
│                                 │
│  [SEGUIR COMPRANDO]            │
│  [VER MI PEDIDO]               │
└─────────────────────────────────┘
│ [🏠] [🔍] [MENÚ] [🛍] [👤]     │
└─────────────────────────────────┘
```

---

## 🎯 GUÍA DE RECREACIÓN EN FIGMA

### PASO 1: Configuración Inicial
1. Crear nuevo archivo en Figma
2. Configurar frame: **375px × 812px** (iPhone X)
3. Fondo: `#000000`

### PASO 2: Sistema de Diseño
1. Crear **página "Design System"**
2. Definir **Text Styles** con todas las especificaciones arriba
3. Crear **Color Styles** con la paleta
4. Crear **Components** para cada elemento (botones, cards, inputs, etc.)

### PASO 3: Componentes Base
Crear como **Components** con **Auto Layout**:
- Botón Primary
- Botón Secondary
- Tab Item
- Product Card
- Input Field
- Bottom Navigation
- Progress Indicator
- Size Button
- Filter Option

### PASO 4: Pantallas
1. Crear **página "Screens"**
2. Duplicar frame base para cada pantalla
3. Usar instancias de los componentes creados
4. Aplicar **Auto Layout** para responsividad

### PASO 5: Prototipado
1. Conectar pantallas con **Prototype**
2. Interacciones en Bottom Nav
3. Flujo: Home → Catalog → Product → Cart → Checkout → Confirmation

### PASO 6: Responsive
1. Crear **constraints** apropiados
2. Configurar **Auto Layout** en contenedores
3. Probar en diferentes anchos (375px, 428px, 480px)

---

## 📦 RECURSOS NECESARIOS

### Iconos (Lucide Icons)
- Home
- Search
- ShoppingBag
- User
- ChevronLeft
- ChevronRight
- Grid3x3
- LayoutGrid
- Bookmark
- Heart
- X (close)
- Check

**Descarga:** https://lucide.dev

### Imágenes de Productos
Usar imágenes de moda minimalista (ratio 3:4)

### Fuente
**Helvetica Now Text** o alternativas:
- Helvetica Neue
- Inter
- SF Pro Display (iOS)

---

## ✅ CHECKLIST

- [ ] Paleta de colores creada
- [ ] Estilos de texto configurados
- [ ] Iconos importados
- [ ] Componentes base creados
- [ ] Sistema de grid configurado (2 columnas)
- [ ] Bottom Navigation creado
- [ ] 7 pantallas diseñadas
- [ ] Prototipo conectado
- [ ] Versión responsive probada
- [ ] Modo oscuro aplicado en todas las pantallas

---

## 💡 TIPS PARA FIGMA

1. **Usa Auto Layout** para todo - facilita cambios y hace responsive
2. **Constraints:** Left & Top para elementos fijos
3. **Grid:** 2 columnas, gutter 12px, margin 16px
4. **Naming:** Usa nombres claros (Button/Primary, Text/Heading1)
5. **Organize:** Agrupa por tipo (Components, Screens, Assets)
6. **Variables:** Considera usar Variables para colores (Figma 2023+)

---

**Creado para:** E-Commerce ZARA Style - Modo Oscuro Permanente
**Versión:** 1.0
**Última actualización:** 2025
