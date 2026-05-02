import React, {useEffect, useState} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css";
import { ToastContainer, toast } from 'react-toastify';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();   

  // logout handler function 
  const logoutHandler = () => {
    localStorage.removeItem('todoapp')
    toast.success('logout successfully')
    navigate('/login')
  }

  const[username, setUsername] = useState(''); 
  // get username to dynamically display on navbar
  useEffect(() =>{
    const userData = JSON.parse(localStorage.getItem('todoapp'))
    console.log( 'username data: ' +  userData && userData.user.username)
    setUsername(userData && userData.user.username); 
  }, [])

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <Link to="/home" className="logo">
          Hi {username}!
        </Link>   
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <Link
          to="/home"
          className={`nav-link ${location.pathname === "/home" ? "active" : ""}`}
        >
          Home
        </Link>

        <Link
          to="/todolist"
          className={`nav-link ${location.pathname === "/todolist" ? "active" : ""}`}
        >
          My Workspace
        </Link>   

        <button className="logout-btn" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;