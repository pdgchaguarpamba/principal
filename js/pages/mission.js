/**
 * ===== PÁGINA: MISIÓN Y VISIÓN =====
 * Renderiza las tarjetas de misión y visión institucional.
 */

function renderMission() {
  return `
  <div class="pt-32 pb-24 px-6 fade-in">
    <div class="container mx-auto">
      ${sectionTitle('Estrategia', 'Misión y Visión', true)}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mt-12 md:mt-16">
        <div class="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-white">
          <div class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#003087] mb-8">${ic('target', '', 32, 32)}</div>
          <h3 class="text-xl md:text-2xl font-bold mb-4 text-[#003087]">Misión Oficial</h3>
          <p class="text-gray-600 leading-relaxed">Garantizar el acceso, uso y apropiación de las Tecnologías de la Información y Comunicación, facilitando servicios y capacitaciones gratuitas para mejorar la calidad de vida de los habitantes de Chaguarpamba, fomentando la innovación y el desarrollo social.</p>
        </div>
        <div class="bg-[#003087]/90 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl text-white">
          <div class="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8">${ic('globe', '', 32, 32)}</div>
          <h3 class="text-xl md:text-2xl font-bold mb-4">Visión 2030</h3>
          <p class="text-blue-100 leading-relaxed">Ser el referente provincial en transformación digital rural, logrando que el 100% de la comunidad posea competencias digitales básicas y que el Punto Digital sea el motor de la economía digital y el gobierno electrónico local.</p>
        </div>
      </div>
    </div>
  </div>`;
}
