/**
 * ===== PÁGINA: CONTACTO =====
 * Renderiza la información de contacto y ubicación.
 */

function renderContact() {
  return `
  <div class="pt-32 pb-24 px-6 fade-in">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-lg border border-white">
          ${sectionTitle('Atención', 'Ponte en Contacto')}
          <div class="space-y-6">
          
            <div class="flex p-5 md:p-6 bg-white/90 rounded-2xl border border-gray-50 items-start">
              ${ic('phone', 'text-[#00A3E0] shrink-0 mr-4 mt-0.5', 24, 24)}
              <div><h5 class="font-bold text-[#003087] text-sm md:text-base">Teléfono / Mail</h5><p class="text-xs md:text-sm text-gray-500"> +593 988 546 853 | pde.loji051.2022@gmail.com</p></div>
            </div>
            <div class="flex p-5 md:p-6 bg-white/90 rounded-2xl border border-gray-50 items-start">
              ${ic('map-pin', 'text-[#00A3E0] shrink-0 mr-4 mt-0.5', 24, 24)}
              <div><h5 class="font-bold text-[#003087] text-sm md:text-base">Dirección</h5><p class="text-xs md:text-sm text-gray-500">Calle 10 de Agosto y San Juan Bautista.</p></div>
            </div>
            <div class="flex p-5 md:p-6 bg-white/90 rounded-2xl border border-gray-50 items-start">
              ${ic('clock', 'text-[#00A3E0] shrink-0 mr-4 mt-0.5', 24, 24)}
              <div><h5 class="font-bold text-[#003087] text-sm md:text-base">Horario</h5><p class="text-xs md:text-sm text-gray-500">Lun-Vie: 07h30 - 11h30 | 12h30 - 16h30</p></div>
            </div>
          </div>
        </div>
        <div class="h-[350px] md:h-[450px] bg-[#E5E7EB] rounded-[2rem] overflow-hidden shadow-2xl relative border-4 md:border-8 border-white">
          <div class="absolute inset-0 bg-blue-50 flex flex-col items-center justify-center text-center p-6">
            ${ic('map-pin', 'mb-4 opacity-20 text-[#003087]', 48, 48)}
            <p class="font-bold text-[#003087] uppercase tracking-widest text-[10px]">Google Maps</p>
            <a href="https://www.google.com/maps/place/Punto+Digital+Gratuito+Chaguarpamba/@-3.8767148,-79.6451027,17z/data=!3m1!4b1!4m6!3m5!1s0x9034bb07737bdd91:0x381f7060f1145398!8m2!3d-3.8767148!4d-79.6451027!16s%2Fg%2F11vwv6hqk7?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="mt-6 px-6 py-3 bg-white text-[#003087] text-[10px] font-bold rounded-full shadow-md uppercase tracking-[0.2em] hover:bg-[#003087] hover:text-white transition-all inline-block">
              Ver Ubicación
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}
