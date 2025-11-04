import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import MainLayout from './components/MainLayout';

import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import Details from './views/Details';
import NotFound from './views/NotFound';


function App() {
  const usuario = 'Jonathan';

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route element={ <MainLayout usuario={ usuario} /> } > 
              <Route path='/' element={ <Login /> } />
              <Route path='/register' element={ <Register /> } />
              <Route path='/tasks' element={ <Home /> } />
              <Route path='/tasks/:id' element={ <Details /> } />

              <Route path='*' element={ <NotFound />} /> 
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
