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

  const { token } = useContext( AuthContext);

  console.log( { token });
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
{/*         <form onSubmit={ manejadorSubmit }>
          <input 
            value={descripcion}
            onChange={ ( e ) => setDescripcion(e.target.value)  } 
            type="text" 
            placeholder='Nueva tarea'
            required/>
          <button type='submit'> <i className="fa-solid fa-circle-plus"></i> Nueva</button>
        </form>
         */}
          <TasksContainer>
            {
              tasks.map( task => <Task key={task._id} descripcion={ task.description} fecha={task.created} />)
            }
          </TasksContainer>
    </main>
  )
}

export default Home