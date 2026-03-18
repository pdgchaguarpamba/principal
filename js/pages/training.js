/**
 * ===== PÁGINA: CAPACITACIONES =====
 * Renderiza los cursos presenciales y plataformas virtuales con tabs.
 */

/** Cambia el tab activo entre 'presencial' y 'virtual' */
function setTab(tab) {
  activeTrainingTab = tab;
  render();
}

/** Renderiza la página completa de capacitaciones */
function renderTraining() {
  const isVirtual = activeTrainingTab === 'virtual';

  // --- Tarjetas de plataformas virtuales ---
  const virtualList = virtualPlatforms.map(p => `
    <div class="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all group border border-white flex flex-col fade-in">
      <div class="h-44 md:h-48 overflow-hidden">
        <img src="${p.img}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
      </div>
      <div class="p-6 md:p-8 flex flex-col flex-grow">
        <div class="h-8 flex items-center mb-4">
          <img src="${p.logo}" class="max-h-full max-w-[100px] grayscale group-hover:grayscale-0 transition-all" alt="" />
        </div>
        <h4 class="text-lg md:text-xl font-bold text-[#003087] mb-3">${p.name}</h4>
        <p class="text-gray-500 text-sm mb-8 leading-relaxed flex-grow">${p.desc}</p>
        <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="w-full py-3 bg-[#00A3E0] text-white font-bold rounded-xl text-center text-xs uppercase tracking-widest hover:bg-[#003087] flex items-center justify-center transition-colors">
          Ir ahora ${ic('external-link', 'ml-2', 14, 14)}
        </a>
      </div>
    </div>`).join('');

  // --- Tarjetas de cursos presenciales ---
  const presencialList = presencialCourses.map(c => `
    <div class="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all group border border-white flex flex-col fade-in">
      <div class="h-44 md:h-48 overflow-hidden relative">
        <img src="${c.img}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
      </div>
      <div class="p-6 md:p-8 flex flex-col flex-grow text-left">
        <h4 class="text-lg md:text-xl font-bold text-[#003087] mb-4">${c.title}</h4>
        <div class="flex items-center text-gray-400 text-xs mb-4">
          ${ic('calendar', 'mr-2', 14, 14)} <span>${c.date} | ${c.time}</span>
        </div>
        <p class="text-gray-500 text-sm mb-8 flex-grow leading-relaxed">${c.d}</p>
        <button onclick="openModal('${c.title.replace(/'/g, "\\'")}')"
          class="w-full py-4 bg-[#00A3E0] text-white font-bold rounded-xl hover:bg-[#003087] transition-all shadow-lg text-[10px] uppercase tracking-widest">
          Inscribirme
        </button>
      </div>
    </div>`).join('');

  const list = isVirtual ? virtualList : presencialList;

  return `
  <div class="pt-32 pb-24 px-6 fade-in">
    <div class="container mx-auto text-center">
      ${sectionTitle('Capacitaciones', 'Oferta Gratuita', true)}
      <div class="max-w-4xl mx-auto mb-12 md:mb-16">
        <div class="flex border-b border-gray-200">
          <button onclick="setTab('virtual')" class="flex-1 py-4 text-center font-bold text-[10px] md:text-sm uppercase tracking-widest transition-all relative ${isVirtual ? 'text-[#003087]' : 'text-gray-400'}">
            Virtuales ${isVirtual ? '<div class="absolute bottom-0 left-0 w-full h-1 bg-[#00A3E0]"></div>' : ''}
          </button>
          <button onclick="setTab('presencial')" class="flex-1 py-4 text-center font-bold text-[10px] md:text-sm uppercase tracking-widest transition-all relative ${!isVirtual ? 'text-[#003087]' : 'text-gray-400'}">
            Presenciales ${!isVirtual ? '<div class="absolute bottom-0 left-0 w-full h-1 bg-[#00A3E0]"></div>' : ''}
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">${list}</div>
    </div>
  </div>`;
}
