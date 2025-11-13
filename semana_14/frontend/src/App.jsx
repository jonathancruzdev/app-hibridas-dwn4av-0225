import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import MainLayout from './components/MainLayout';

import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import UsersABM from './views/UsersABM';
import Details from './views/Details';
import NotFound from './views/NotFound';
import TaskEdit from './views/TaskEdit';
import UserEdit from './views/UserEdit';

import ProtectedRoute from './auth/ProtectedRoute';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route element={ <MainLayout /> } > 
              <Route path='/' element={ <Login /> } />
              <Route path='/register' element={ <Register /> } />

              <Route path='/tasks' element={ 
                <ProtectedRoute> 
                  <Home /> 
                </ProtectedRoute>
              } />

              <Route path='/tasks/:id' element={ <Details /> } />

              <Route path='/tasks/:id/edit' element={
                <ProtectedRoute>
                  <TaskEdit />
                </ProtectedRoute>
               } />

              <Route path='/users' element={ <UsersABM />} />
               <Route path='/users/:id/edit' element={
                <ProtectedRoute>
                  <UserEdit />
                </ProtectedRoute>
               } />
              <Route path='*' element={ <NotFound />} /> 
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
