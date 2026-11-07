export const brand = {
  name: 'Daniel & Pablo — Estudio digital',
  wordmark: 'Daniel & Pablo',
  descriptor: 'Estudio digital',
  provisional: true,
  location: 'Rivas Vaciamadrid · Madrid · En remoto',
  headline: 'Tu negocio, bien presentado y mejor conectado',
  description:
    'Unimos diseño, desarrollo y contenido para crear tu web y conectar los procesos que necesita tu negocio.',
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
