import { useState } from "react";

// Repaso de destructurización de Arrays
const logos = ['JavaScript', 'HTML', 'CSS', {}];
const [js, logo2 ] = logos;
console.log( js, logo2)


function Card( {id, nombre, descripcion, addToCart } ){

  const [ texto, setTexto ] = useState(descripcion);

  function convertir(){
    setTexto(  texto.toUpperCase() );
  }

  function addCart(){
    console.log('Agregando al carrito');
    addToCart({id, nombre});
  }

  return (
    <div className='card'>
      <h4> { nombre }</h4>
      <strong>{ texto }</strong>
      <button onClick={ convertir } type="button">Ver</button>
      <button onClick={ () => addCart() } type="button"> 🛒 </button>
    </div>
  )
}

export default Card
