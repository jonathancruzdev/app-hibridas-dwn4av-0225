import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

const TaskEdit = () => {

    const { id } = useParams();
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [ description, setDescription] = useState("");
    
    
    const endPoint = `http://127.0.0.1:3000/api/tasks/${id}`;

    useEffect(   () => {
        
        const getTask = async () => {

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
                const { description, completed } = data.data;

                setDescription( description);
                console.log(description, completed);
            } catch (error) {
                console.error(error);
            }

        }
        
        getTask();


    }, [ id] )

    const handleSubmit = async ( e) => {
        e.preventDefault();

        try {
            const option = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify( { description })
            }
            const resp = await fetch( endPoint, option);

            if( resp.ok){
                console.info('Tarea Actualizada!');
                navigate('/tasks');
            } else {
                console.error('No se pudo actualizar la tarea')
            }

        } catch (error) {
            console.error({error})
        }

    }
    return (
        <main className="container">
            <h2>Editando Tarea { id }</h2>
            <form onSubmit={ handleSubmit }>
               
                <input 
                    type="text" 
                    name="description" 
                    value={ description}
                    onChange={ ( e) => setDescription( e.target.value )}    
                />

                <button type="submit"><i className="fa-solid fa-cloud-arrow-up"></i> Guardar</button>
                <button type="buton" onClick={ () => navigate('/tasks') }> <i className="fa-solid fa-rotate-left"></i> Cancelar</button>

            </form>
        </main>
    )
}

export default TaskEdit