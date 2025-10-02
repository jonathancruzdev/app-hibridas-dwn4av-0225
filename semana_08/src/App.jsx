import './App.css'
import curso from './assets/curso.png';
function mayuscula(texto) {
  return texto.toUpperCase();
}

function algo(n1, n2){
  return { n1, n2 }
}

function App() {
  const nombre = 'Juan';
  const apellido = 'Ruiz'
  const edad = 27;
  const logueado = false;
  const materias = ['Aplicaciones Híbridas', 'Clientes Web Mobile', 'Portales'];
  const titulo = <h2>Soy un título</h2>;
  const vite = './vite.svg';
  const boot = 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png';

  const mensaje = logueado == true ? 'Bienvenido' : 'Acceso no Autorizado';
  return (
    <>
      <h1 className='azul'> Introducción a React </h1>
      <hr /> 
      <img src={vite} alt="Logo" className='logo' />
      <img src={curso} alt="Logo" className='logo' />
      <img src={boot} alt="Logo" className='logo' />

        <hr />

        {  logueado == true ? (  
            <>
              <h2>Bienvenido</h2> 
              <br />
              <h4 title={apellido}>Hola { mayuscula(nombre) }</h4>
              { titulo}
              <ul>
                <li><strong>Edad:</strong> { edad + 1 }</li>
                <li><strong>Logueado:</strong> { logueado }</li>
                <li><strong>Materias:</strong> { materias[0] }</li>
              </ul>
            </>
          ): <>
              <h2>Acceso no Autorizado</h2> 
              <p>Loguearse o registrase</p>
            </> 
        }

     
    </>
  )
}

export default App
