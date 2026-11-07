export type EditorialStatus =
  'verificado' | 'facilitado-por-daniel' | 'pendiente';
export type SourceId =
  | 'documento-daniel'
  | 'linkedin-daniel'
  | 'linkedin-pablo'
  | 'portfolio-pablo'
  | 'caso-deja-vu'
  | 'web-deja-vu';
export interface Editorial {
  status: EditorialStatus;
  approved: boolean;
  sources: SourceId[];
}
export const canPublish = (item: { editorial: Editorial }) =>
  item.editorial.approved && item.editorial.status !== 'pendiente';
export const confirmed: Editorial = {
  status: 'facilitado-por-daniel',
  approved: true,
  sources: ['documento-daniel'],
};
export const sources: Record<SourceId, { label: string; url?: string }> = {
  'documento-daniel': {
    label:
      'Prompts_Codex_Daniel_Pablo.md: alcance, servicios y confirmación directa de Daniel el 7 de noviembre de 2026.',
  },
  'linkedin-daniel': {
    label: 'Trayectoria de Daniel contrastada en el documento aportado',
    url: 'https://es.linkedin.com/in/daniel-doral-ignjatovic',
  },
  'linkedin-pablo': {
    label:
      'Trayectoria de Pablo contrastada en el documento aportado; puestos desde enero de 2024 en paralelo',
    url: 'https://www.linkedin.com/in/pablelas/',
  },
  'portfolio-pablo': {
    label: 'Portfolio existente de Pablo',
    url: 'https://pablelas.es/',
  },
  'caso-deja-vu': {
    label: 'Caso publicado por Pablo, encargo profesional de 2026',
    url: 'https://pablelas.es/proyectos/deja-vu',
  },
  'web-deja-vu': {
    label: 'Web del negocio facilitada en el documento',
    url: 'https://bar-dejavu-kebab.es/',
  },
};
