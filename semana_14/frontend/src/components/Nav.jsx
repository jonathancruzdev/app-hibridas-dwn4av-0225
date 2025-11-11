import {  useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
const Nav = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext( AuthContext);
  
  const handlerLogout = ( ) => {
    const salir = confirm('¿Seguro que desea Salir? ');
    if( salir) {
      logout();
      navigate('/');
    }
  }

  return (
    <nav>
        <h1>ToDo APP</h1>
        <ul className="menu">

          {
            user ? (
              <>
                <li>
                  <NavLink to='/tasks'> Tareas</NavLink>
                </li>
                <li>
                  <NavLink to='/users'> Usuarios</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                    <NavLink to="/register">Registro</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Login</NavLink>
                </li>
              </>
            )
          }
        </ul>
        <div className="user-info">
            {
               user ? (
                <>
                    <p> { user?.name} </p>
                    <div className="user-image"></div>
                    <button onClick={ handlerLogout }><i className="fa-solid fa-right-from-bracket"></i> Cerrar Sesión</button>
                </>
               ) : (
                <></>
               )
            }

        </div>
    </nav>
  )
}

export default Nav