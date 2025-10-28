import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
const Nav = ( {usuario} ) => {
  const [ logueado, setLogueado ] = useState(true)
  const navigate = useNavigate();

  const logout = ( ) => {
    const salir = confirm('¿Seguro que desea Salir? ');
    if( salir) {
      setLogueado(  false );
      localStorage.removeItem('jwt');
      navigate('/');
    }
  }

  const login = ( ) => {
      setLogueado(  true );
  }


  return (
    <nav>
        <h1>ToDo APP</h1>
        <ul className="menu">
          <li>
            <NavLink to='/tasks'> Tareas</NavLink>
          </li>
          <li>
            <NavLink to="/register">Registro</NavLink>
          </li>
          <li>
            <NavLink to="/">Login</NavLink>
          </li>
        </ul>
        <div className="user-info">

            {
               logueado ? (
                <>
                    <p> { usuario} </p>
                    <div className="user-image"></div>
                    <button onClick={ logout }><i className="fa-solid fa-right-from-bracket"></i> Cerrar Sesión</button>
                </>
               ) : (
                  <>
                    <p> Loguearse</p>
                    <button onClick={login }><i className="fa-solid fa-right-to-bracket"></i> Iniciar Sesión</button>
                  </>
               )
            }

        </div>
    </nav>
  )
}

export default Nav