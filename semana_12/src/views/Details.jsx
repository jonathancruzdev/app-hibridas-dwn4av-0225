import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import TasksContainer from '../components/TasksContainer'
import Task from '../components/Task'


const Details = () => {
  const [ tasks, setTasks ] = useState([]);
  const endPoint = 'https://apitask-2.onrender.com/api/tasks';
  const navigate = useNavigate();
  const { id }= useParams();

  console.log( {id })

  // setInterval( () => {}, 1000)
  useEffect( ()=> {
  /* fetch(endPoint).then( resp => resp.json())
    .then( json => {
        const { data } = json; 
      
        setTasks(data);
    }).catch( error => {
        alert('Error del servidor');
        console.log({error})
    }) */
  }, [] )



  return (
    <main className='container'>
        <h2>Detalle de Tarea</h2>
          <TasksContainer>
            
           {/*   <Task key={task._id} descripcion={ task.descripcion} fecha={task.fecha} />
             */}
          </TasksContainer>
    </main>
  )
}

export default Details