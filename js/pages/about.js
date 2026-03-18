/**
 * ===== PÁGINA: SOBRE NOSOTROS =====
 * Renderiza la sección institucional con historia y beneficiarios.
 */

function renderAbout() {
  return `
  <div class="pt-32 pb-24 px-6 fade-in">
    <div class="container mx-auto max-w-4xl bg-white/80 backdrop-blur-md p-8 sm:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl">
      ${sectionTitle('Institución', 'Sobre Nosotros')}
      <div class="prose-body text-gray-600 space-y-6 text-base md:text-lg">
        <p>Los Puntos Digitales Gratuitos son un programa del Ministerio de Telecomunicaciones y de la Sociedad de la Información (MINTEL) que constituye una red nacional de centros tecnológicos.</p>
        <p>En <strong>Chaguarpamba</strong>, nuestro centro se ha convertido en el núcleo de la alfabetización digital, permitiendo que niños, jóvenes y adultos mayores se conecten con el mundo, realicen trámites gubernamentales y accedan a educación de calidad mundial sin costo alguno.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 md:my-12">
          <div class="p-6 md:p-8 bg-white/90 rounded-2xl border-l-4 border-[#003087] shadow-sm">
            <h4 class="font-bold text-[#003087] mb-2 uppercase text-sm tracking-widest">Historia</h4>
            <p class="text-sm leading-relaxed text-gray-500">Iniciamos nuestras operaciones como Infocentro en 2012, evolucionando hacia un Punto Digital Gratuito de última generación para satisfacer las nuevas demandas tecnológicas de la provincia de Loja.</p>
          </div>
          <div class="p-6 md:p-8 bg-white/90 rounded-2xl border-l-4 border-[#00A3E0] shadow-sm">
            <h4 class="font-bold text-[#00A3E0] mb-2 uppercase text-sm tracking-widest">Beneficiarios</h4>
            <p class="text-sm leading-relaxed text-gray-500">Nuestros principales usuarios son estudiantes de todos los niveles, emprendedores locales, agricultores que buscan información técnica y adultos mayores en búsqueda de servicios públicos.</p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}
