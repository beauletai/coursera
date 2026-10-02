# Prompt para continuar en sesión local · Web South Summit en inwink (Sandbox Web)

Copia todo lo que hay debajo de la línea y pégalo como primer mensaje en la sesión local.

---

Hola. Soy **Sara** (Sara Vega, South Summit). Háblame en español y de tú. **Bea** es quien desarrolla y resuelve las dudas técnicas: si necesitamos algo técnico, pon "Bea"; si depende de mí, llámame Sara.

Vengo de una sesión en la nube que no tenía acceso a mi navegador. Ahora quiero que trabajes en local, con el back office (BO) de inwink y la preview abiertos en mi navegador, para que tú apliques los cambios y compruebes cómo quedan.

## 0. Normas obligatorias (léelas antes de nada)

1. **Antes de cualquier cambio, avísame** y espera mi permiso explícito para ese cambio concreto. Dime:
   - qué vas a tocar;
   - qué módulos, páginas o configuraciones pueden verse afectados;
   - si se puede deshacer y cómo.

   Leer y mirar lo puedes hacer sin preguntar.
2. **Toca solo lo acordado.** Si acordamos un bloque o un módulo, no toques nada más.
3. **No uses el conector MCP de inwink (Winwink_CMS) para escribir en la identidad visual** (documento `visualconfig`, id `149b3314-5ccd-4c80-b47d-11791215e699`). El 02/10 a las 11:35 UTC, un `iw_cms_update_root` con un parche mínimo (solo `/splashscreen`) guardó el documento entero codificado en base64 bajo la clave `"$_atobObject"`. La web dejó de leer temas, tipografías y cabecera. `iw_cms_revert_change` lo volvió a guardar codificado. Desde el BO se guarda bien. Para leer, el MCP sirve.
4. Usa la skill `inwink-mcp-guidelines` si está disponible. En resumen:
   - selectores CSS reales sacados de DevTools, nunca adivinados;
   - estilos nuevos en un bloque nuevo de Estilos globales;
   - no declarar `font-family` ni `@font-face` (TWK Everett ya está cargada);
   - no cargar assets externos;
   - no tocar URLs ni rutas sin confirmar.
5. **Nombres de marca** siempre en inglés, tal cual: Ways to Engage, For Business, Discover, Connect, Lead, International Events, Tickets, Sign in.
6. **Botones:** solo tres tipos (degradado, outline y texto), nunca mezclados y siempre legibles. En móvil, al 90 % del ancho y centrados. En la cabecera, For Business va en outline.
7. Si te pido un cambio solo para móvil, no toques los otros tamaños.
8. Basa lo que digas en evidencias. Si algo es una hipótesis, dilo.

## 1. Contexto

- Comunidad inwink **"Sandbox Web"**, communityId `7eb8755d-b9bc-f111-a6a9-6045bd93f719`, aplicación `community` (web).
- BO, páginas de la web: https://my.inwink.com/e1619d75-5169-4f17-bd25-08ddc9f99005/c/7eb8755d-b9bc-f111-a6a9-6045bd93f719/website/pages
- Preview: https://preview.inwink.com/sandbox-web_0dfbe35d-b9bc-f111-a6a9-00224880dada
- Objetivo: replicar por fases el prototipo de Claude Design de la web de South Summit. Después, meter el contenido real, los enlaces de cada botón y los idiomas (EN, ES con tuteo, PT-BR con você). Ahora mismo solo está activo EN, y lo de activar ES y PT-BR lo dejamos para el final.
- Hoja de ruta con tareas marcables, fijada en mi barra lateral de claude.ai: https://claude.ai/artifact/WFrdr8pK2p7MxAq3JE9Gkx (colección `tasks`; si tienes la herramienta ArtifactData, puedes actualizarla).
- Repositorio `beauletai/coursera`, rama `claude/sandbox-web-community-pages-rfjsz8`, carpeta `inwink-temas/`. Ahí están las versiones finales y las copias de seguridad (ver sección 4).

## 2. Qué hay que hacer YA: terminar de restaurar la identidad visual

Estado leído el 02/10 a las 12:24 UTC (versión `2026-10-02T12:24:29.55`).

**Ya está bien, restaurado por mí desde el BO:**
- temas: `defaultTheme`, los 6 `blocThemes` y 2 `newBlocThemes`, que son Banda 15 años y Amarillo ofertas;
- `global`: colores de marca, paleta y logo;
- `icons`: el favicon;
- `fonts`: TWK Everett Regular y Medium.

**Falta (orden propuesto):**
1. **`appHeader` (cabecera), lo primero.** Ahora solo tiene `{"settings":{"alignItems":"center"}}`. Hay que dejarla como en `inwink-temas/backup-2026-10-02/cabecera-appHeader.json`:
   - `style`: fondo `#FFFFFF`, color `#370C3B`;
   - `logo`: la URL del logo en degradado;
   - `settings`: `alignItems: center` y `enableSubMenuArrow: true`;
   - `colors`, `buttons` (degradado) y `lightButtons` (outline `#370C3B`).

   Hazlo desde el BO, en el módulo de cabecera de la página de arriba (con el Konami code se ve el JSON). Ojo: en el primer módulo, pegar el JSON no guardaba; guardó cuando cambié algo a mano en la interfaz (el favicon). Hipótesis: el botón de guardar solo se activa con un cambio hecho en la interfaz.
2. **`appMenu` (menú móvil):** fondo `#FFFFFF`, textos y enlaces `#370C3B`, acento `#F14283`. Valores en `visualconfig-completo-0746utc.json`.
3. **`splashscreen` (pantalla de carga):** la versión de marca, `{"backgroundColor":"#FFFFFF","color":"#370C3B","spinnerColor":"#F14283"}`. La de esta mañana era la roja de demo: `#fd525b`, con texto y spinner blancos.
4. `primaryColor`, `appFooter` y `partnerWrkMenu` son restos de la plantilla que no usamos. Restaurarlos es opcional; pregúntame.
5. La clave `"$_atobObject"` sigue dentro del documento. Ahora no estorba, pero conviene que Bea o el soporte de inwink la quiten. No la borres sin preguntarme.
6. Después, que yo revise la preview y publique.

Comprueba cada paso en la preview (escritorio, tablet y móvil) antes de darlo por hecho.

## 3. Lo que ya está hecho y no se ha roto (no lo toques sin permiso)

**Estilos globales** (BO › Herramientas webmaster › Estilos globales, todos en afterBody):
- `61eb401b…` · **Cabecera v6**. Es igual que `inwink-temas/styles/header-nav.css`. Hace esto:
  - entradas en mayúsculas, 14 px y 500, con 11 px de margen entre ellas;
  - flecha del desplegable sin círculo, en `#370C3B`;
  - barra con `padding` de 6 px arriba y abajo, sin altura fija (con altura fija se recortaba el desplegable);
  - Sign in, la última entrada, anclada a la derecha;
  - subtítulos de los desplegables con `::after` según el `aria-label`: Madrid "June 2–4 2027", Brazil "[Date]", Bilbao "[Date]", International Events "Series across cities", Discover "Get the picture", Connect "Find what is relevant", Lead "Go deeper";
  - panel del desplegable con radio de 18 px, sombra y animación de entrada de 180 ms, respetando `prefers-reduced-motion`.
- `mcp-footer-mobile-accordion` · estilos del acordeón del footer en móvil (≤600 px).
- `aa35233b…` · "SSJ Journey selector" (prueba, prefijo `.ssj`). No es nuestro; no lo toques.

**Scripts globales:**
- `5abc9e29…` · acordeón del footer en móvil. Es igual que `inwink-temas/scripts/footer-mobile-accordion.js`. Ya confirmé que abre bien.

**Menú de cabecera (`mainheader`, id `94638c38-4ea2-458e-82e0-811d78f4c1bd`):**
- Events, con el desplegable Madrid / Brazil / Bilbao / International Events.
- Ways to Engage, con el desplegable Discover / Connect / Lead.
- For Business, como botón secundario (outline).
- Tickets, como botón.
- Sign in, con `action: login`.
- Copia en `backup-2026-10-02/mainheader-menu.json`. Los enlaces todavía están vacíos.

**Footer (`pagefooter`, id `00dc4ae7-8b8f-4a6a-a427-b296bece8df4`, bloque `027bea74…`):**
- Rejilla de 260 px más 4 columnas, ancho máximo 1240 px.
- Icono Λ de marca (círculo `#FFDE68` y lambda `#370C3B`) delante de cada título.
- Enlaces en minúscula, 14 px, `#6B5670`.
- Franja legal con © 2027 South Summit a la izquierda y Terms / Privacy / Legal / Cookies / Compliance a la derecha, en la misma línea.
- Powered by oculto.
- Copia completa con su CSS en `backup-2026-10-02/pagefooter.json`.

**Temas:** 8 sin duplicados, con la regla de los tres tipos de botón. JSON en `inwink-temas/00-…json` a `06-…json`, `21-personalizado-banda-15-anos.json` y `23-personalizado-amarillo-ofertas.json`.

**Páginas:** solo quedan `home` y la contentpage "Build your journey". Las demás las borré yo a propósito.

## 4. Archivos de referencia (rama `claude/sandbox-web-community-pages-rfjsz8`)

- `inwink-temas/backup-2026-10-02/visualconfig-completo-0746utc.json`: la identidad visual entera tal como estaba el 02/10 a las 07:46 UTC, antes de romperse. Es la fuente de verdad para restaurar.
- `inwink-temas/backup-2026-10-02/cabecera-appHeader.json`: solo `appHeader`.
- `inwink-temas/backup-2026-10-02/temas-restaurados.json`: solo los temas (ya aplicado).
- `inwink-temas/backup-2026-10-02/configuracion-visual-restaurada.json`: todo menos los temas, con la pantalla de carga de marca.
- `inwink-temas/backup-2026-10-02/mainheader-menu.json`, `pagefooter.json` y `webmaster-global-styles-scripts.json`: copias del menú, el footer y los estilos y scripts globales.
- `inwink-temas/styles/header-nav.css` y `inwink-temas/scripts/footer-mobile-accordion.js`.

## 5. Pendiente después de restaurar (en la hoja de ruta)

**Fase 1, cabecera y pie:**
- **Sign in:** ahora sale dos veces, como entrada del menú y como botón nativo de inwink. Mi propuesta pendiente es quitar la entrada del menú y dar al nativo el estilo outline del prototipo.
- Botones en móvil al 90 % y centrados.
- Revisar la cabecera y el menú hamburguesa en móvil.

**Fases 2 a 6, réplica del prototipo:**
- Piezas reutilizables: bloque CTA, Newsletter, banda 15 años, hero oscuro y tarjetas.
- Páginas: Home, Ways to Engage, Build your journey.
- Madrid: Overview, Experiences, Programme, Speakers, Startup Competition, Tracks, programa completo, todos los ponentes, Tickets y For Business.
- Repaso: responsive en 3 tamaños, interacciones, contraste y publicación.

**Fase 7, contenido:**
- textos y fotos reales;
- URLs de cada botón de la cabecera y del footer, y los legales;
- fechas de Brazil y Bilbao;
- activar ES y PT-BR y traducir;
- SEO, cookies y analítica (Bea) y redirecciones (Bea).

**Fase 8:** QA final y publicación.

Empieza leyendo el estado actual de la identidad visual y de la cabecera en el BO o la preview. Después dime en 2 o 3 líneas qué vas a hacer con `appHeader` y espera mi OK.
