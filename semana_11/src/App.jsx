import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'

import Login from './views/Login';
import Register from './views/register';
import Home from './views/Home';
import NotFound from './views/NotFound';

function App() {
  const usuario = 'Jonathan';

  return (
    <>
      <Header>
        <Nav usuario={usuario} />
      </Header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='/tasks' element={ <Home /> } />
          <Route path='*' element={ <NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer descripcion="TO DO APP"></Footer>
    </>
  )
}

export default App
