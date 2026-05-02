import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { registerUser } from '../../services/AuthServices.js'
import { ToastContainer, toast } from 'react-toastify';
import './Register.css'
import {ErrorHandler} from '../../utils/ErrorHandler.js'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const navigate = useNavigate(); 

  // register function
  const registerHandler = async(e) => {
    try {
          e.preventDefault(); 
          const data ={email, password, username}; 
          const response = await registerUser(data)
          toast.success(response.data.message); 
          navigate('/login')
          console.log(response.data)
          
        } 
        catch (err) {
          toast.error(ErrorHandler(err))
          console.log(err)
        }
  }

  return (
    <div className="register-hero">
      <div className="register-card">

        <h1 className="register-title">Create Account</h1>
        <p className="register-subtitle">
          Register to start managing your tasks
        </p>

        <form className="register-form" onSubmit={registerHandler}>
         
         <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="register-input"
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
          />

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <p className="register-footer">
          Already a user?{' '}
          <Link to="/login" className="register-link">
            Please login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Register