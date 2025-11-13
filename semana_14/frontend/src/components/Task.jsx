import { Link } from "react-router-dom"

const Task = ( {_id, descripcion, fecha, usuario, eliminarTarea}) => {
  const fechaformat = new Date( fecha).toLocaleDateString(); 

  return (
    <li className="tarea">
        <button className="change">
            <i className="fa-solid fa-circle-check"></i>
        </button>
        <div className="descripcion">
            <p className="nombre"> { descripcion } <br /><span> [{ usuario.name }]</span> </p>
            
            <p className="timestamp"> { fechaformat }</p>
            <Link to={ `/tasks/${_id}/edit` }> <i className="fa-regular fa-edit"></i> </Link>

            <button onClick={ () => eliminarTarea(_id) } className="borrar"><i className="fa-regular fa-trash-can"></i></button>
        </div>
    </li>
  )
}

export default Task