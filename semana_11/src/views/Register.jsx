import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alert from '../components/Alert';
import Loading from '../components/Loading';
const Register = () => {

  const endPoint = 'http://localhost:3000/api/users';

  const [ error, setError ] = useState( false);
  const [ msgError, setMsgError ] = useState('');
  const [ loading, setLoading ] = useState( false ); 
  const [ form, setForm ] = useState({ nombre: '', email: '', password1: '', password2 : '' });

  const onChange = ( event ) => {
    const { name, value } = event.target;
    setForm( ( f) => ( { ...f, [ name ]: value } ) );
    setError( false);
    setMsgError('');
  }


  const validar = () => {
    if( !form.nombre.trim()) {
      return 'El nombre es Obligatorio';
    }
    if( !form.email.trim()) return 'El Email es obligatorio';
    // Varificar la expresion regular
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if( ! regex.test( form.email )){
      return 'El Email no es valido'; 
    }
    if( form.password1.length < 4 ){
      return "La contraseña debe contener al menos cuatro caracteres";
    }
    if( form.password1 !== form.password2) return "Las contraseñas con coinciden";

    return null;
  }

  const onSubmit = async ( event ) => {
  event.preventDefault();
  const error = validar();
  console.log(error);
  console.log(form);

  if ( error ) {
      setMsgError( error );
      setError( true );
      return;
  }

  setLoading( true );
  try {
    
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.nombre,
        email: form.email,
        password: form.password1
      })
    }

    const response = await fetch(endPoint, option);
    // Verificamos el status
    const isOk = response.status == 200 || response.status == 202;

    const data = await response.json();

    if( !isOk ) {
      throw new Error( 'no se creo el usuario')
    }

    console.log('Usuario Registrado correctamente');
    console.log(data);

    setForm( {nombre: '', email: '', password1: '', password2: ''} );
  } catch (error) {
    setError( true);
    setMsgError(' Ocurrio un error al registrar el usuario :(');
    console.error( {error});
  } finally {
    setLoading(false);
  }
}


  return (

    <main className='container'>
        { loading ? <Loading /> : <></> }
        
        <form onSubmit={ onSubmit } className='form-user'>
            <div className="form-header">
                <h2>Register</h2>
            </div>

            <label htmlFor='inputNombre'>Nombre</label>
            <input value={ form.nombre } onChange={ onChange } name="nombre"  id="inputNombre" type="text" />

            <label htmlFor='inputEmail'>Email</label>
            <input value={ form.email } onChange={ onChange} name="email" id="inputEmail" type="text" />

            <label htmlFor='inputPassword'>Contraseña</label>
            <input value={ form.password1 } onChange={ onChange } name="password1" id="inputPassword" type="password" />

            <label htmlFor='inputPasswordRepetida'>Repetir contraseña</label>
            <input value={ form.password2 } onChange={ onChange } name="password2" id="inputPasswordRepetida" type="password" />

            <button type="submit" disabled={ loading  }>Crear Cuenta</button>
            <Link to='/'> ¿Ya tenes una cuenta? Ingresa aquí</Link>

          { error && <Alert msg={ msgError } />  }
           

        </form>
    </main>
  )
}

export default Register