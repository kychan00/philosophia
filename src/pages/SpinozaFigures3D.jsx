import { Link } from 'react-router'

import SpinozaScene3D from '../components/spinoza3d/SpinozaScene3D'

export default function SpinozaFigures3D() {
  return (
    <main className="sf-page sf3d-page">
      <nav className="sf-nav">
        <Link to="/tareas/ontologia-ii/spinoza-etica-parte-i/figuras">
          ← Figuras Espinoza
        </Link>

        <Link to="/" className="sf-brand">
          <span>Φ</span> Philosophia
        </Link>

        <span>FIGURAE · SPINOZA · III DIMENSIONES</span>
      </nav>

      <header className="sf3d-hero">
        <div>
          <p>ETHICA · PARS I · FASE VI</p>
          <span className="sf-medallion">VI</span>

          <h1>
            Universo 3D
            <em>la arquitectura ontológica adquiere profundidad</em>
          </h1>

          <p>
            El mismo sistema construido en 2D se dispone ahora en un
            espacio navegable. La escena conserva un único centro
            ontológico y utiliza la profundidad para distinguir campos,
            expresiones y modos, no para inventar mundos separados.
          </p>
        </div>

        <aside>
          <span>PRIMER PROTOTIPO 3D</span>
          <strong>rotar · acercar · seleccionar · aislar relaciones</strong>
          <small>
            El 3D todavía no sustituye la red D/A/P: la complementa.
          </small>
        </aside>
      </header>

      <section className="sf3d-principle">
        <span>REGULA</span>
        <strong>
          Sustancia/Dios permanece en el centro; Causa sui es su núcleo,
          los atributos expresan su esencia y el mundo modal permanece
          dentro de Natura naturata.
        </strong>
      </section>

      <section className="sf3d-scene-section">
        <div className="sf-section-heading">
          <span>3D</span>

          <div>
            <p>Universum navigabile</p>
            <h2>Esfera ontológica · primer modelo espacial</h2>
          </div>
        </div>

        <SpinozaScene3D />
      </section>

      <section className="sf3d-next">
        <div>
          <span>FASE SIGUIENTE</span>
          <h2>3D semántico y demostrativo</h2>
          <p>
            El siguiente nivel podrá alternar entre la vista ontológica
            y una vista demostrativa donde D/A/P, convergencias y
            bifurcaciones ocupen también profundidad espacial.
          </p>
        </div>

        <Link to="/tareas/ontologia-ii/spinoza-etica-parte-i/figuras">
          Volver a las figuras 2D →
        </Link>
      </section>

      <footer className="sf-footer">
        <Link to="/tareas/ontologia-ii/spinoza-etica-parte-i/figuras">
          ← Figuras 2D
        </Link>
        <span>DEUS · SUBSTANTIA · NATURA</span>
        <span>Figuras Espinoza · Fase VI</span>
      </footer>
    </main>
  )
}
