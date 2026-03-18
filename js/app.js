/**
 * ===== APLICACIÓN PRINCIPAL =====
 * Contiene: render(), navegación, header, fondo animado e inicialización.
 * Este archivo se carga AL FINAL porque depende de todos los demás.
 */

// =============================================
// MAPA DE RUTAS (hash-based)
// Usa hashes (#home, #noticias) para que funcione
// abriendo el archivo directamente desde el explorador.
// =============================================

const ROUTES = {
  'inicio':          'home',
  'sobre-nosotros':  'sobre-nosotros',
  'mision-vision':   'mision-vision',
  'noticias':        'noticias',
  'servicios':       'servicios',
  'capacitaciones':  'capacitaciones',
  'contacto':        'contacto',
};

/** Convierte el hash actual al nombre interno de página */
function hashToPage() {
  const hash = window.location.hash.replace('#', '');
  const found = Object.entries(ROUTES).find(([, h]) => h === hash);
  return found ? found[0] : 'inicio';
}

// =============================================
// RENDER PRINCIPAL
// =============================================

/** Renderiza la página actual y el modal */
function render() {
  let html = '';
  switch (currentPage) {
    case 'inicio': html = renderHome(); break;
    case 'sobre-nosotros': html = renderAbout(); break;
    case 'mision-vision': html = renderMission(); break;
    case 'noticias': html = renderNews(); break;
    case 'servicios': html = renderServices(); break;
    case 'capacitaciones': html = renderTraining(); break;
    case 'contacto': html = renderContact(); break;
    case 'noticia-detalle': html = renderNewsDetail(currentNews); break;
    default: html = renderHome();
  }
  document.getElementById('main-content').innerHTML = html;
  document.getElementById('modal-container').innerHTML = renderModalHTML();
  updateHeader();
  lucide.createIcons();
}

// =============================================
// NAVEGACIÓN
// =============================================

/** Navega a una página, actualiza la URL y cierra el menú móvil */
function navigate(page) {
  currentPage = page;
  currentNews = null;
  isMenuOpen = false;
  document.getElementById('mobile-menu').classList.add('translate-x-full');

  // Restaurar ícono hamburguesa al cerrar menú
  const menuIcon = document.getElementById('mobile-menu-icon');
  if (menuIcon) {
    menuIcon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  }

  // Actualiza el hash de la URL (ej: #home, #noticias)
  window.location.hash = ROUTES[page] || 'home';

  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/** Abre/cierra el menú móvil */
function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  document.getElementById('mobile-menu').classList.toggle('translate-x-full');
  document.getElementById('mobile-menu-icon').setAttribute('data-lucide', isMenuOpen ? 'x' : 'menu');
  lucide.createIcons();
}

// =============================================
// HEADER
// =============================================

/** Actualiza estilos del header según scroll y página actual */
function updateHeader() {
  const dark = isScrolled || currentPage !== 'inicio';
  const header = document.getElementById('main-header');

  // Clases del header
  header.className = dark
    ? 'fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-3'
    : 'fixed w-full z-50 transition-all duration-300 bg-transparent py-4 md:py-6';

  // Colores del logo
  const logoDe = document.getElementById('logo-de');
  const logoNm = document.getElementById('logo-name');
  const hamIco = document.getElementById('mobile-menu-icon');
  if (logoDe) logoDe.className = dark ? 'text-[#003087]' : 'text-white';
  if (logoNm) logoNm.className = `font-bold ml-1 ${dark ? 'text-[#003087]' : 'text-white'}`;
  if (hamIco) hamIco.className = `transition-colors duration-300 ${dark ? 'text-[#003087] drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]' : 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]'}`;

  // Botones de navegación
  ['inicio', 'noticias', 'servicios', 'capacitaciones', 'contacto'].forEach(p => {
    const btn = document.getElementById(`nav-btn-${p}`);
    if (!btn) return;
    if (currentPage === p) {
      btn.className = `text-[10px] font-bold tracking-[0.2em] uppercase transition-all relative group ${dark ? 'text-[#00A3E0]' : 'text-white'}`;
      const ul = btn.querySelector('.nav-ul');
      if (ul) ul.style.width = '100%';
    } else {
      btn.className = `text-[10px] font-bold tracking-[0.2em] uppercase transition-all relative group ${dark ? 'text-[#1F2A44] hover:text-[#00A3E0]' : 'text-white/70 hover:text-white'}`;
      const ul = btn.querySelector('.nav-ul');
      if (ul) ul.style.width = '0';
    }
  });

  // Botón de institución
  const instBtn = document.getElementById('nav-btn-inst');
  if (instBtn) instBtn.className = `flex items-center text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${dark ? 'text-[#1F2A44]' : 'text-white/70 hover:text-white'}`;
}

// =============================================
// FONDO ANIMADO
// =============================================

/** Detecta el tipo de dispositivo y ajusta el fondo */
function detectEnvironment() {
  const width = window.innerWidth;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const count = isMobile ? 8 : (isTablet ? 12 : 18);
  initBackground(count);
}

/** Inicializa las siluetas flotantes del fondo */
function initBackground(count) {
  const bg = document.getElementById('animated-bg');
  bg.innerHTML = '';
  const icons = ['monitor', 'wifi', 'file-text', 'globe', 'cpu', 'network', 'smartphone'];

  for (let i = 0; i < count; i++) {
    const name = icons[Math.floor(Math.random() * icons.length)];
    const size = Math.floor(Math.random() * 30) + 30;
    const div = document.createElement('div');
    div.className = 'bg-silhouette';
    div.style.top = `${Math.random() * 100}%`;
    div.style.left = `${Math.random() * 100}%`;
    div.style.animation = `${i % 2 === 0 ? 'float' : 'drift'} ${Math.floor(Math.random() * 10) + 10}s infinite ease-in-out ${Math.random() * 5}s`;
    div.innerHTML = `<i data-lucide="${name}" style="width:${size}px;height:${size}px"></i>`;
    bg.appendChild(div);
  }
  lucide.createIcons();
}

// =============================================
// EVENT LISTENERS
// =============================================

window.addEventListener('scroll', () => {
  const s = window.scrollY > 50;
  if (s !== isScrolled) {
    isScrolled = s;
    updateHeader();
  }
});

window.addEventListener('resize', () => {
  const currentWidth = window.innerWidth;
  if (Math.abs(currentWidth - parseInt(document.body.dataset.width || 0)) > 50) {
    document.body.dataset.width = currentWidth;
    detectEnvironment();
  }
});

// Botón atrás/adelante del navegador
window.addEventListener('hashchange', () => {
  currentPage = hashToPage();
  currentNews = null;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =============================================
// INICIALIZACIÓN
// Detecta el hash actual para cargar la página correcta
// al entrar directamente por un enlace o al refrescar.
// =============================================

currentPage = hashToPage();

render();
detectEnvironment();
document.body.dataset.width = window.innerWidth;