import './App.css'
import curso from './assets/curso.png';
import Card from './components/Card.jsx'
import mayuscula from './utils/mayuscula.js';

function App() {
  const nombre = 'Juan';
  const apellido = 'Ruiz'
  const edad = 27;
  const usuario = {
    nombre: 'Jonathan',
    apellido: 'Cruz',
    email: 'jonathan.cruz@dv.edu.ar',
    rol: 'profesor'
  }
  const logueado = true;
  const materias = [
      'Interacción con Dispositivos Móviles',
      'Aplicaciones Web Progresivas', 
      'Aplicaciones para dispositivos Móviles', 
      'Aplicaciones Híbridas', 
      'Clientes Web Mobile', 
      'Proyecto Final'
    ];

  const comisiones = [
    { id: 1, nombre: 'Interacción con Dispositivos Móviles', division: 'DWM3AP' },
    { id: 2, nombre: 'Interacción con Dispositivos Móviles', division: 'DWM3BP' },
    { id: 3, nombre: 'Interacción con Dispositivos Móviles', division: 'DWM3AV' },
    { id: 4, nombre: 'Aplicaciones Híbridas', division: 'DWT4AP' },
    { id: 5, nombre: 'Aplicaciones Híbridas', division: 'DWN4AV' },
    { id: 6, nombre: 'Aplicaciones Híbridas', division: 'DWN4BV' },
    { id: 7, nombre: 'Aplicaciones Híbridas', division: 'DWM4AV' }
  ]
  const titulo = <h2>Soy un título</h2>;
  const vite = './vite.svg';
  const boot = 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png';

  //const mensaje = logueado == true ? 'Bienvenido' : 'Acceso no Autorizado';

  //const result = materias.filter(  item => item.includes('Aplicaciones'));
  const result = materias.map(  item => { return item.toUpperCase() } );
  
  //console.log(result)

  return (
    <>
      <h1 className='azul'> Materias de la carrera DW </h1>
      <Card nombre="Maquetado y Desarrollo Web" division="DWM1AP" id="4" />


      <hr /> 
      <img src={vite} alt="Logo" className='logo' />
      <img src={curso} alt="Logo" className='logo' />
      <img src={boot} alt="Logo" className='logo' />

        <hr />

        {  logueado == true ? (  
            <>
              <h2>Bienvenido</h2> 
              <br />
              <h3> { mayuscula (usuario.nombre) } |  { usuario.email }</h3>
              <hr />
              <h4>Materias</h4>
              <ul>
                {
                 // materias.map(  materia => <li>  {materia} </li>  )
                }
              </ul>
                <hr />
                <h4>Comisiones</h4>
                <div className="container">
                  {
                    comisiones.map( comision => <Card key={comision.id} nombre={comision.nombre} division={comision.division} />  )
                  }
                  { /*
                    comisiones.map( comision => <div className="card">
                                                  <h4>{ comision.nombre }</h4>
                                                  <strong>{ comision.division }</strong>
                                                  <button>Ver</button>
                                                </div> 
                                  )
                    */
                  }
         
                </div>

              {/* 
              <ul> 
                <li><strong>Edad:</strong> { edad + 1 }</li>
                <li><strong>Logueado:</strong> { logueado }</li>
                <li><strong>Materias:</strong> { materias[0] }</li>
              </ul> 
              */}
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
