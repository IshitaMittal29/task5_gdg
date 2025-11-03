import React from 'react';
import { Link } from 'react-router-dom';

import rocketIcon from '/images/rocket-lunch.png';
import coursesIcon from '/images/book-alt.png';

function ActionsSocial() {
  return (
    <section className="actions-social-section">
      <div className="container">
        <div className="feature-box-container">
          <div className="hero-feature-boxes">
            <div className="hero-feature-box">
              <div className="feature-box-icon">
                <img src={rocketIcon} alt="Rocket Icon" width="80" height="80" />
              </div>
              <div>
                <h3>Features Overview</h3>
                <p className="subtle-text">Learn more skills</p>
              </div>
            </div>
            <div className="hero-feature-box">
              <div className="feature-box-icon">
                <img src={coursesIcon} alt="Courses Icon" width="80" height="80" />
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
            
            <Link to="/login" className="btn btn-light">
              <span>Login</span>
              <span>&rarr;</span>
            </Link>
            
            <Link to="/signup" className="btn blue-gradient">
              <span>Get started</span>
              <span>&rarr;</span>
            </Link>

          </div>
          <div className="social-icons-box">
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