import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css'; 

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Dashboard</Link>
      
      {token ? (
        <>
          <Link to="/my-sessions" className="nav-link">My Sessions</Link>
          <Link to="/new-session" className="nav-link">New Session</Link>
          <button onClick={handleLogout} className="nav-logout-btn">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="nav-link">Login</Link>
          <span className="nav-separator">|</span>
          <Link to="/register" className="nav-link">Register</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
