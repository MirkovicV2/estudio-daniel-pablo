export function ConnectionGraphic() {
  return (
    <figure className="connection-graphic">
      <div
        className="connection-canvas"
        role="img"
        aria-label="Composición original del estudio: una identidad visual, una web y las conexiones entre ellas"
      >
        <span className="graphic-label label-one">
          DISEÑO + TECNOLOGÍA / PUNTAL
        </span>
        <div className="folio-sheet folio-identity" aria-hidden="true">
          <span>01 — IDENTIDAD</span>
          <strong>
            Una buena
            <br />
            <em>idea.</em>
          </strong>
          <span className="folio-flower">✳</span>
          <small>LA FORMA DE CONTARLO.</small>
        </div>
        <div className="folio-sheet folio-browser" aria-hidden="true">
          <div className="folio-browser-bar">
            <span>● ● ●</span>
            <span>02 — WEB</span>
          </div>
          <div className="folio-browser-body">
            <span className="folio-logo">puntal.</span>
            <strong>
              Bien
              <br />
              conectada.
            </strong>
            <span className="folio-browser-cta">
              EMPEZAMOS <span>↗</span>
            </span>
          </div>
        </div>
        <div className="folio-connector" aria-hidden="true">
          <span>DISEÑO</span>
          <i />
          <span>DESARROLLO</span>
          <b>↔</b>
        </div>
        <span className="graphic-label label-two">
          UNA IDEA. MUCHAS PIEZAS.
        </span>
      </div>
      <figcaption>
        Identidad, web y contenido. Desde la misma conversación.
      </figcaption>
    </figure>
  );
}
export function DejaGraphic({ wide = false }: { wide?: boolean }) {
  return (
    <div
      className={`deja-graphic ${wide ? 'deja-wide' : ''}`}
      role="img"
      aria-label="Composición tipográfica original para el caso Déjà Vu Kebab; no es una fotografía ni una pieza del cliente"
    >
      <span className="deja-location">RIVAS VACIAMADRID / 2026</span>
      <div className="deja-composition" aria-hidden="true">
        <span className="deja-dining">Un lugar al que volver.</span>
        <span className="deja-name">
          Déjà
          <br />
          Vu.
        </span>
        <span className="deja-stamp">
          WEB
          <br />
          DISEÑO
          <br />
          CONTENIDO
        </span>
        <span className="deja-orbit">↗</span>
      </div>
      <div className="deja-bottom">
        <span>KEBAB & NEGOCIO LOCAL</span>
        <span>UN TRABAJO CONJUNTO</span>
      </div>
    </div>
  );
}
