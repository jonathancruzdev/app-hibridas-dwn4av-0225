import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'
import Container from './components/Container.jsx'
function App() {

  const carrito = ['PHP', 'SQL'];

  const redes = [
    {id:1, nombre: 'Instagram', url:'http://instagram.com'},
    {id:2, nombre: 'GitHub', url:'http://github.com'},
    {id:3, nombre: 'Facebook', url:'http://facebook.com'}
  ]

  const cursos = [
    { id: 1, nombre: 'JavaScript', descripcion: 'Programación Imperativa'},
    { id: 2, nombre: 'MySQL', descripcion: 'Consultas y SP'},
    { id: 3, nombre: 'PHP', descripcion: 'Conexión con Base de Datos'},
    { id: 4, nombre: 'CSS', descripcion: 'Layout con Flexbox'},
  ]

  function addToCart(data){
    console.log(data)
    console.log('Evento del Padre');
    carrito.push({ id: data.id, nombre: data.nombre});
    console.log(carrito);
  }


  return (
    <>
        <Header titulo='Cursos' />
        <h4>🛒 { carrito.length} </h4>
        <main>
          <Container>
         
            {
              cursos.map( curso => <Card
                                      addToCart={ addToCart } 
                                      key={curso.id}
                                      id={curso.id}
                                      nombre={curso.nombre} 
                                      descripcion={curso.descripcion} 
                                    />)
            }
          </Container>



        </main>
        <Footer 
          descripcion="Aplicaciones Web "
          redes={ redes}
          />
    </>
  )
}

export default App
