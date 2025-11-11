
const User = ( {_id, name, email, rol, image, created }) => {
  const fechaformat = new Date( created).toLocaleDateString(); 



  return (
    <li className="tarea">
   
        <div className="descripcion">
            <img src={ image } alt={ name} />
            <p className="nombre"> { email } <br /><span> [{ rol }]</span> </p>
            
            <p className="timestamp"> { fechaformat }</p>
            <button className="change">
                <i className="fa-solid fa-pen"></i>
            </button>
            <button  className="borrar"><i className="fa-regular fa-trash-can"></i></button>
        </div>
    </li>
  )
}

export default User