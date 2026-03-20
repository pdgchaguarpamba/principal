/**
 * ===== DATOS DE LA APLICACIÓN =====
 * Aquí se definen todos los datos estáticos que se muestran en la página.
 * Para agregar/editar noticias, cursos o plataformas, modifica estos arrays.
 */

// --- NOTICIAS ---
const newsData = [
  {
    id: 1,
    tag: "Educación",
    title: "Gran Inauguración del Curso de IA para Emprendedores",
    date: "15 de Marzo, 2026",
    summary: "Más de 50 ciudadanos iniciaron su formación en herramientas de Inteligencia Artificial para potenciar sus negocios locales.",
    content: `<p> Chaguarpamba da un paso gigante hacia la modernidad. El Punto Digital Gratuito, en colaboración con el MINTEL, ha dado inicio al primer taller avanzado de IA. Los participantes aprenderán desde generación de contenido hasta automatización de procesos básicos para sus emprendimientos agrícolas y comerciales.</p>
<p>Esta iniciativa forma parte del plan estratégico de digitalización rural que el MINTEL impulsa para este bienio en Chaguarpamba, asegurando conectividad gratuita para todos.</p>`,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    tag: "Infraestructura",
    title: "Actualización de Fibra Óptica en el Punto Digital",
    date: "10 de Marzo, 2026",
    summary: "Se ha triplicado la velocidad de navegación gratuita para todos los usuarios de la cabecera cantonal.",
    content: `<p> Con el objetivo de garantizar una navegación sin interrupciones para los estudiantes que realizan sus exámenes en línea, el Punto Digital ha completado la migración a un nodo de fibra óptica de mayor capacidad. Ahora los usuarios disfrutan de 500Mbps simétricos de forma totalmente gratuita.</p> 
    <p>Esta iniciativa forma parte del plan estratégico de digitalización rural que el MINTEL impulsa para este bienio en Chaguarpamba, asegurando conectividad gratuita para todos.</p> `,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    tag: "Comunidad",
    title: "Entrega de Certificados CISCO a Jóvenes de la Parroquia",
    date: "05 de Marzo, 2026",
    summary: "15 jóvenes completaron con éxito el programa de Ciberseguridad impartido en nuestras instalaciones.",
    content: `<p> La juventud de Chaguarpamba se prepara para los retos del futuro. En una ceremonia presidida por autoridades locales, se hizo entrega de los certificados internacionales de CISCO. Estos jóvenes ahora cuentan con habilidades críticas para el mercado laboral tecnológico actual.</p>
    <p>Esta iniciativa forma parte del plan estratégico de digitalización rural que el MINTEL impulsa para este bienio en Chaguarpamba, asegurando conectividad gratuita para todos.</p> `,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
  }
];

// --- CURSOS PRESENCIALES ---
const presencialCourses = [
  {
    title: "Pintura en Cerámica",
    date: "01 y 02 de Abril",
    time: "Hora: Por definir",
    img: "https://img.freepik.com/foto-gratis/elemento-pintura-manos-primer-plano_23-2148878463.jpg?semt=ais_hybrid&w=740&q=80",
    d: "Aprende técnicas de decoración y pintura sobre piezas de cerámica. Expresa tu creatividad."
  },
  //  {
  //    title: "Dominio de Office 365",
  //    date: "20 de Octubre",
  //    time: "03:00 PM",
  //    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  //    d: "Aprende Word, Excel y PowerPoint desde cero para mejorar tu perfil profesional..."
  //  },
  //  {
  //    title: "Diseño y Marketing",
  //    date: "22 de Octubre",
  //    time: "10:00 AM",
  //    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  //    d: "Crea contenido visual para tus redes sociales usando Canva y estrategias..."
  //  }
];

// --- PLATAFORMAS VIRTUALES ---
const virtualPlatforms = [
  {
    name: "Cisco Networking",
    logo: "https://www.cisco.com/c/dam/assets/about/cisco-logo.png",
    desc: "Formación en Ciberseguridad y Redes de datos con aval internacional.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    link: "https://www.solytech.info/cursosgratis"
  },
  {
    name: "MINTEL Capacita",
    logo: "https://www.telecomunicaciones.gob.ec/wp-content/uploads/2019/08/MINTEL.png",
    desc: "Plataforma oficial de Educación Digital Nacional con certificación gratuita.",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    link: "https://educaciondigital.mintel.gob.ec"
  },
  {
    name: "ChildFund",
    logo: "https://www.childfund.org/themes/custom/childfund/logo.svg",
    desc: "Cursos de Protección Infantil y seguridad Digital para padres e hijos.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    link: "https://miescuelapositiva.org/ecuador/login/index.php"
  },
  {
    name: "Capacitate para el Empleo",
    logo: "https://capacitateparaelempleo.org/sites/default/files/logo-cpe.png",
    desc: "Plataforma oficial de Educación Digital Nacional con certificación gratuita.",
    img: "https://fundacioncarlosslim.org/wp-content/uploads/2023/04/Capacitate-para-el-empleoimg.jpg",
    link: "https://capacitateparaelempleo.org/"
  }
];
