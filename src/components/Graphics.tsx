export function ConnectionGraphic() {
  return (
    <figure className="connection-graphic">
      <div
        className="connection-canvas"
        role="img"
        aria-label="Composición original: dos formas se conectan para unir diseño y desarrollo"
      >
        <div className="graphic-grid" />
        <span className="graphic-label label-one">PENSAR / DISEÑAR</span>
        <span className="graphic-label label-two">CONECTAR / CONSTRUIR</span>
        <div className="shape shape-circle" />
        <div className="shape shape-bracket">
          <span aria-hidden="true">{'{ }'}</span>
        </div>
        <span className="graphic-amp" aria-hidden="true">
          &
        </span>
        <div className="connection-note">
          <span>VISUAL</span>
          <span className="connection-note-line" />
          <span>FUNCIONAL</span>
        </div>
        <span className="canvas-corner corner-one" />
        <span className="canvas-corner corner-two" />
      </div>
      <figcaption>Dos especialidades. Un mismo proyecto.</figcaption>
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
