function Card( { nombre, descripcion } ){
  return (
    <div className='card'>
      <h4> { nombre }</h4>
      <strong>{ descripcion }</strong>
      <button>Ver</button>
    </div>
  )
}

export default Card
