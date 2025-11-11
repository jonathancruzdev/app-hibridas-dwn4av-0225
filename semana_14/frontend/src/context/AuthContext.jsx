import { useState, useEffect, createContext } from 'react'
import { jwtDecode } from "jwt-decode"
const AuthContext = createContext();

const AuthProvider = ( { children }) => {

    const [ user, setUser ] = useState( null );
    const [ token, setToken ] = useState( localStorage.getItem('jwt') );

   useEffect( () => { 
        if( token) {
            try {
                const decoded = jwtDecode( token);
                setUser( decoded );
            } catch (error) {
                console.error('Token Invalido ', error);
                setUser( null );
            }
        }
   } , [ token ] )

    const login = ( token) => {
        localStorage.setItem('jwt', token);
        setToken( token);
    }

    const logout = () => { 
        localStorage.removeItem('jwt');
        setUser(null); 
        setToken(null)
    }
    return (
        <AuthContext.Provider value={ {user, token, login, logout } } >
            { children }
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }