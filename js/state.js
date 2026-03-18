/**
 * ===== ESTADO GLOBAL DE LA APLICACIÓN =====
 * Variables que controlan qué se muestra en pantalla.
 */

let currentPage = 'inicio';        // Página actual ('inicio', 'noticias', 'servicios', etc.)
let currentNews = null;             // Noticia seleccionada para detalle
let isMenuOpen = false;             // ¿Menú móvil abierto?
let showModal = false;              // ¿Modal de inscripción visible?
let selectedCourse = '';            // Nombre del curso seleccionado en el modal
let formLoading = false;            // ¿Formulario enviando?
let birthDate = '';                 // Fecha de nacimiento ingresada
let ageValue = '';                  // Edad calculada
let isMinor = false;                // ¿Es menor de 15 años?
let activeTrainingTab = 'presencial'; // Tab activo: 'presencial' o 'virtual'
let isScrolled = false;             // ¿El usuario ha scrolleado?
