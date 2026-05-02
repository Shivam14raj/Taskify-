import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  return (
    <div className='hero'>
      <div className='into-text'>
           <h1>
            <span className='tagline'>
              Your Day, Perfectly Structured
            </span>
           </h1> 
           <p>
            Just type anything on your mind — tasks, plans, or random thoughts.
           </p>
           <Link className='button red' to= '/register'>Register Now </Link>
           <Link className='button green' to= '/login'>Login Now </Link>
      </div>
    </div>
  )
}

export default Landing
