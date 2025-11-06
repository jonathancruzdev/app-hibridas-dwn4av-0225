import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import FormTask from '../components/FormTask'
import TasksContainer from '../components/TasksContainer'
import Task from '../components/Task'


const Home = () => {
  const [ tasks, setTasks ] = useState([]);
  const endPoint = 'http://127.0.0.1:3000/api/tasks'
  const navigate = useNavigate();
  const { token } = useContext( AuthContext );

  const postTask = async ( task ) => {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify( task )
    }

    const resp = await fetch(endPoint, option);
    if( resp.ok ){
      const data = await resp.json();
      return data.data;
    }
  }

  const handleDeleteTask = async ( _id) => {
    console.log(`Eliminado tarea ${_id}`)
    const option = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }

    try {
      const resp = await fetch( `${endPoint}/${_id}`, option);
      if( resp.ok ){
        const data = await resp.json();
        console.log(data);
        // Actualizamos el estado sin la tarea eliminada
        setTasks(  tasks.filter( task => task._id != _id) );

      }
    } catch (error) {
      console.error(error);
      alert('Error del Servidor al Eliminar la tarea :(');
    }


  }

  useEffect( ()=> {

    const option = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }

  fetch(endPoint, option).then( resp => resp.json())
    .then( json => {
        const { data } = json; 
        console.log( data)
        setTasks(data);
    }).catch( error => {
        alert('Error del servidor');
        console.log({error})
    })
  }, [] )

  const agregarTarea = async ( msg ) => {
    console.log({msg })
    const description  = msg; 
    try {
      const {_id, created } = await postTask( { description}  );
      const nueva = { _id, description, created };
      setTasks( [ ...tasks, nueva ]  )
    } catch (error) {
      console.log(error)
      alert('Tenemos un error')
    }
  }

  return (
    <main className='container'>
      <FormTask onAdd={ agregarTarea } />
          <TasksContainer>
            {
              tasks.map( task => <Task 
                          key={task._id}
                          _id={task._id} 
                          descripcion={ task.description} 
                          fecha={task.created} 
                          usuario={task.user} 
                          eliminarTarea={ handleDeleteTask }
                          />)
            }
          </TasksContainer>
    </main>
  )
}

export default Home