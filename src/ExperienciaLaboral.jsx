import './styles/experienciaLaboral.css'
import logoDosCerritos from "./imagenes/logo_dos_cerritos.png";
import logoConetwork from "./imagenes/logo_conetwork.png";
import logoEducapases from "./imagenes/logo_educapases.png"

function ExperienciaLaboral() {
  return (
    <div >
      <h1 className="mb-4 section-title">Experiencia Laboral</h1>
      <Seccion
        imagen={logoConetwork}
        titulo={"Conetwork"}
        cargo={"Soporte técnico / Back office"}
        fechaInicio={"Julio 2024"}
        fechaFin={"Actualidad"}
        Ubicacion={"La Victoria, Lima, Perú"}
        paginaWeb={"https://web.facebook.com/ConetWork.oficial"}
      />
      <Seccion
        imagen={logoDosCerritos}
        titulo={"Dos Cerritos S.A.C."}
        cargo={"Operario de producción"}
        fechaInicio={"Diciembre 2021"}
        fechaFin={"Junio 2024"}
        Ubicacion={"Barranco, Lima, Perú"}
        paginaWeb={"https://tienda.2cerritos.com.pe/"}
      />
      <Seccion
        imagen={logoEducapases}
        titulo={"Educapases"}
        cargo={"Desarrollador web / Administrador de la plataforma educativa"}
        fechaInicio={"Junio 2021"}
        fechaFin={"Noviembre 2021"}
        Ubicacion={"Barranco, Lima, Perú"}
        paginaWeb={"https://web.facebook.com/Educapases/?_rdc=1&_rdr#"}
      />
    </div>
  );
}

function Seccion(props) {
  return (
    <article className="card mb-3 shadow-lg">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.imagen}
            className="img-fluid rounded-start"
            alt="Logo de la empresa"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.titulo}</h5>
            <p className="card-text">
              <span>Cargo:</span> {props.cargo}
              <br />
              <span>Duración:</span> {props.fechaInicio} - {props.fechaFin}
              <br />
              <span>Ubicación:</span> {props.Ubicacion}
            </p>
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
      </div>
    </article>
  );
}

export default ExperienciaLaboral;
