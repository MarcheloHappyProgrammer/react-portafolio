function Datos() {
  return (
    <div className="content w-75 p-5">
      <h1 className="display-4 " style={{ fontWeight: "500" }}>
        Marchelo Cortabrazo Rios
      </h1>
      <p className="lead">
        Dispuesto al aprendizaje constante, enfocado a lograr los objetivos
        corporativos y visionarios de la empresa. Con fortaleza para superar
        barreras y metas, creativo para la solución de problemas y carisma para
        la atención al público. Disposición para la realización de tareas
        asignadas obteniendo resultados eficaces.
      </p>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title">Mis Datos</h5>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>
                  <strong>Edad:</strong> 21 años
                </li>
                <li>
                  <strong>DNI:</strong> 70979493
                </li>
                <li>
                  <strong>Estado civil:</strong> Soltero
                </li>
                <li>
                  <strong>Nacionalidad:</strong> Peruano
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h5 className="card-title">Contacto</h5>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>
                  <strong>Teléfono:</strong> 946 164 131
                </li>
                <li>
                  <strong>Correo:</strong> jfmarchelo29@hotmail.com
                </li>
                <li>
                  <strong>LinkendIn:</strong>{" "}
                  <a href="https://www.linkedin.com/in/marchelo-cortabrazo-rios-025281337/">
                    Marchelo Cortabrazo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datos;
