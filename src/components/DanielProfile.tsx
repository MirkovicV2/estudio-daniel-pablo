import { contacts } from '../content/site';
import { danielExperience, danielProfile } from '../content/daniel';
import { canPublish } from '../content/editorial';
import { Action, Arrow, Eyebrow } from './Primitives';
import { ContactCTA, WorkSection } from './Sections';

export function DanielProfile() {
  if (!canPublish(danielProfile)) return null;
  return (
    <>
      <section className="page-intro shell daniel-profile">
        <Eyebrow>{contacts.daniel.name} / Desarrollo full stack</Eyebrow>
        <h1>
          Soy Daniel.
          <br />
          <em>Conecto las piezas.</em>
        </h1>
        <p className="profile-intro">{danielProfile.summary}</p>
        <div className="profile-links">
          <Action href={`mailto:${contacts.daniel.email}`}>Escríbeme</Action>
          {contacts.daniel.portfolio && (
            <Action href={contacts.daniel.portfolio} secondary external>
              Ver mi portfolio completo
            </Action>
          )}
          <a
            className="text-link"
            href={contacts.daniel.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Mi trayectoria en LinkedIn
            <Arrow diagonal />
          </a>
        </div>
        <div
          className="profile-capabilities"
          aria-label="Mis ámbitos de trabajo"
        >
          {danielProfile.capabilities.map((capability) => (
            <span key={capability}>{capability}</span>
          ))}
        </div>
      </section>
      <section className="section shell daniel-experience">
        <div className="section-heading" data-reveal>
          <Eyebrow>Mi aportación al estudio</Eyebrow>
          <h2>
            Entender el proceso.
            <br />
            <em>Construir la conexión.</em>
          </h2>
          <p>{danielProfile.approach}</p>
        </div>
        <div className="section-heading" data-reveal>
          <Eyebrow>Experiencia profesional individual</Eyebrow>
          <h2>
            El recorrido que
            <br />
            <em>traigo conmigo.</em>
          </h2>
          <p className="individual-note">
            Estos proyectos forman parte de mi experiencia en otras empresas.
            Aquí recojo mi participación y lo que aporto a nuestro trabajo
            conjunto.
          </p>
        </div>
        <div className="individual-rows">
          {danielExperience.map((item) => (
            <article className="individual-row" key={item.company} data-reveal>
              <div>
                <h3>{item.company}</h3>
                <span>{item.period}</span>
              </div>
              <div>
                <p className="individual-role">{item.role}</p>
                {canPublish({ editorial: item.contributionEditorial }) && (
                  <p>{item.contribution}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <WorkSection />
      <ContactCTA />
    </>
  );
}
