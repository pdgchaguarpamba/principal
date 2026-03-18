/**
 * ===== PÁGINA: SERVICIOS =====
 * Renderiza la cuadrícula de servicios ciudadanos gratuitos.
 */

function renderServices() {
  const svs = [
    { icon: 'monitor',      title: 'Internet Libre', desc: 'Investigación escolar, estudios y teletrabajo.' },
    { icon: 'printer',      title: 'Impresiones',    desc: 'Tareas y documentos oficiales gratuitos.' },
    { icon: 'check-circle', title: 'Trámites GOB',   desc: 'Registro Civil, IESS, SRI y antecedentes.' },
    { icon: 'cpu',          title: 'Soporte TIC',    desc: 'Ayuda en dispositivos y software educativo.' },
    { icon: 'book-open',    title: 'Biblioteca',     desc: 'Acceso a miles de recursos pedagógicos.' },
    { icon: 'users',        title: 'Co-working',     desc: 'Espacio para emprendedores y juntas.' }
  ];

  return `
  <div class="pt-32 pb-24 px-6 fade-in">
    <div class="container mx-auto">
      ${sectionTitle('Beneficios','Servicios Ciudadanos',true)}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
        ${svs.map(s=>`
          <div class="group p-6 md:p-8 rounded-2xl border border-white bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <div class="text-[#00A3E0] mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">${ic(s.icon,'',28,28)}</div>
            <h4 class="text-lg md:text-xl font-bold mb-3 text-[#003087]">${s.title}</h4>
            <p class="text-gray-500 text-sm leading-relaxed">${s.desc}</p>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}
