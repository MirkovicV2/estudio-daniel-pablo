import { confirmed, type Editorial } from './editorial';
export const dejaVu = {
  title: 'Déjà Vu Kebab',
  location: 'Rivas Vaciamadrid',
  period: '2026',
  website: 'https://bar-dejavu-kebab.es/',
  designCase: 'https://pablelas.es/proyectos/deja-vu',
  intro:
    'Diseño, contenido y desarrollo web para un negocio local. Un encargo profesional en el que nuestras dos especialidades trabajaron juntas.',
  context:
    'Déjà Vu Kebab es un negocio de Rivas Vaciamadrid. El encargo pagado reunió el desarrollo y la modernización de su web con el diseño y la producción de materiales visuales.',
  daniel: 'Desarrollo y modernización de la web.',
  pablo:
    'Diseño, fotografía, cartelería, vídeos promocionales y puesta en marcha de Instagram.',
  deliverables: [
    'Web desarrollada y modernizada.',
    'Diseño y materiales de cartelería.',
    'Fotografías y vídeos promocionales.',
    'Puesta en marcha de Instagram.',
  ],
  editorial: {
    ...confirmed,
    sources: ['documento-daniel', 'caso-deja-vu', 'web-deja-vu'],
  } satisfies Editorial,
};
