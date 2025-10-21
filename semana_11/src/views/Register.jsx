import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (

    <main className='container'>
        <form className='form-user'>
            <div className="form-header">
                <h2>Register</h2>
            </div>

            <label htmlFor='inputNombre'>Nombre</label>
            <input id="inputNombre" type="text" />

            <label htmlFor='inputApellido'>Apellido</label>
            <input id="inputApellido" type="text" />

            <label htmlFor='inputEmail'>Email</label>
            <input id="inputEmail" type="text" />

            <label htmlFor='inputPassword'>Contraseña</label>
            <input id="inputPassword" type="password" />

            <label htmlFor='inputPasswordRepetida'>Repetir contraseña</label>
            <input id="inputPasswordRepetida" type="password" />

            <button type="submit">Crear Cuenta</button>
            <Link to='/'> ¿Ya tenes una cuenta? Ingresa aquí</Link>

        </form>
    </main>
  )
}

export default Register