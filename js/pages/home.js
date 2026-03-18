/**
 * ===== PÁGINA: HOME (Inicio) =====
 * Renderiza la página principal con Hero, Quiénes Somos y Stats.
 */

function renderHome() {
  return `
  <div class="fade-in">
    <!-- Hero -->
    <section class="relative min-h-[90vh] md:h-screen flex items-center overflow-hidden bg-[#1F2A44] py-20 md:py-0">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-r from-[#1F2A44]/95 via-[#1F2A44]/60 to-transparent z-10"></div>
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070" class="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom" alt="" />
      </div>
      <div class="container mx-auto px-6 relative z-20">
        <div class="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span class="text-blue-300 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Punto Digital | Gratuito</span>
          <h1 class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mt-4 leading-tight">CHAGUAR<span class="text-white/40">PAMBA</span></h1>
          <p class="text-lg md:text-xl text-blue-100 mt-6 max-w-xl leading-relaxed font-light">
            Transformación Digital para el desarrollo de nuestra comunidad. Conectividad, educación y servicios ciudadanos gratuitos en el corazón de Loja.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-10 md:mt-12">
            <button onclick="navigate('capacitaciones')" class="px-8 py-4 bg-[#00A3E0] text-white font-bold rounded-full hover:bg-white hover:text-[#003087] transition-all flex items-center justify-center shadow-2xl">
              EMPEZAR AHORA ${ic('arrow-right', 'ml-2', 18, 18)}
            </button>
            <button onclick="navigate('sobre-nosotros')" class="px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
              CONOCER MÁS
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Quiénes Somos -->
    <section class="py-16 md:py-24 bg-white/50 backdrop-blur-sm overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div class="animate-in slide-in-from-left duration-700">
            ${sectionTitle('¿Quiénes Somos?', 'Cerrando la brecha digital en Chaguarpamba')}
            <div class="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed">
              <p>El Punto Digital Gratuito Chaguarpamba es un espacio de participación y aprendizaje, que brinda acceso gratuito a Tecnologías de la Información y Comunicación (TIC).</p>
              <p>Trabajamos bajo los lineamientos del Ministerio de Telecomunicaciones (MINTEL) para garantizar que cada ciudadano tenga las herramientas necesarias para prosperar.</p>
            </div>
            <div class="flex flex-wrap gap-6 md:gap-8 mt-10 md:mt-12">
              <div class="flex items-center text-[#003087] font-bold text-sm md:text-base">${ic('check-circle', 'mr-2 md:mr-3 text-[#00A3E0]', 20, 20)} Conectividad</div>
              <div class="flex items-center text-[#003087] font-bold text-sm md:text-base">${ic('check-circle', 'mr-2 md:mr-3 text-[#00A3E0]', 20, 20)} Educación</div>
              <div class="flex items-center text-[#003087] font-bold text-sm md:text-base">${ic('check-circle', 'mr-2 md:mr-3 text-[#00A3E0]', 20, 20)} Servicios</div>
            </div>
          </div>

          <div class="bg-[#F8F9FA]/80 backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-2xl border border-gray-100 animate-in slide-in-from-right duration-700">
            <h3 class="text-xl md:text-2xl font-bold text-[#003087] flex items-center italic mb-6 md:mb-8 uppercase tracking-widest">
              Noticias <span class="ml-4 h-px w-8 md:w-12 bg-gray-300 inline-block"></span>
            </h3>
            <div class="space-y-4 md:space-y-6">
              ${newsData.slice(0, 3).map(item => `
                <div onclick="openNews(${item.id})" class="group relative h-32 md:h-40 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#00A3E0]">
                  <img src="${item.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#003087] via-[#003087]/20 to-transparent z-10"></div>
                  <div class="absolute bottom-0 left-0 p-4 md:p-6 z-20 w-full">
                    <span class="text-[8px] md:text-[9px] font-bold bg-[#00A3E0] text-white px-2 py-1 rounded mb-2 inline-block uppercase tracking-widest">${item.tag}</span>
                    <h4 class="text-white font-bold leading-tight text-xs md:text-sm group-hover:text-blue-200 transition-colors line-clamp-2">${item.title}</h4>
                  </div>
                </div>`).join('')}
            </div>
            <button onclick="navigate('noticias')" class="mt-8 w-full py-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-400 font-bold text-xs uppercase tracking-widest hover:border-[#00A3E0] hover:text-[#00A3E0] transition-all">
              Ver todas las noticias
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="bg-white/60 backdrop-blur-md py-16 md:py-24 border-t border-gray-100">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 text-center">
          <div class="space-y-2"><div class="text-5xl md:text-6xl font-bold text-[#003087]">918</div><p class="text-gray-500 font-bold uppercase text-[10px] md:text-xs tracking-widest">Puntos en Ecuador</p></div>
          <div class="space-y-2"><div class="text-5xl md:text-6xl font-bold text-[#00A3E0]">1.2k+</div><p class="text-gray-500 font-bold uppercase text-[10px] md:text-xs tracking-widest">Usuarios Mes</p></div>
          <div class="space-y-2"><div class="text-5xl md:text-6xl font-bold text-[#003087]">45</div><p class="text-gray-500 font-bold uppercase text-[10px] md:text-xs tracking-widest">Cursos Gratuitos</p></div>
        </div>
      </div>
    </section>
  </div>`;
}
