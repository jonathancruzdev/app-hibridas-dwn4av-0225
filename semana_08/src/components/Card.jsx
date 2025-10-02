// Definimos un componete
function Card( { nombre, division } ){
  //const { nombre, division } = props;
  return (
    <div className='card'>
      <h4> { nombre }</h4>
      <strong>{ division }</strong>
      <button>Ver</button>
    </div>
  )
}

export default Card
