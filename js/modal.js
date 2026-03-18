/**
 * ===== MODAL DE INSCRIPCIÓN =====
 * Lógica y renderizado del modal de inscripción a cursos presenciales.
 */

/** Abre el modal de inscripción para un curso */
function openModal(course) {
  selectedCourse = course;
  birthDate = '';
  ageValue = '';
  isMinor = false;
  showModal = true;
  render();
}

/** Cierra el modal de inscripción */
function closeModal() {
  showModal = false;
  render();
}

/** Maneja el cambio de fecha de nacimiento y calcula la edad */
function handleDateChange(e) {
  birthDate = e.target.value;

  if (birthDate) {
    const birth = new Date(birthDate);
    const today = new Date();
    let calc = today.getFullYear() - birth.getFullYear();
    if (today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) {
      calc--;
    }
    ageValue = calc;
    isMinor = calc <= 15;
  } else {
    ageValue = '';
    isMinor = false;
  }

  // Actualizar campo de edad sin re-renderizar todo
  const ageDisp = document.getElementById('age-display');
  if (ageDisp) ageDisp.value = ageValue;

  // Mostrar/ocultar campo de representante
  const rep = document.getElementById('representative-container');
  if (rep) {
    rep.style.display = isMinor ? '' : 'none';
    if (isMinor && !rep.innerHTML.trim()) {
      rep.innerHTML = `<div class="space-y-1 animate-in slide-in-from-top-2 duration-300">
        <label class="text-[9px] md:text-[10px] font-bold text-[#00A3E0] uppercase tracking-widest flex items-center">${ic('users', 'mr-2', 12, 12)} Representante</label>
        <input id="input-representante" required class="w-full px-4 py-2 border border-blue-100 bg-blue-50/30 rounded-lg focus:ring-2 focus:ring-[#00A3E0] outline-none text-gray-700" placeholder="Nombre del tutor" />
      </div>`;
      lucide.createIcons();
    } else if (!isMinor) {
      rep.innerHTML = '';
    }
  }
}

/** Envía el formulario de inscripción (simulado) */
async function submitForm(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.disabled = true;
  btn.innerHTML = `${ic('loader-2', 'animate-spin mr-2', 20, 20)} Enviando...`;
  lucide.createIcons();

  // Recopilamos los datos combinando los inputs y los estados globales
  const data = {
    curso: selectedCourse,
    nombres: document.getElementById('input-nombres').value,
    cedula: document.getElementById('input-cedula').value,
    nacimiento: birthDate,
    edad: ageValue,
    representante: isMinor ? document.getElementById('input-representante').value : "N/A",
    email: document.getElementById('input-email').value,
    telefono: document.getElementById('input-telefono').value
  };

  // Pega aquí la URL que copiaste de Google Apps Script en el Paso 1
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyrAXGphAgf3oW_5m7WuGyaZHBKIw1XJsjs8ks407emDZGyLQ0JtOyj7uLOzGzNyuM/exec';

  try {
    // Usamos mode: 'no-cors' para evitar restricciones de seguridad entre dominios
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify(data)
    });

    // Finalizamos el proceso ocultando el modal y mostrando la alerta
    showModal = false;
    render();
    alert('¡Inscripción enviada con éxito!');
  } catch (error) {
    console.error('Error al enviar:', error);
    alert('Hubo un error al guardar la inscripción. Revisa tu conexión.');
    btn.disabled = false;
    btn.innerHTML = 'ENVIAR';
  }
}

/** Genera el HTML completo del modal */
function renderModalHTML() {
  if (!showModal) return '';
  return `
  <div class="fixed inset-0 z-[100] flex items-center justify-center p-4">
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" onclick="closeModal()"></div>
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative z-[110] overflow-hidden animate-in zoom-in-95 duration-300 max-h-[95vh] overflow-y-auto">
      <div class="bg-[#003087] p-6 md:p-8 text-white">
        <h3 class="text-xl md:text-2xl font-bold">Inscripción</h3>
        <p class="text-blue-100/80 text-[10px] md:text-xs mt-1 font-semibold uppercase tracking-wider">${selectedCourse}</p>
      </div>
      <form id="enroll-form" class="p-6 md:p-10 space-y-6" onsubmit="submitForm(event)">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div class="space-y-1">
            <label class="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nombres</label>
            <input id="input-nombres"required type="text" class="w-full px-4 py-2 border border-gray-100 rounded-lg bg-white focus:ring-2 focus:ring-[#00A3E0] outline-none text-gray-700 shadow-sm" placeholder="Juan Pérez" />
          </div>
          <div class="space-y-1">
            <label class="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cédula</label>
            <input id="input-cedula" required type="text" pattern="\\d{10}" maxlength="10" oninput="this.value = this.value.replace(/[^0-9]/g, '')" class="w-full px-4 py-2 border border-gray-100 rounded-lg bg-white focus:ring-2 focus:ring-[#00A3E0] outline-none text-gray-700 shadow-sm" placeholder="10 dígitos" />
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          <div class="space-y-1 sm:col-span-2">
            <label class="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nacimiento</label>
            <input required type="date" id="birth-date-input" value="${birthDate}" onchange="handleDateChange(event)" class="w-full px-4 py-2 border border-gray-100 rounded-lg bg-white focus:ring-2 focus:ring-[#00A3E0] outline-none text-gray-700 shadow-sm" />
          </div>
          <div class="space-y-1">
            <label class="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Edad</label>
            <input readonly type="text" id="age-display" value="${ageValue}" class="w-full px-4 py-2 border border-gray-100 rounded-lg bg-gray-50 text-gray-500 outline-none font-bold text-center" placeholder="--" />
          </div>
        </div>
        <div id="representative-container" style="${isMinor ? '' : 'display:none;'}">
          ${isMinor ? `<div class="space-y-1 animate-in slide-in-from-top-2 duration-300">
            <label class="text-[9px] md:text-[10px] font-bold text-[#00A3E0] uppercase tracking-widest flex items-center">${ic('users', 'mr-2', 12, 12)} Representante</label>
            <input id="input-representante" required class="w-full px-4 py-2 border border-blue-100 bg-blue-50/30 rounded-lg focus:ring-2 focus:ring-[#00A3E0] outline-none text-gray-700" placeholder="Nombre del tutor" />
          </div>` : ''}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div class="space-y-1">
            <label class="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</label>
            <input id="input-email" required type="email" class="w-full px-4 py-2 border border-gray-100 rounded-lg bg-white focus:ring-2 focus:ring-[#00A3E0] outline-none text-gray-700 shadow-sm" placeholder="usuario@gmail.com" />
          </div>
          <div class="space-y-1">
            <label class="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Teléfono</label>
            <input id="input-telefono" required type="tel" oninput="this.value = this.value.replace(/[^0-9]/g, '')" class="w-full px-4 py-2 border border-gray-100 rounded-lg bg-white focus:ring-2 focus:ring-[#00A3E0] outline-none text-gray-700 shadow-sm" placeholder="0987654321" />
          </div>
        </div>
        <div class="pt-4 space-y-4">
          <button type="submit" id="submit-btn" class="w-full py-4 bg-[#00A3E0] text-white font-bold rounded-xl flex items-center justify-center hover:bg-[#003087] transition-all shadow-lg active:scale-95 uppercase tracking-widest text-xs md:text-sm">
            ${formLoading ? `${ic('loader-2', 'animate-spin mr-2', 20, 20)} Enviando...` : 'ENVIAR'}
          </button>
          <button type="button" onclick="closeModal()" class="w-full py-2 text-[10px] font-bold text-gray-400 hover:text-red-500 uppercase tracking-widest transition-colors">
            CANCELAR
          </button>
        </div>
      </form>
    </div>
  </div>`;
}
