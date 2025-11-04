import { useState, createContext } from 'react'

const AuthContext = createContext();

const AuthProvider = ( { children }) => {

    const [ user, setUser ] = useState( {name: '', avartar: ''});
    const [ token, setToken ] = useState( null );

    const login = ( user, token) => {
        // console.log('Login desde el Context');
        setUser( user );
        setToken( token);
    }

    const logout = () => { 
        console.log('Logout desde el Context');
        setUser({name: '', avartar: ''}); 
        setToken(null)
    }
    return (
        <AuthContext.Provider value={ {user, token, login, logout } } >
            { children }
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }