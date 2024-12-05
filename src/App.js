import "bootstrap/dist/css/bootstrap.min.css";
import { useState, createContext, useContext } from "react";
import Datos from "./MisDatos";
import Proyectos from "./Proyectos";
import ExperienciaLaboral from "./ExperienciaLaboral";
import Estudios from "./Estudios";
import Skills from "./Skills"

const SeleccionContext = createContext();

function App() {
  const [seleccion, setSeleccion] = useState(1);

  return (
    <SeleccionContext.Provider value={{ seleccion, setSeleccion }}>
      <div className="d-flex align-items-start min-vh-100" >
        <Menu />
        {seleccion === 1 ? <Datos /> : ""}
        {seleccion === 2 ? <ExperienciaLaboral /> : ""}
        {seleccion === 3 ? <Estudios /> : ""}
        {seleccion === 4 ? <Skills /> : ""}
        {seleccion === 5 ? <Proyectos /> : ""}
      </div>
    </SeleccionContext.Provider>
  );
}

function Menu() {
  const { seleccion, setSeleccion } = useContext(SeleccionContext);
  function seleccionMenu(id) {
    setSeleccion(id);
  }
  return (
    <div class="nav flex-column nav-pills pt-5 w-25 min-vh-100" aria-orientation="vertical"style={{backgroundColor : '#263443'}}>
      <Seccion indice={1} nombre={"Mis datos"} />
      <Seccion indice={2} nombre={"Experiencia laboral"} />
      <Seccion indice={3} nombre={"Mis estudios"} />
      <Seccion indice={4} nombre={"Mis skills"} />
      <Seccion indice={5} nombre={"Proyectos"} />
    </div>
  );

  function Seccion(props) {
    return (
      <button
        className={`nav-link fs-4 ${seleccion === props.indice ? "active" : ""}`}
        onClick={() => seleccionMenu(props.indice)}
      >
        {props.nombre}
      </button>
    );
  }
}

export default App;
