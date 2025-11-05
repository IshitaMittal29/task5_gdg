import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dashboardPath, setDashboardPath] = useState('/dashboard'); // Default to student

  // This runs when the component loads
  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('userEmail');
    
    if (token) {
      setIsLoggedIn(true);
      // Check role from email to set the correct dashboard link
      if (email && email.includes('creator')) {
        setDashboardPath('/creator-dashboard');
      } else {
        setDashboardPath('/dashboard');
      }
    }
  }, []); // The empty array makes this run only once

  // This function runs when "Logout" is clicked
  const handleLogout = () => {
    // Clear the user's data
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    
    // Update the navbar to show "JOIN NOW"
    setIsLoggedIn(false);
    
    // Send the user back to the home page
    navigate('/');
  };

  return (
    <div className="nav-bar-wrapper hero-gradient-bg">
      <nav className="main-nav">
        {/* These links are always visible */}
        <div className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="#">PROGRAMS</Link>
          <Link to="#">PRICING</Link>
          <Link to="/payment">PAYMENT</Link>
          <Link to="/feedback">FEEDBACK</Link>
        </div>
        
        {/* These buttons are conditional */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            // --- LOGGED-IN VIEW ---
            <>
              <Link to={dashboardPath} className="font-medium text-white hover:text-gray-200">
                My Dashboard
              </Link>
              <button onClick={handleLogout} className="btn btn-nav-outline">
                Logout
              </button>
            </>
          ) : (
            // --- LOGGED-OUT VIEW ---
            <Link to="/signup" className="btn btn-nav-outline">
              JOIN NOW
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;