import t3damoscurso_img from './imagenes/proyectos/T3DAMOSCURSO.png'
import './styles/proyectos.css'
function Proyectos(){
    return(
        <div>
            <h1 className="mb-4 section-title">Proyectos</h1>
            <table class="table table-striped table-hover shadow-lg rounded">
      <thead class="table-dark">
        <tr>
          <th></th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src={t3damoscurso_img} className='imagen-proyecto'/></td>
          <td><strong>T3DAMOSCURSO</strong><br/>Maquetación de página web educativa hecha con React.</td>
          <td>
            <a href="https://marchelohappyprogrammer.github.io/TE3DAMOSCURSO/" class="btn btn-primary btn-sm" target="_blank">Visitar</a>
          </td>
        </tr>
        
      </tbody>
    </table>
        </div>
    )
}
export default Proyectos;