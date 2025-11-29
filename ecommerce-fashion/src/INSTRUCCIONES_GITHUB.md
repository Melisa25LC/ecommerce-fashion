# 🚀 Cómo publicar en GitHub Pages

## ✅ TODO ESTÁ LISTO - Solo sigue estos pasos:

---

## 📋 PASO 1: Crear cuenta en GitHub

1. Ve a: **https://github.com**
2. Click en **"Sign up"** (Registrarse)
3. Crea tu usuario (ejemplo: `tu-nombre`)
4. Verifica tu email
5. ✅ **¡Listo! Ya tienes cuenta**

---

## 📦 PASO 2: Crear repositorio

1. Click en el **"+"** arriba a la derecha
2. Selecciona **"New repository"**
3. Llena los datos:
   ```
   Repository name: ecommerce-fashion
   Description: E-commerce de moda con modo oscuro
   ☑️ Public (debe ser público para GitHub Pages gratis)
   ❌ NO marques "Add a README file"
   ```
4. Click **"Create repository"**
5. ✅ **Repositorio creado**

---

## 📤 PASO 3: Subir los archivos

### Opción A: Interfaz web (MÁS FÁCIL)

1. En tu repositorio nuevo, verás la página de bienvenida
2. Click en **"uploading an existing file"**
3. **Arrastra TODOS los archivos de tu proyecto**
   - Incluye carpetas: `components/`, `screens/`, `styles/`, `.github/`
   - Incluye archivos: `App.tsx`, `package.json`, `vite.config.ts`, etc.
4. Scroll abajo y click **"Commit changes"**
5. Espera que termine de subir
6. ✅ **Archivos subidos**

### Opción B: GitHub Desktop (más fácil para actualizaciones)

1. Descarga **GitHub Desktop**: https://desktop.github.com
2. Instala y loguea con tu cuenta
3. Click **"Clone a repository"**
4. Selecciona `tu-usuario/ecommerce-fashion`
5. Elige dónde guardarlo en tu computadora
6. Copia TODOS los archivos del proyecto a esa carpeta
7. En GitHub Desktop verás los cambios
8. Escribe un mensaje: "Primera versión"
9. Click **"Commit to main"**
10. Click **"Push origin"**
11. ✅ **Archivos subidos**

---

## ⚙️ PASO 4: Configurar GitHub Pages

1. En tu repositorio de GitHub, ve a **"Settings"** (arriba)
2. En el menú lateral izquierdo, click en **"Pages"**
3. En la sección **"Build and deployment"**:
   - Source: **"GitHub Actions"** (muy importante)
4. ✅ **Configuración completada**

---

## 🔧 PASO 5: Ajustar el nombre del repositorio en la configuración

**⚠️ MUY IMPORTANTE:** Si tu repositorio NO se llama exactamente `ecommerce-fashion`, debes cambiar esto:

1. Abre el archivo **`vite.config.ts`**
2. Cambia esta línea:
   ```typescript
   base: '/ecommerce-fashion/',
   ```
   Por el nombre de TU repositorio:
   ```typescript
   base: '/tu-nombre-de-repo/',
   ```
3. Guarda y vuelve a subir el archivo

---

## 🎬 PASO 6: Deploy automático

1. Ve a la pestaña **"Actions"** en tu repositorio
2. Verás un workflow corriendo: **"Deploy to GitHub Pages"** 🟡
3. Espera 2-3 minutos
4. Cuando aparezca ✅ (check verde), ¡está listo!
5. Tu sitio estará en:
   ```
   https://tu-usuario.github.io/ecommerce-fashion/
   ```

---

## 🎯 RESULTADO FINAL

Tu aplicación estará publicada en:
```
https://TU-USUARIO.github.io/TU-REPOSITORIO/
```

Ejemplo:
```
https://maria-garcia.github.io/ecommerce-fashion/
```

✅ **Sin mencionar Figma Make**
✅ **Completamente funcional**
✅ **Gratis para siempre**
✅ **Actualizable (solo subes archivos nuevos)**

---

## 🔄 ACTUALIZAR tu sitio en el futuro

Cada vez que subas cambios a GitHub:
1. Sube los archivos modificados
2. GitHub Actions hace el build automáticamente
3. En 2-3 minutos tu sitio está actualizado

**NO necesitas hacer nada más** ✨

---

## ❓ PROBLEMAS COMUNES

### ❌ "Page not found" o error 404
**Solución:**
- Verifica que en Settings → Pages esté configurado como "GitHub Actions"
- Revisa que el `base:` en `vite.config.ts` coincida con tu nombre de repositorio
- Espera 5 minutos después del deploy

### ❌ La página se ve sin estilos
**Solución:**
- Verifica el `base:` en `vite.config.ts`
- Debe ser: `base: '/nombre-de-tu-repositorio/',`

### ❌ El workflow falla en Actions
**Solución:**
- Ve a Settings → Actions → General
- En "Workflow permissions" selecciona: "Read and write permissions"
- Vuelve a hacer push de los archivos

---

## 💡 CONSEJOS PRO

1. **Dominio personalizado:**
   - Puedes usar tu propio dominio (ej: `www.tu-marca.com`)
   - Configuración en Settings → Pages → Custom domain

2. **Actualizar fácilmente:**
   - Usa GitHub Desktop para subir cambios rápidamente
   - No necesitas usar comandos de terminal

3. **Compartir:**
   - El link es público, compártelo libremente
   - No menciona Figma Make en ningún lado

---

## 🎉 ¡FELICIDADES!

Ahora tienes tu e-commerce publicado profesionalmente.

**¿Necesitas ayuda?** Pregúntame cualquier duda sobre estos pasos.
