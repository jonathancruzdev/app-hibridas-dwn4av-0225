
const Task = ( {_id, descripcion, fecha}) => {
  const fechaformat = new Date( fecha).toLocaleDateString(); 
  return (
    <li className="tarea">
        <button className="change">
            <i className="fa-solid fa-circle-check"></i>
        </button>
        <div className="descripcion">
            <p className="nombre"> { descripcion }</p>
            <p className="timestamp"> { fechaformat }</p>

        </div>
    </li>
  )
}

export default Task