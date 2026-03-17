# Ideas de Diseño — Observatorio de Indicadores de Género

## Contexto
Plataforma institucional para la visualización de indicadores de género con integración de dashboards Power BI/Tableau.
Audiencia: investigadores, tomadores de decisiones, público académico y ciudadano.

---

<response>
<text>
## Idea A — "Arquitectura Académica Estructurada"

**Design Movement:** Swiss International Style + Institutional Data Design
**Core Principles:**
1. Jerarquía tipográfica severa: los datos hablan por sí mismos
2. Cuadrícula asimétrica con columna lateral fija de navegación
3. Uso del color morado como señal institucional, no decorativa
4. Máxima legibilidad para textos densos y tablas de datos

**Color Philosophy:**
- Primario: #5E2750 (morado institucional oscuro) — autoridad y seriedad académica
- Acento: #8E44AD (violeta medio) — énfasis en elementos interactivos
- Fondo: #F8F9FA (gris muy claro) — respira sin distraer
- Tarjetas: blanco puro #FFFFFF — los dashboards flotan sobre el fondo

**Layout Paradigm:**
- Sidebar izquierda fija de 280px con categorías de indicadores
- Área de contenido principal que ocupa el 75% del viewport
- Header horizontal compacto con logo + nav institucional

**Signature Elements:**
1. Borde izquierdo de color sólido en tarjetas de indicadores (accent bar)
2. Línea separadora morada bajo cada título de sección
3. Badges de categoría con fondo morado translúcido

**Interaction Philosophy:**
- Sidebar resalta la categoría activa con fondo morado y texto blanco
- Transiciones suaves (200ms ease) al cambiar de dashboard
- Acordeones de metodología con animación de apertura

**Animation:**
- Fade-in de 300ms para el contenedor del dashboard al cambiar de indicador
- Hover en items del sidebar: desplazamiento sutil de 4px a la derecha
- Entrada de tarjetas de estadísticas con stagger de 100ms

**Typography System:**
- Display: Montserrat 700/800 para títulos principales
- Body: Source Sans Pro 400/600 para texto corrido
- Mono: JetBrains Mono para valores numéricos de indicadores
</text>
<probability>0.08</probability>
</response>

<response>
<text>
## Idea B — "Observatorio Moderno con Sidebar Dinámica" ← SELECCIONADA

**Design Movement:** Contemporary Data Observatory + Bauhaus Functionality
**Core Principles:**
1. Sidebar izquierda como eje de navegación con agrupación por dimensiones temáticas
2. Área de visualización como "escenario" central con sombra pronunciada
3. Color morado como identidad de género, no solo como decoración
4. Ficha técnica integrada como parte del flujo de lectura, no como apéndice

**Color Philosophy:**
- Primario: #673AB7 (deep purple) — equilibrio entre autoridad y modernidad
- Primario oscuro: #4527A0 — hover states y elementos activos
- Acento cálido: #CE93D8 (lila claro) — badges y etiquetas
- Fondo general: #F5F4F8 (gris lavanda muy sutil) — coherencia con la identidad cromática
- Tarjetas: #FFFFFF con sombra suave

**Layout Paradigm:**
- Header sticky con altura de 64px, logo izquierda, nav derecha
- Hero de altura media (50vh) con gradiente morado oscuro + patrón geométrico sutil
- Debajo del hero: layout de dos columnas (sidebar 260px + contenido principal)
- Footer institucional con tres columnas

**Signature Elements:**
1. Patrón geométrico abstracto en el hero (formas circulares superpuestas, opacidad 10%)
2. Indicadores KPI en tarjetas con número grande y etiqueta descriptiva
3. Línea de tiempo de actualización en el footer de cada dashboard

**Interaction Philosophy:**
- Sidebar con grupos colapsables por dimensión temática
- Indicador activo marcado con borde izquierdo de 4px + fondo morado suave
- Botón "Ver en pantalla completa" en cada iframe de dashboard

**Animation:**
- Hero: texto entra con slide-up de 600ms al cargar
- Dashboard: fade-in + scale(0.98→1) al seleccionar indicador
- KPIs: contador animado al entrar en viewport

**Typography System:**
- Display: Montserrat 700 para títulos de sección y hero
- Body: Inter 400/500 para texto corrido y etiquetas
- Números: Montserrat 800 para KPIs y métricas destacadas
</text>
<probability>0.07</probability>
</response>

<response>
<text>
## Idea C — "Minimalismo Editorial de Datos"

**Design Movement:** Editorial Data Journalism + Nordic Minimalism
**Core Principles:**
1. Tipografía como elemento visual dominante
2. Color usado con extrema economía: solo un acento morado
3. Espacio en blanco generoso que da respiro a datos complejos
4. Navegación horizontal por pestañas como metáfora de "capítulos"

**Color Philosophy:**
- Primario: #8E44AD (violeta medio) — único color de acento
- Fondo: #FFFFFF puro — editorial limpio
- Texto: #1A1A2E (casi negro con tinte azul) — máxima legibilidad
- Separadores: #E8E0F0 (lila muy claro) — estructura sin ruido

**Layout Paradigm:**
- Header minimalista con solo logo y 4 ítems de nav
- Pestañas horizontales debajo del hero para categorías
- Contenido de ancho máximo 1100px centrado
- Sin sidebar — toda la navegación en las pestañas

**Signature Elements:**
1. Números estadísticos grandes en tipografía display como "portada"
2. Citas textuales de definiciones en blockquote con borde morado
3. Tabla de metadatos limpia debajo de cada dashboard

**Interaction Philosophy:**
- Pestañas con subrayado animado al hover
- Scroll suave entre secciones
- Tooltips en indicadores con definición breve

**Animation:**
- Transición de pestaña: slide horizontal del contenido
- Números KPI: count-up animation
- Entrada de página: fade simple

**Typography System:**
- Display: Playfair Display 700 para títulos editoriales
- Body: Lato 400/700 para texto corrido
- Datos: Roboto Mono para valores numéricos
</text>
<probability>0.06</probability>
</response>

---

## Decisión Final: **Idea B — "Observatorio Moderno con Sidebar Dinámica"**

Justificación: Combina la robustez institucional de KIMN (sidebar estructurada) con la integración fluida de dashboards de los observatorios de género de referencia. La paleta morada profunda (#673AB7) establece la identidad de género sin caer en clichés. El layout de dos columnas maximiza el espacio para los iframes de Power BI/Tableau.
