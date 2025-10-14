import { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import TasksContainer from './components/TasksContainer'
import Task from './components/Task'
function App() {
  const usuario = 'Jonathan';
  const lista = [
        {_id:1, descripcion: 'Pasear el Perro', fecha: '14-10-2025'},
        {_id:2, descripcion: 'Estudiar NodeJS', fecha: '18-10-2025'},
        {_id:3, descripcion: 'Ir al Cine', fecha: '18-10-2025'},
        {_id:4, descripcion: 'Ver una seriedsdd', fecha: '20-10-2025'}
  ];
  const [ tasks, setTasks ] = useState(lista);
  const [ descripcion, setDescripcion] = useState('');

  const endPoint = 'http://localhost:3000/api/tasks';

  // setInterval( () => {}, 1000)
  useEffect( ()=> {
  fetch(endPoint).then( resp => resp.json())
    .then( json => {
        const { data } = json; 
        console.log(data);
        setTasks(data);
    }).catch( error => {
        alert('Error del servidor');
        console.log({error})
    })
  }, [] )

 
  const manejadorSubmit  = ( e ) => {
    e.preventDefault();
    const fecha = new Date().toLocaleDateString();
    const _id = tasks.length + 1;
    const nueva = { _id, descripcion, fecha };
   
    setTasks( [ ...tasks, nueva ]  )
    console.table( tasks);
    setDescripcion('');
  }


  return (
    <>
      <Header>
        <Nav usuario={usuario} />
      </Header>
      <main className='container'>
        <form onSubmit={ manejadorSubmit }>
          <input 
            value={descripcion}
            onChange={ ( e ) => setDescripcion(e.target.value)  } 
            type="text" 
            placeholder='Nueva tarea'
            required/>
          <button type='submit'> <i className="fa-solid fa-circle-plus"></i> Nueva</button>
        </form>
          <TasksContainer>
            {
              tasks.map( task => <Task key={task._id} descripcion={ task.descripcion} fecha={task.fecha} />)
            }
          </TasksContainer>
      </main>
      <Footer descripcion="TO DO APP"></Footer>
    </>
  )
}

export default App
