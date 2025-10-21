import React from 'react'
import { useState, useEffect } from 'react'

import TasksContainer from '../components/TasksContainer'
import Task from '../components/Task'


const Home = () => {

  const [ tasks, setTasks ] = useState([]);
  const [ descripcion, setDescripcion] = useState('');

  const endPoint = 'http://localhost:3000/api/tasks';

  const postTask = async ( task ) => {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( task )
    }

    const resp = await fetch(endPoint, option);
    if( resp.ok ){
      const data = await resp.json();
      return data.data;
    }

  }

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

  const manejadorSubmit  =  async ( e ) => {
    e.preventDefault();
    try {
      const {_id, fecha } = await postTask( { descripcion}  );
      const nueva = { _id, descripcion, fecha };
      setTasks( [ ...tasks, nueva ]  )
      setDescripcion('');
    } catch (error) {
      console.log(error)
      alert('Tenemos un error')
    }
  }

  return (
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
  )
}

export default Home