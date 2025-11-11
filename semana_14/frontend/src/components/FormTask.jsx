import { useState } from 'react'
import Alert from './Alert';
const FormTask = ( { onAdd }) => {

    const [ descripcion, setDescripcion] = useState('');
    const [ error, setError ] = useState( false);
    const [ msgError, setMsgError ] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if( ! descripcion.trim() ) {
            setMsgError('Completar la descripción');
            setError(true)
            return;
        }

        // Me voy a comunicar con el componente padre
        onAdd( descripcion );
        setDescripcion('');
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
            <input 
                value={descripcion}
                onChange={ ( e ) => setDescripcion(e.target.value)  } 
                type="text" 
                placeholder='Nueva tarea'
                />
            <button type='submit'> <i className="fa-solid fa-circle-plus"></i> Nueva</button>
                
            </form>
            { error && <Alert msg={ msgError } />  }
        </>


    )
}

export default FormTask