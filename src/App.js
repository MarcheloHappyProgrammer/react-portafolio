import "bootstrap/dist/css/bootstrap.min.css";
import { useState, createContext, useContext } from "react";
import Datos from "./MisDatos";
import Proyectos from "./Proyectos";
import ExperienciaLaboral from "./ExperienciaLaboral";
import Estudios from "./Estudios";
import Skills from "./Skills";

const SeleccionContext = createContext();

function App() {
  const [seleccion, setSeleccion] = useState(1);

  return (
    <SeleccionContext.Provider value={{ seleccion, setSeleccion }}>
      <div className="d-flex min-vh-100">
        <Menu />
        <div className="content-container w-75 p-5">
          {seleccion === 1 && <Datos />}
          {seleccion === 2 && <ExperienciaLaboral />}
          {seleccion === 3 && <Estudios />}
          {seleccion === 4 && <Skills />}
          {seleccion === 5 && <Proyectos />}
        </div>
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
    <div
      className="nav flex-column nav-pills pt-5 w-25 min-vh-100"
      aria-orientation="vertical"
      style={{ backgroundColor: '#263443', position: 'sticky', top: 0, height: '100vh' }}
    >
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
        className={`nav-link ${seleccion === props.indice ? "active" : ""} 
          fs-4 
          ${window.innerWidth < 768 ? "fs-5" : ""} 
          ${window.innerWidth < 576 ? "fs-6" : ""}`}
        onClick={() => seleccionMenu(props.indice)}
      >
        {props.nombre}
      </button>
    );
  }
}

export default App;
