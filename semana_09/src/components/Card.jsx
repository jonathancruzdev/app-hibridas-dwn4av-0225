import { useState } from "react";

// Repaso de destructurización de Arrays
const logos = ['JavaScript', 'HTML', 'CSS', {}];
const [js, logo2 ] = logos;
console.log( js, logo2)


function Card( {id, nombre, descripcion, addToCart } ){

  const [ texto, setTexto ] = useState(descripcion);
  const [ esMinuscula, setEsMinuscula ] = useState(true);

  function convertir(){
    if( esMinuscula){
      setTexto(  texto.toUpperCase() );
    } else {
      setTexto(  texto.toLowerCase())
    }

    setEsMinuscula( !esMinuscula);
  }

  function addCart(){
    console.log('Agregando al carrito');
    addToCart({id, nombre});
  }

  return (
    <div className='card'>
      <h4> { nombre }</h4>
      <strong>{ texto }</strong>
      <button onClick={ convertir } type="button">🔎</button>
      <button onClick={ () => addCart() } type="button"> 🛒 </button>
    </div>
  )
}

export default Card
