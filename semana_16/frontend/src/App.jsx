import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import reactLogo from './assets/react.svg'
import './App.css'

const socket = io('http://localhost:3000', {
  transports: ['websocket']
})

function App() {

  const [ usuario, setUsuario ] = useState("");
  const [ mensaje, setMensaje ] = useState("");
  const [ mensajes, setMensajes ] = useState([])


  useEffect( () => {
    socket.on('mensajes_guardados', ( mensajesGuardados) => {
      console.log(mensajesGuardados);

      setMensajes( mensajesGuardados );
    });


    // Escuchamos cada vez que hay un nuevo mensaje
    socket.on('mensaje', (data) => {
      setMensajes(  (prev) => [ ...prev, data ]  );
    })


    return () =>{
      socket.off('mensaje');
      socket.off('mensajes_guardados');
    }

  }, [])



  const enviarMensaje = (e) => {
    e.preventDefault()
    if( mensaje.trim() == "" || usuario.trim() == ""){
      return;
    }
    
    socket.emit('mensaje', {
      user: usuario,
      body: mensaje
    })

    setMensaje("");
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Socket</h1>
      <input
        value={ usuario }
        onChange={ (e) => setUsuario( e.target.value )}
        placeholder='Usuario' 
        type="text" 
        style={{
            padding: 10
          }}
      />
      <div style={{
        border: "2px solid #FFF",
        padding: 10,
        overflowY: "scroll",
        height: 250,
        justifyContent: "start",
        alignItems: "start"
      }}>
           {
            mensajes.map( (item) => (
              <p key={ item._id} style={{ textAlign: "start"}}>
                <strong>{ item.user}</strong> {item.body}
              </p>
            ))
           }

      </div>

      <form onSubmit={ enviarMensaje } style={{ justifyContent: "space-between", flexDirection: "row", gap: 5}}>
        <input
          value={ mensaje}
          onChange={ (e) => setMensaje( e.target.value)}
          name="mensaje" 
          type="text" 
          style={{
            padding: 10
          }}
          />
          <button type='submit'> Enviar</button>
      </form>
    </>
  )
}

export default App
