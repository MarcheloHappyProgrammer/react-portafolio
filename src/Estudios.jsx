import imagenCibertec from "./imagenes/cibertec_logo.png";

function Estudios() {
  return (
    <div >
      <h1 className="mb-4">Mis estudios</h1>
      <Seccion
        imagen={imagenCibertec}
        nombreCarrera={"Computación e informática"}
        descripcion={
          "Un experto en la carrera de Computación e Informática desarrolla soluciones de software sobre diversas plataformas incluyendo desarrollo en web, cloud y mobile. Igualmente, participará en la definición y diseño de soluciones informáticas tomando en cuenta los requerimientos y necesidades del cliente y enfocándose en la seguridad de aplicaciones."
        }
        paginaWeb={"https://www.cibertec.edu.pe/"}
      />
    </div>
  );
}

function Seccion(props) {
  return (
    <div class="card mb-3 " >
      <img src={props.imagen} class="card-img-top" alt="imagen institución" />
      <div class="card-body">
        <h5 class="card-title">{props.nombreCarrera}</h5>
        <p class="card-text">{props.descripcion}</p>
        <p className="card-text">
          <small className="text-body-secondary">
            Visita su página web{" "}
            <a target="_blank" href={props.paginaWeb}>
              aqui.
            </a>{" "}
          </small>
        </p>
      </div>
    </div>
  );
}
export default Estudios;
