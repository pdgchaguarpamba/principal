/**
 * ===== PÁGINA: SERVICIOS =====
 * Renderiza la cuadrícula de servicios ciudadanos gratuitos.
 */

function renderServices() {
  const svs = [
    { icon: 'monitor', title: 'Acceso a Internet', desc: 'Navegación libre y gratuita para investigación escolar, estudios universitarios y teletrabajo.' },
    { icon: 'printer', title: 'Impresiones y Escaneo', desc: 'Servicio gratuito para tareas escolares y tramites requeridos por la ciudadanía.' },
    { icon: 'check-circle', title: 'Gobierno en Línea', desc: 'Asesoría para obtener turnos del Registro Civil, certificados de antecedentes, IESS, SRI, Contraloría y otros.' },
    { icon: 'cpu', title: 'Soporte TIC', desc: 'Apoyo a ciudadanos en el uso de herramientas digitales, correo electrónico y dispositivos móviles.' },
    { icon: 'book-open', title: 'Biblioteca Digital', desc: 'Acceso a miles de recursos educativos, libros digitales y plataformas de investigación científica.' },
    { icon: 'users', title: 'Espacio Co-working', desc: 'Áreas equipadas para reuniones de emprendedores, capacitaciones grupales y juntas comunitarias.' }
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
