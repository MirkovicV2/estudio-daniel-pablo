import { brand, contacts } from '../content/site';
import { services } from '../content/services';
import { dejaVu } from '../content/work';
import { Action, Arrow, Eyebrow } from './Primitives';
import { ConnectionGraphic, DejaGraphic } from './Graphics';
import { withBase } from '../utils/paths';
import {
  ContactCTA,
  Examples,
  MethodSection,
  ServicesPreview,
  TeamSection,
  WorkSection,
} from './Sections';

export function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-heading">
          <Eyebrow>
            <span className="studio-star" aria-hidden="true">
              ✳
            </span>{' '}
            Dos especialidades. Un mismo proyecto.
          </Eyebrow>
          <h1>
            Tu negocio,
            <br />
            <em>bien presentado.</em>
            <br />
            <span>Mejor conectado.</span>
          </h1>
        </div>
        <div className="hero-side">
          <ConnectionGraphic />
        </div>
        <div className="hero-copy">
          <p>{brand.description}</p>
          <div className="hero-actions">
            <Action href={withBase('/contacto/')}>Hablemos de tu idea</Action>
            <a className="text-link" href={withBase('/proyectos/deja-vu/')}>
              Ver nuestro trabajo
              <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="hero-location">
          <span>{brand.location}</span>
          <a href="#trabajo" aria-label="Ir al trabajo seleccionado">
            Explorar
            <Arrow />
          </a>
        </div>
      </section>
      <WorkSection />
      <ServicesPreview />
      <TeamSection />
      <MethodSection />
      <ContactCTA />
    </>
  );
}

export function ServicesPage() {
  return (
    <>
      <section className="page-intro shell">
        <Eyebrow>Servicios / Cada negocio tiene su punto de partida</Eyebrow>
        <h1>
          De lo que necesitas
          <br />
          <em>a lo que funciona.</em>
        </h1>
        <p>
          Unimos presencia de marca, contenido y herramientas. Definimos contigo
          el alcance y elegimos la solución que encaja con tu forma de trabajar.
        </p>
      </section>
      <section
        className="shell service-details-section"
        aria-label="Nuestros servicios"
      >
        {services.map((service, index) => (
          <details
            className="service-detail"
            id={service.id}
            key={service.id}
            open={index === 0}
            data-reveal
          >
            <summary>
              <span className="service-number">{service.number}</span>
              <span>
                <span className="service-kicker">{service.short}</span>
                <span className="service-heading">{service.title}</span>
              </span>
              <span className="accordion-plus" aria-hidden="true">
                +
              </span>
            </summary>
            <div className="service-detail-body">
              <div>
                <p>{service.description}</p>
                {service.feasibility && (
                  <span className="feasibility">
                    Bajo estudio de viabilidad
                  </span>
                )}
                <ul>
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <aside>
                <Eyebrow>Ejemplo de solución</Eyebrow>
                <p>{service.example}</p>
                {service.note && <p className="service-note">{service.note}</p>}
                <a className="text-link" href={withBase('/contacto/')}>
                  Hablar de esta necesidad
                  <Arrow diagonal />
                </a>
              </aside>
            </div>
          </details>
        ))}
      </section>
      <Examples />
      <MethodSection />
      <ContactCTA />
    </>
  );
}

export function StudioPage() {
  return (
    <>
      <section className="page-intro shell">
        <Eyebrow>{brand.wordmark} / El estudio</Eyebrow>
        <h1>
          Dos especialidades.
          <br />
          <em>Una misma dirección.</em>
        </h1>
        <div className="intro-columns">
          <p className="large-copy">
            Que lo que se ve y lo que funciona hablen el mismo idioma.
          </p>
          <div>
            <p>
              Estamos preparando un estudio digital desde Rivas Vaciamadrid y
              Madrid, abierto a proyectos en remoto. Trabajamos a partir de una
              idea sencilla: el diseño y el desarrollo se entienden mejor cuando
              se piensan juntos.
            </p>
            <p>
              Sumamos experiencia profesional individual y un primer caso
              comercial compartido: Déjà Vu Kebab. Cada propuesta parte de
              entender el negocio y definir qué necesita.
            </p>
          </div>
        </div>
      </section>
      <TeamSection detailed />
      <MethodSection />
      <section className="section shell studio-work" data-reveal>
        <Eyebrow>Una colaboración real</Eyebrow>
        <h2>
          Ya hemos
          <br />
          <em>trabajado juntos.</em>
        </h2>
        <p>
          En Déjà Vu Kebab unimos desarrollo y modernización web con diseño,
          fotografía, cartelería, vídeo y puesta en marcha de Instagram.
        </p>
        <Action href={withBase('/proyectos/deja-vu/')}>
          Conocer el caso de Déjà Vu
        </Action>
      </section>
      <ContactCTA />
    </>
  );
}

export function DejaVuPage() {
  return (
    <>
      <article>
        <header className="case-intro shell">
          <a className="back-link" href={withBase('/#trabajo')}>
            ← Volver al trabajo seleccionado
          </a>
          <Eyebrow>
            {dejaVu.location} / Encargo profesional / {dejaVu.period}
          </Eyebrow>
          <h1>
            Déjà Vu Kebab.
            <br />
            <em>De lo visual a la web.</em>
          </h1>
          <p>{dejaVu.intro}</p>
          <dl className="case-meta">
            <div>
              <dt>Desarrollo</dt>
              <dd>Daniel Doral</dd>
            </div>
            <div>
              <dt>Diseño y contenido</dt>
              <dd>Pablo Castillo</dd>
            </div>
            <div>
              <dt>Ámbito</dt>
              <dd>Web · Diseño · Fotografía · Vídeo</dd>
            </div>
          </dl>
        </header>
        <figure className="case-cover shell">
          <DejaGraphic wide />
          <figcaption>
            Composición tipográfica original para presentar el caso.
          </figcaption>
        </figure>
        <div className="case-body shell">
          <aside className="case-sidebar">
            <Eyebrow>Déjà Vu Kebab</Eyebrow>
            <span>
              Un trabajo conjunto
              <br />
              en Rivas Vaciamadrid.
            </span>
            <a href="#contexto">El contexto</a>
            <a href="#aportacion">Nuestra aportación</a>
            <a href="#entregables">Los entregables</a>
            <a href="#referencias">Explorar el trabajo</a>
          </aside>
          <div className="case-story">
            <section id="contexto" data-reveal>
              <Eyebrow number="01">El contexto</Eyebrow>
              <h2>
                Un encargo.
                <br />
                <em>Dos miradas.</em>
              </h2>
              <p>{dejaVu.context}</p>
              <p>
                El trabajo conectó la presencia web del negocio con su
                presentación visual y sus materiales de comunicación.
              </p>
            </section>
            <section id="aportacion" data-reveal>
              <Eyebrow number="02">Nuestra aportación</Eyebrow>
              <h2>Cada uno, en su terreno.</h2>
              <div className="contribution">
                <span>Daniel / Desarrollo</span>
                <p>{dejaVu.daniel}</p>
              </div>
              <div className="contribution">
                <span>Pablo / Diseño y contenido</span>
                <p>{dejaVu.pablo}</p>
              </div>
            </section>
            <section id="entregables" data-reveal>
              <Eyebrow number="03">El resultado entregado</Eyebrow>
              <h2>
                Una web.
                <br />
                <em>Y lo que la acompaña.</em>
              </h2>
              <ul className="editorial-list">
                {dejaVu.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section id="referencias" data-reveal>
              <Eyebrow number="04">Explorar el trabajo</Eyebrow>
              <h2>El proyecto, más de cerca.</h2>
              <div className="case-references">
                <Action href={dejaVu.website} external>
                  Visitar la web de Déjà Vu
                </Action>
                <a
                  className="text-link"
                  href={dejaVu.designCase}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver el caso de diseño de Pablo
                  <Arrow diagonal />
                </a>
              </div>
            </section>
          </div>
        </div>
      </article>
      <ContactCTA />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <section className="page-intro shell contact-page">
        <Eyebrow>El primer paso es hablarlo</Eyebrow>
        <h1>
          Cuéntanos qué
          <br />
          <em>necesita tu negocio.</em>
        </h1>
        <div className="contact-intro">
          <p>
            Cuéntanos a qué se dedica tu negocio, qué quieres mejorar y cómo
            trabajas ahora. Te leeremos y hablaremos del siguiente paso.
          </p>
          <span>{brand.location}</span>
        </div>
        <div className="contact-people">
          <article>
            <Eyebrow>Web, desarrollo e integraciones</Eyebrow>
            <h2>Escribe a Daniel.</h2>
            <a
              className="contact-email"
              href={`mailto:${contacts.daniel.email}`}
            >
              {contacts.daniel.email}
              <Arrow diagonal />
            </a>
            <p>
              Para hablar de tu web, conectar herramientas o plantear una
              necesidad técnica.
            </p>
            <Action href={`mailto:${contacts.daniel.email}`}>
              Abrir correo para Daniel
            </Action>
          </article>
          <article>
            <Eyebrow>Diseño, marca y contenido</Eyebrow>
            <h2>Escribe a Pablo.</h2>
            <a
              className="contact-email"
              href={`mailto:${contacts.pablo.email}`}
            >
              {contacts.pablo.email}
              <Arrow diagonal />
            </a>
            <p>
              Para hablar de identidad visual, fotografía, vídeo o materiales
              para tu negocio.
            </p>
            <Action href={`mailto:${contacts.pablo.email}`}>
              Abrir correo para Pablo
            </Action>
          </article>
        </div>
      </section>
    </>
  );
}

export function NotFound() {
  return (
    <section className="page-intro shell error-page">
      <Eyebrow>404 / Página no encontrada</Eyebrow>
      <h1>
        Esta ruta
        <br />
        <em>no lleva a ningún sitio.</em>
      </h1>
      <p>
        El proyecto puede empezar por otro lugar: vuelve al inicio o cuéntanos
        qué necesita tu negocio.
      </p>
      <div className="hero-actions">
        <Action href={withBase('/')}>Volver al inicio</Action>
        <Action href={withBase('/contacto/')} secondary>
          Contactar
        </Action>
      </div>
    </section>
  );
}
