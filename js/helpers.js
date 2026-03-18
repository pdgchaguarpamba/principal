/**
 * ===== FUNCIONES AUXILIARES =====
 * Funciones reutilizables usadas por múltiples páginas.
 */

/**
 * Genera el HTML de un ícono Lucide.
 * @param {string} name  - Nombre del ícono (ej: 'arrow-right', 'calendar')
 * @param {string} cls   - Clases CSS adicionales
 * @param {number} w     - Ancho en px
 * @param {number} h     - Alto en px
 * @returns {string} HTML del ícono
 */
const ic = (name, cls = '', w = 24, h = 24) =>
  `<i data-lucide="${name}" class="${cls}" style="width:${w}px;height:${h}px;display:inline-block;vertical-align:middle;"></i>`;

/**
 * Genera el HTML de un título de sección con subtítulo y línea decorativa.
 * @param {string}  sub      - Subtítulo superior (ej: 'Actualidad')
 * @param {string}  title    - Título principal (ej: 'Noticias Destacadas')
 * @param {boolean} centered - ¿Centrar el texto?
 * @returns {string} HTML del título de sección
 */
const sectionTitle = (sub, title, centered = false) => `
  <div class="mb-10 md:mb-12 ${centered ? 'text-center' : ''}">
    <span class="text-[#00A3E0] font-bold text-xs uppercase tracking-[0.3em]">${sub}</span>
    <h2 class="text-3xl md:text-4xl font-bold mt-2 text-[#003087] leading-tight">${title}</h2>
    <div class="h-1 w-20 bg-[#00A3E0] mt-4 ${centered ? 'mx-auto' : ''}"></div>
  </div>`;
