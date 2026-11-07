export const brand = {
  name: 'Puntal — Estudio digital',
  wordmark: 'Puntal',
  descriptor: 'Estudio digital',
  provisional: true,
  location: 'Rivas Vaciamadrid · Madrid · En remoto',
  headline: 'Diseño claro. Tecnología bien conectada.',
  description:
    'Un estudio digital de Daniel Doral y Pablo Castillo. Unimos diseño, desarrollo web y herramientas digitales para ayudar a los negocios a presentar mejor lo que hacen y simplificar procesos.',
};
export const contacts = {
  daniel: {
    name: 'Daniel Doral Ignjatovic',
    shortName: 'Daniel Doral',
    email: 'danieldoral7@gmail.com',
    linkedin: 'https://es.linkedin.com/in/daniel-doral-ignjatovic',
    portfolio:
      import.meta.env?.PUBLIC_DANIEL_PORTFOLIO_URL?.trim() || undefined,
  },
  pablo: {
    name: 'Pablo Castillo Flores',
    shortName: 'Pablo Castillo',
    email: 'pablocastillo0002@gmail.com',
    linkedin: 'https://www.linkedin.com/in/pablelas/',
    portfolio: 'https://pablelas.es/',
  },
};
export const studioSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: brand.name,
  description: brand.description,
  areaServed: [
    { '@type': 'Place', name: 'Rivas Vaciamadrid' },
    { '@type': 'Place', name: 'Madrid' },
  ],
  founder: [contacts.daniel, contacts.pablo].map((person) => ({
    '@type': 'Person',
    name: person.name,
    email: `mailto:${person.email}`,
    sameAs: [person.linkedin, ...(person.portfolio ? [person.portfolio] : [])],
  })),
};
