import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

const UserEdit = () => {

    const { id } = useParams();
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [ user, setUser] = useState({ nombre: '', email: '', password1: '', password2 : '' });
    const [ error, setError ] = useState( false);
    const [ msgError, setMsgError ] = useState('');
    const [ loading, setLoading ] = useState( false ); 
    const onChange = ( event ) => {
        const { name, value } = event.target;
        setUser( ( f) => ( { ...f, [ name ]: value } ) );
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


    const endPoint = `http://127.0.0.1:3000/api/users/${id}`;

    useEffect(   () => {
        
        const getUser = async () => {

            try {
                const option = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }

                const resp = await fetch(endPoint, option);
                const data = await resp.json();
                const { name, email, password, rol, image } = data.data;

                setUser( { name, email, password, rol, image });
                console.log(data );
            } catch (error) {
                console.error(error);
            }

        }
        
        getUser();


    }, [ id] )



    const handleSubmit = async ( e) => {
        e.preventDefault();
        const error = validar();
        if ( error ) {
            setMsgError( error );
            setError( true );
            return;
        }

        setLoading( true );

        try {
            const option = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify( {
                    name: user.nombre,
                    email: user.email,
                    password: user.password1
                } )
            }
            const resp = await fetch( endPoint, option);

            if( resp.ok){
                console.info('Usuario Actualizado!');
                //navigate('/users');
            } else {
                console.error('No se pudo actualizar la tarea')
            }

        } catch (error) {
            setError(true);
            setMsgError(' Ocurrio un error al Actualizar el usuario :(');
            console.error({error})
        } finally{
            setLoading(false);
        }

    }
    return (
        <main className="container">
            <h2>Editando Usuario { id }</h2>
            <form onSubmit={ handleSubmit } className='form-user'>
               
            <label htmlFor='inputNombre'>Nombre</label>
            <input value={ user.nombre } onChange={ onChange } name="nombre"  id="inputNombre" type="text" />

            <label htmlFor='inputEmail'>Email</label>
            <input value={ user.email } onChange={ onChange} name="email" id="inputEmail" type="text" />

            <label htmlFor='inputPassword'>Contraseña</label>
            <input value={ user.password1 } onChange={ onChange } name="password1" id="inputPassword" type="password" />

            <label htmlFor='inputPasswordRepetida'>Repetir contraseña</label>
            <input value={ user.password2 } onChange={ onChange } name="password2" id="inputPasswordRepetida" type="password" />

            <button type="submit" disabled={ loading  }><i className="fa-solid fa-cloud-arrow-up"></i> Guardar</button>

            <button type="buton" onClick={ () => navigate('/users') }> <i className="fa-solid fa-rotate-left"></i> Cancelar</button>
     

          { error && <Alert msg={ msgError } />  }


            </form>
        </main>
    )
}

export default UserEdit