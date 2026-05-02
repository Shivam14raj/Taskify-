import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import './Login.css'
import {loginUser} from '../../services/AuthServices.js'
import { ToastContainer, toast } from 'react-toastify';
import {ErrorHandler} from '../../utils/ErrorHandler.js'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate(); 


  // login function
  const loginHandler = async(e) =>{      
    try {
      e.preventDefault(); 
      const data ={email, password}; 
      const response = await loginUser(data)
      toast.success(response.data.message); 
      navigate('/home')
      localStorage.setItem('todoapp', JSON.stringify(response.data))
      console.log(response.data) 
    } 
    catch (err) {
      toast.error(ErrorHandler(err))
      console.log(err)
    }
    
  }

  return (
    <div className="login-hero">
      <div className="login-card">

        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">
          Login to continue managing your tasks
        </p>

        <form className="login-form">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          <button type="submit" className="login-btn" onClick={loginHandler}>
            Login
          </button>
        </form>

        <p className="login-footer">
          Not a user?{' '}
          <Link to="/register" className="login-link">
            Please register
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login