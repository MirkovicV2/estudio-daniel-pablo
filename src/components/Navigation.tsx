import { brand, contacts } from '../content/site';
import { stripBase, withBase } from '../utils/paths';
import { Arrow } from './Primitives';
const items = [
  { href: '/servicios/', label: 'Qué hacemos' },
  { href: '/proyectos/deja-vu/', label: 'Nuestro trabajo' },
  { href: '/estudio/', label: 'El estudio' },
];
export function Header({ path }: { path: string }) {
  const currentPath = stripBase(path);
  return (
    <header className="site-header shell">
      <a
        href={withBase('/')}
        className="wordmark"
        aria-label={`${brand.wordmark}, inicio`}
      >
        <span className="wordmark-lockup">
          <img
            className="brand-mark"
            src={`${import.meta.env.BASE_URL}isotipo-puntal.svg`}
            alt=""
          />
          <span>{brand.wordmark}</span>
        </span>
        <span className="wordmark-descriptor">{brand.descriptor}</span>
      </a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {items.map((item) => (
          <a
            key={item.href}
            href={withBase(item.href)}
            aria-current={currentPath === item.href ? 'page' : undefined}
          >
            {item.label}
          </a>
        ))}
        <a
          href={withBase('/contacto/')}
          className="nav-contact"
          aria-current={currentPath === '/contacto/' ? 'page' : undefined}
        >
          Hablemos
          <Arrow diagonal />
        </a>
      </nav>
      <details data-mobile-menu className="mobile-menu">
        <summary aria-label="Abrir o cerrar navegación">
          Menú
          <span className="menu-plus" aria-hidden="true">
            +
          </span>
        </summary>
        <nav aria-label="Navegación móvil">
          {items.map((item) => (
            <a key={item.href} href={withBase(item.href)}>
              {item.label}
            </a>
          ))}
          <a href={withBase('/contacto/')}>
            Hablemos
            <Arrow diagonal />
          </a>
        </nav>
      </details>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer shell">
      <div>
        <a className="footer-wordmark" href={withBase('/')}>
          <img
            className="footer-brand-mark"
            src={`${import.meta.env.BASE_URL}isotipo-puntal.svg`}
            alt=""
          />
          <span>{brand.wordmark}</span>
        </a>
        <p>
          {brand.descriptor}
          <br />
          Diseño, desarrollo y contenido.
        </p>
      </div>
      <nav aria-label="Navegación del pie">
        <a href={withBase('/servicios/')}>Servicios</a>
        <a href={withBase('/estudio/')}>El estudio</a>
        <a href={withBase('/proyectos/deja-vu/')}>Déjà Vu Kebab</a>
        <a href={withBase('/contacto/')}>Contacto</a>
      </nav>
      <div className="footer-people">
        <a href={`mailto:${contacts.daniel.email}`}>
          Escribir a Daniel
          <Arrow diagonal />
        </a>
        <a href={`mailto:${contacts.pablo.email}`}>
          Escribir a Pablo
          <Arrow diagonal />
        </a>
        <a
          href={contacts.pablo.portfolio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio de Pablo
          <Arrow diagonal />
        </a>
      </div>
      <div className="footer-bottom">
        <span>{brand.location}</span>
        <span>Dos especialidades. Un mismo proyecto.</span>
      </div>
    </footer>
  );
}
