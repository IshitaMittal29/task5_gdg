import React from 'react';
import { Link } from 'react-router-dom'; // Make sure Link is imported

function ActionsSocial() {
  return (
    <section className="actions-social-section">
      <div className="container">
        <div className="feature-box-container">
          {/* ... (your hero-feature-boxes code is unchanged) ... */}
          <div className="hero-feature-boxes">
            <div className="hero-feature-box">
              <div className="feature-box-icon">
                <img src="https://assets-global.website-files.com/6574cf978c4309a474d2834b/6574d293f0b212f71661d477_rocket.svg" alt="Rocket Icon" width="80" height="80" />
              </div>
              <div>
                <h3>Features Overview</h3>
                <p className="subtle-text">Learn more skills</p>
              </div>
            </div>
            <div className="hero-feature-box">
              <div className="feature-box-icon">
                <img src="https://assets-global.website-files.com/6574cf978c4309a474d2834b/6574d293f0b212f71661d478_laptop-code.svg" alt="Courses Icon" width="80" height="80" />
              </div>
              <div>
                <h3>Explore Courses</h3>
                <p className="subtle-text">Get course you need</p>
              </div>
            </div>
          </div>
        </div>

        <div className="actions-social-container">
          <div className="hero-actions">
            
            {/* 1. THIS LINK IS UPDATED */}
            <Link to="/login" className="btn btn-light">
              <span>Login</span>
              <span>&rarr;</span>
            </Link>
            
            {/* 2. THIS LINK IS UPDATED */}
            <Link to="/signup" className="btn blue-gradient">
              <span>Get started</span>
              <span>&rarr;</span>
            </Link>

          </div>
          <div className="social-icons-box">
            {/* ... (your social icons are unchanged) ... */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActionsSocial;