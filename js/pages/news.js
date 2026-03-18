/**
 * ===== PÁGINA: NOTICIAS =====
 * Renderiza la lista de noticias y la vista de detalle.
 */

/** Abre el detalle de una noticia por su ID */
function openNews(id) {
  currentNews = newsData.find(n => n.id === id);
  currentPage = 'noticia-detalle';
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/** Renderiza la cuadrícula de todas las noticias */
function renderNews() {
  return `
  <div class="pt-32 pb-24 px-6 fade-in">
    <div class="container mx-auto">
      ${sectionTitle('Actualidad','Noticias Destacadas',true)}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        ${newsData.map(item=>`
          <div onclick="openNews(${item.id})" class="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-100 flex flex-col">
            <div class="h-48 md:h-56 overflow-hidden relative">
              <img src="${item.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
              <div class="absolute top-4 left-4"><span class="bg-[#003087] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">${item.tag}</span></div>
            </div>
            <div class="p-6 md:p-8 flex-grow flex flex-col">
              <div class="flex items-center text-gray-400 text-xs mb-4">${ic('calendar','mr-2',14,14)} ${item.date}</div>
              <h3 class="text-lg md:text-xl font-bold text-[#003087] mb-4 group-hover:text-[#00A3E0] transition-colors">${item.title}</h3>
              <p class="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">${item.summary}</p>
              <div class="mt-auto pt-4 flex items-center text-[#003087] font-bold text-xs uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                Leer más ${ic('arrow-right','ml-2',16,16)}
              </div>
            </div>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}

/** Renderiza el detalle de una noticia individual */
function renderNewsDetail(news) {
  if (!news) return '';
  return `
  <div class="pt-32 pb-24 px-4 sm:px-6 fade-in">
    <div class="container mx-auto max-w-4xl bg-white/80 backdrop-blur-md p-6 sm:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl">
      <button onclick="navigate('noticias')" class="flex items-center text-gray-400 hover:text-[#003087] font-bold text-[10px] uppercase tracking-widest mb-8 transition-colors">
        ${ic('chevron-left','mr-2',16,16)} Volver
      </button>
      <span class="bg-[#00A3E0] text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">${news.tag}</span>
      <h1 class="text-3xl md:text-5xl font-bold text-[#003087] mt-6 leading-tight">${news.title}</h1>
      <div class="flex flex-wrap items-center gap-6 text-gray-400 text-xs my-8 border-y py-4 border-gray-100">
        <div class="flex items-center">${ic('calendar','mr-2',16,16)} ${news.date}</div>
        <div class="flex items-center">${ic('clock','mr-2',16,16)} 3 min</div>
      </div>
      <img src="${news.image}" class="w-full h-auto max-h-[500px] object-cover rounded-[1.5rem] md:rounded-[2rem] shadow-2xl mb-12" alt="" />
      <div class="text-gray-600 text-base md:text-xl leading-relaxed space-y-6">
        <p class="font-bold text-[#1F2A44] italic border-l-4 border-[#00A3E0] pl-6">${news.summary}</p>
        <p>${news.content}</p>
      </div>
    </div>
  </div>`;
}
