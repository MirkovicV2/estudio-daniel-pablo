import { canPublish, confirmed, type Editorial } from './editorial';

const employmentEditorial: Editorial = {
  status: 'verificado',
  approved: true,
  sources: ['linkedin-daniel'],
};

export const danielProfile = {
  summary:
    'Desarrollo aplicaciones web y conecto interfaces, backend y datos. Trabajo principalmente con Java, Spring y Angular, con experiencia en modernización de software y digitalización de procesos.',
  approach:
    'En el estudio aporto la parte técnica: entender qué necesita el negocio, definir el alcance y construir o conectar las herramientas que encajan. El análisis de casos de uso y la conversación con el cliente forman parte de mi trabajo.',
  capabilities: [
    'Java',
    'Spring',
    'Angular',
    'APIs REST',
    'Oracle / JPA',
    'Integraciones',
    'Análisis de casos de uso',
  ],
  editorial: confirmed,
};

export const danielExperience = [
  {
    company: 'Babel',
    role: 'Software Engineer FullStack',
    period: 'Enero de 2026–actualidad',
    contribution:
      'Participo en las aplicaciones de gestión de expedición del DNI 5 de la Policía Nacional y de DNI en el móvil. Es una colaboración full stack en curso dentro de un equipo.',
    editorial: employmentEditorial,
    contributionEditorial: confirmed,
  },
  {
    company: 'Minsait / Indra',
    role: 'Programador full stack',
    period: 'Febrero de 2024–enero de 2026',
    contribution:
      'Trabajé en mantenimiento y evolución de aplicaciones del Estado. Renové completamente el frontend y el backend de una aplicación de Hacienda.',
    editorial: employmentEditorial,
    contributionEditorial: confirmed,
  },
  {
    company: 'ALTEN SPAIN',
    role: 'Analista Programador FullStack-Java - Angular',
    period: 'Junio de 2022–enero de 2024',
    contribution:
      'Participé desde el inicio en una aplicación de gestión de datos para CIEMAT. Trabajé con el cliente en casos de uso y en la digitalización de procesos de papel y Excel.',
    editorial: employmentEditorial,
    contributionEditorial: confirmed,
  },
  {
    company: 'Redsys Servicios de Procesamiento S. L.',
    role: 'Desarrollador FullStack Java-Angular',
    period: 'Septiembre de 2021–junio de 2022',
    contribution:
      'Participé en la renovación de una aplicación bancaria, contribuyendo a la migración de funcionalidades de COBOL a Java dentro del equipo.',
    editorial: employmentEditorial,
    contributionEditorial: confirmed,
  },
].filter(canPublish);
