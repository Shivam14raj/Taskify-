import React from 'react' 
import {Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing/Landing.jsx'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import AboutPage from './pages/About/AboutPage.jsx'
import TodoList from './pages/ToDo/TodoList.jsx'
import HomePage from './pages/Home/HomePage.jsx'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<Landing/>}  />
        <Route path='/login' element = {<Login/> } />
        <Route path='/register' element = {<Register/>}  />
        <Route path='/about' element = {<AboutPage/>}  />
        <Route path='/todolist' element = {<TodoList/>}  />
        <Route path='/home' element = {<HomePage/>}  />  

      </Routes>
      <ToastContainer />
       
    </div>    
  )   
}   
export default App      