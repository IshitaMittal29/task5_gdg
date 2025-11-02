import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav-bar-wrapper hero-gradient-bg">
      <nav className="main-nav">
        <div className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="#">PROGRAMS</Link>
          <Link to="#">PRICING</Link>
          <Link to="/payment">PAYMENT</Link>
          <Link to="/feedback">FEEDBACK</Link>
        </div>
        
        {/* Only the "JOIN NOW" button remains */}
        <div className="flex items-center">
          <Link to="/signup" className="btn btn-nav-outline">
            JOIN NOW
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;