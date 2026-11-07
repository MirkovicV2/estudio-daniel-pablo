import { brand, contacts } from '../content/site';
import { Arrow } from './Primitives';
const items = [
  { href: '/servicios/', label: 'Qué hacemos' },
  { href: '/proyectos/deja-vu/', label: 'Nuestro trabajo' },
  { href: '/estudio/', label: 'El estudio' },
];
export function Header({ path }: { path: string }) {
  return (
    <header className="site-header shell">
      <a href="/" className="wordmark" aria-label={`${brand.wordmark}, inicio`}>
        <span>{brand.wordmark}</span>
        <span className="wordmark-descriptor">{brand.descriptor}</span>
      </a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={path === item.href ? 'page' : undefined}
          >
            {item.label}
          </a>
        ))}
        <a
          href="/contacto/"
          className="nav-contact"
          aria-current={path === '/contacto/' ? 'page' : undefined}
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
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="/contacto/">
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
        <a className="footer-wordmark" href="/">
          {brand.wordmark}
        </a>
        <p>
          {brand.descriptor}
          <br />
          Diseño, desarrollo y contenido.
        </p>
      </div>
      <nav aria-label="Navegación del pie">
        <a href="/servicios/">Servicios</a>
        <a href="/estudio/">El estudio</a>
        <a href="/proyectos/deja-vu/">Déjà Vu Kebab</a>
        <a href="/contacto/">Contacto</a>
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
