import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

import UsersContainer from '../components/UsersContainer'
import User from '../components/User'


const UsersABM = () => {
  const [ users, setUsers ] = useState([]);
  const endPoint = 'http://127.0.0.1:3000/api/users'

  const { token } = useContext( AuthContext );

  const handleDeleteUser = async ( _id) => {
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
        if( data ){
          console.log( data)
          setUsers(data);
        } 

    }).catch( error => {
        alert('Error del servidor');
        console.log({error})
    })
  }, [] )


  return (
    <main className='container'>
          <UsersContainer>
            {
              users.map( user => <User
                          key={user._id}
                          _id={user._id} 
                          name={ user.name} 
                          email={user.email} 
                          rol={user.rol} 
                          image={user.image} 
                          created={user.created} 
                          eliminarTarea={ handleDeleteUser }
                          />)
            }
          </UsersContainer>
    </main>
  )
}

export default UsersABM