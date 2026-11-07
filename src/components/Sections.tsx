import { brand, contacts } from '../content/site';
import { services, method, solutionExamples } from '../content/services';
import { dejaVu } from '../content/work';
import { canPublish } from '../content/editorial';
import { Action, Arrow, Eyebrow } from './Primitives';
import { DejaGraphic } from './Graphics';

export function WorkSection() {
  if (!canPublish(dejaVu)) return null;
  return (
    <section className="section shell work-section" id="trabajo">
      <div className="section-heading heading-split" data-reveal>
        <div>
          <Eyebrow number="01">Trabajo seleccionado</Eyebrow>
          <h2>
            Un negocio local.
            <br />
            <em>Un trabajo conjunto.</em>
          </h2>
        </div>
        <p>
          Lo visual y lo funcional se encuentran en nuestro encargo para Déjà Vu
          Kebab.
        </p>
      </div>
      <a className="work-feature" href="/proyectos/deja-vu/" data-reveal>
        <div className="work-art">
          <DejaGraphic />
        </div>
        <div className="work-summary">
          <span className="work-category">
            WEB + IDENTIDAD VISUAL + CONTENIDO
          </span>
          <h3>{dejaVu.title}</h3>
          <p>{dejaVu.intro}</p>
          <span className="work-place">
            {dejaVu.location} · Encargo profesional · {dejaVu.period}
          </span>
          <span className="text-link">
            Conocer el proyecto
            <Arrow diagonal />
          </span>
        </div>
      </a>
    </section>
  );
}

export function ServicesPreview() {
  return (
    <section className="section shell services-preview" id="servicios">
      <div className="section-heading heading-split" data-reveal>
        <div>
          <Eyebrow number="02">Qué podemos hacer</Eyebrow>
          <h2>
            Lo que necesitas.
            <br />
            <em>Con las piezas adecuadas.</em>
          </h2>
        </div>
        <p>
          Empezamos por tu negocio. Después decidimos qué diseñar, qué construir
          y qué conectar.
        </p>
      </div>
      <div className="service-rows">
        {services.map((service) => (
          <a
            href={`/servicios/#${service.id}`}
            className="service-row"
            key={service.id}
            data-reveal
          >
            <span className="service-number">{service.number}</span>
            <h3>
              {service.short}
              {service.feasibility && (
                <span className="feasibility">Estudio de viabilidad</span>
              )}
            </h3>
            <p>{service.title}</p>
            <Arrow diagonal />
          </a>
        ))}
      </div>
      <a className="text-link service-all" href="/servicios/">
        Explorar servicios y ejemplos
        <Arrow />
      </a>
    </section>
  );
}

export function TeamSection({ detailed = false }: { detailed?: boolean }) {
  return (
    <section
      className={`section shell team-section ${detailed ? 'team-detailed' : ''}`}
      id="equipo"
    >
      <div className="section-heading heading-split" data-reveal>
        <div>
          <Eyebrow number="03">El equipo</Eyebrow>
          <h2>
            Unimos lo que
            <br />
            <em>cada uno hace mejor.</em>
          </h2>
        </div>
        <p>
          Daniel desarrolla. Pablo diseña. Trabajamos juntos para que cada pieza
          forme parte del mismo proyecto.
        </p>
      </div>
      <div className="team-grid">
        <article className="team-person person-daniel" data-reveal>
          <span className="person-mark" aria-hidden="true">
            {'{d}'}
          </span>
          <Eyebrow>Desarrollo & conexiones</Eyebrow>
          <h3>{contacts.daniel.shortName}</h3>
          <p>
            Desarrollo full stack, web, backend, APIs e integraciones. Aporto
            experiencia en modernización de aplicaciones y digitalización de
            procesos.
          </p>
          {detailed && (
            <p>
              Mi trayectoria profesional incluye software bancario, gestión de
              datos para CIEMAT y aplicaciones de la Administración. Esa
              experiencia individual es la base técnica que aporto al estudio.
            </p>
          )}
          <a className="text-link" href="/equipo/daniel/">
            Conocer a Daniel
            <Arrow diagonal />
          </a>
        </article>
        <article className="team-person person-pablo" data-reveal>
          <span className="person-mark" aria-hidden="true">
            p*
          </span>
          <Eyebrow>Diseño & contenido</Eyebrow>
          <h3>{contacts.pablo.shortName}</h3>
          <p>
            Diseño multimedia y gráfico, branding, motion, fotografía y vídeo.
            Una mirada visual que conecta identidad, contenido y comunicación.
          </p>
          {detailed && (
            <>
              <p>
                Especializado en motion, branding y postproducción, con
                experiencia individual en campañas aeroportuarias, adaptación
                retail y coordinación con clientes.
              </p>
              <p>Grado en Diseño Gráfico y Multimedia en UDIT, 2018–2025.</p>
            </>
          )}
          <a
            className="text-link"
            href={contacts.pablo.portfolio}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver portfolio de Pablo
            <Arrow diagonal />
          </a>
        </article>
      </div>
      {!detailed && (
        <a className="text-link team-more" href="/estudio/">
          Así trabajamos juntos
          <Arrow />
        </a>
      )}
    </section>
  );
}

export function MethodSection() {
  return (
    <section className="section method-section">
      <div className="shell">
        <div className="section-heading" data-reveal>
          <Eyebrow number="04">Cómo trabajamos</Eyebrow>
          <h2>
            Primero, entender.
            <br />
            <em>Después, dar forma.</em>
          </h2>
        </div>
        <ol className="method-list">
          {method.map((step, index) => (
            <li key={step.title} data-reveal>
              <span className="method-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Examples() {
  return (
    <section className="section shell examples-section">
      <div className="section-heading" data-reveal>
        <Eyebrow>Ejemplos de soluciones</Eyebrow>
        <h2>
          Situaciones que
          <br />
          <em>quizá te suenen.</em>
        </h2>
        <p>Estos ejemplos ilustran posibles soluciones para cada sector.</p>
      </div>
      <div className="examples-grid">
        {solutionExamples.map((example) => (
          <article key={example.sector} data-reveal>
            <span className="example-symbol" aria-hidden="true">
              {example.symbol}
            </span>
            <Eyebrow>{example.sector} · Ejemplo</Eyebrow>
            <h3>{example.title}</h3>
            <p>{example.text}</p>
            <a className="text-link" href="/contacto/">
              Hablar de una idea similar
              <Arrow diagonal />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="shell contact-cta-inner" data-reveal>
        <Eyebrow>Vamos a ponerle forma</Eyebrow>
        <h2>
          Cuéntanos qué
          <br />
          <em>necesita tu negocio.</em>
        </h2>
        <div>
          <p>
            Una web, una identidad visual o herramientas que trabajen mejor
            juntas. El primer paso es hablarlo.
          </p>
          <Action href="/contacto/">Hablemos de tu proyecto</Action>
        </div>
        <span className="cta-location">{brand.location}</span>
      </div>
    </section>
  );
}
