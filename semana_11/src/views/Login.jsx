import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../components/Alert'

const Login = () => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState({ email: '', password: ''});
    const [ error, setError ] = useState( false);
    // solo ingresa a la Home con el user admin y el email admin@dv.edu.ar
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Login');

        if( user.email === 'admin@dv.edu.ar' && user.password === 'admin'){
            console.log('Ok');
            navigate('/tasks');
        } else {
            console.log('Usuario o contraseña Invalidos');
            setError( true);
        }
    }

    const handlChange = ( e ) => {
        setError(false);
        const { name, value } = e.target;
        setUser( {...user, [name]: value } )
    }

  return (
    
    <main className='container'>
        <form onSubmit={ handleSubmit}  className='form-user'>
            <div className="form-header">
                <h2>Login</h2>
            </div>
            <label htmlFor='inputEmail'>Email</label>
            <input required value={ user.email } onChange={ handlChange } name='email' id="inputEmail" type="text" />

            <label htmlFor='inputPassword'>Contraseña</label>
            <input required value={user.password } onChange={ handlChange } name='password' id="inputPassword" type="password" />

            <button type="submit">Ingresar</button>

            { error && <Alert msg='Credenciales invalidas' />  }
            <Link to='/register' className='text-white'> ¿No tenes una cuenta? Registrate aquí </Link>

        </form>
    </main>
  )
}

export default Login