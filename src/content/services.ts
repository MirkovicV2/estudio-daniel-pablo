import { canPublish, confirmed, type Editorial } from './editorial';

export interface Service {
  id: string;
  number: string;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  example: string;
  note?: string;
  feasibility?: boolean;
  editorial: Editorial;
}
const serviceContent: Service[] = [
  {
    id: 'presencia-digital',
    number: '01',
    title: 'Que tu negocio se vea bien.',
    short: 'Presencia digital',
    description:
      'Una web clara y una identidad visual que ayuden a entender quién eres, qué ofreces y cómo contactar contigo. Diseñamos el conjunto a partir de lo que necesita tu negocio.',
    deliverables: [
      'Web corporativa, catálogo o carta digital.',
      'Diseño de marca y materiales básicos de presentación.',
      'Fotografía de producto o del local, según el alcance acordado.',
      'Información y vías de contacto fáciles de encontrar.',
    ],
    example:
      'Un restaurante que necesita presentar su local, su carta y sus vías de contacto.',
    editorial: confirmed,
  },
  {
    id: 'contenido-promocion',
    number: '02',
    title: 'Que lo que haces se entienda.',
    short: 'Contenido y promoción',
    description:
      'Damos forma a los materiales que cuentan lo que haces. Desde una pieza de cartelería hasta un vídeo o un conjunto de contenidos para un lanzamiento.',
    deliverables: [
      'Cartelería y piezas gráficas.',
      'Vídeo, motion y contenido visual.',
      'Materiales de lanzamiento para redes.',
      'Creación y configuración de perfiles cuando forme parte del proyecto.',
    ],
    example:
      'Una empresa de reformas que necesita presentar sus proyectos con fotografías, vídeo y piezas para compartir.',
    note: 'La creación de materiales y la puesta en marcha de perfiles tienen un alcance distinto a la gestión mensual de redes, que se acuerda por separado.',
    editorial: confirmed,
  },
  {
    id: 'gestion-integraciones',
    number: '03',
    title: 'Que tus herramientas se conecten.',
    short: 'Gestión e integraciones',
    description:
      'Estudiamos cómo recibes solicitudes, organizas citas o trabajas con pedidos. Elegimos una herramienta existente o planteamos un desarrollo a medida según el caso.',
    deliverables: [
      'Formularios y recepción de solicitudes.',
      'Integración con herramientas de reservas, citas o pedidos.',
      'Paneles y conexión entre herramientas.',
      'Integración con herramientas de facturación adecuadas al caso y pasarelas de pago externas.',
    ],
    example:
      'Una peluquería que necesita organizar citas y estudiar cómo enviar recordatorios con sus herramientas.',
    note: 'La solución y su alcance se definen con cada negocio. Las integraciones de pago se realizan mediante pasarelas externas.',
    editorial: confirmed,
  },
  {
    id: 'automatizacion',
    number: '04',
    title: 'Que algunas tareas pesen menos.',
    short: 'Automatización y asistentes',
    description:
      'Exploramos qué tareas repetitivas se pueden reducir y qué sistemas conviene conectar. Los asistentes de voz vinculados a reservas o pedidos se plantean como proyectos bajo estudio de viabilidad.',
    deliverables: [
      'Análisis del proceso y de las herramientas disponibles.',
      'Estudio de integraciones y automatizaciones posibles.',
      'Valoración de asistentes de voz conectados a reservas o pedidos.',
      'Definición del alcance, las limitaciones y el coste antes de desarrollar.',
    ],
    example:
      'Un restaurante que quiere estudiar si un asistente puede recoger solicitudes y conectarlas con su herramienta de pedidos.',
    feasibility: true,
    note: 'Cada proyecto requiere estudiar su viabilidad. La propuesta concreta se presenta después de entender el proceso y sus límites.',
    editorial: confirmed,
  },
  {
    id: 'soporte',
    number: '05',
    title: 'Que el proyecto pueda evolucionar.',
    short: 'Soporte y evolución',
    description:
      'Una vez entregado el trabajo, podemos acordar mantenimiento y cambios para acompañar nuevas necesidades del negocio.',
    deliverables: [
      'Mantenimiento con alcance a presupuestar.',
      'Cambios de contenido y evolución de la web.',
      'Mejoras y ajustes de las integraciones.',
      'Seguimiento del trabajo contratado.',
    ],
    example:
      'Un negocio que necesita actualizar su catálogo o incorporar nuevas solicitudes a una web existente.',
    note: 'El alcance, los tiempos de atención y las condiciones de seguimiento se acuerdan en la propuesta de cada proyecto.',
    editorial: confirmed,
  },
];
export const services = serviceContent.filter(canPublish);

export const solutionExamples = [
  {
    sector: 'Restauración',
    title: 'Tu carta, a mano.',
    text: 'Web, carta y presentación del local. Si necesitas pedidos, estudiamos qué herramienta encaja con tu forma de trabajar.',
    symbol: '↗',
  },
  {
    sector: 'Peluquerías',
    title: 'Citas mejor organizadas.',
    text: 'Una presencia clara y conexión con una herramienta de citas y recordatorios, según el proyecto.',
    symbol: '◎',
  },
  {
    sector: 'Reformas',
    title: 'Tu trabajo, bien mostrado.',
    text: 'Un espacio para presentar proyectos y recibir solicitudes con la información que necesitas.',
    symbol: '⊞',
  },
];

export const method = [
  {
    title: 'Entender',
    text: 'Hablamos de tu negocio, de lo que necesitas y de cómo trabajas ahora.',
  },
  {
    title: 'Definir',
    text: 'Acordamos el alcance, los entregables y el presupuesto antes de empezar.',
  },
  {
    title: 'Crear',
    text: 'Diseñamos y desarrollamos, conectando la parte visual con la funcional.',
  },
  {
    title: 'Entregar',
    text: 'Probamos el trabajo y te acompañamos en la entrega de lo acordado.',
  },
  {
    title: 'Evolucionar',
    text: 'Si lo necesitas, definimos el mantenimiento y los siguientes cambios.',
  },
];
