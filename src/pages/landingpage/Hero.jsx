import React from 'react';

function Hero() {
  return (
    <section className="hero-section hero-gradient-bg">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            NEXUSLEARN 
          </h1>
          <h2>
            Learn Smarter, Teach Better — Powered by AI.
          </h2>
          <p>
            An AI-driven e-learning platform for students, creators, and admins — all in one place
          </p>
        </div>
        <div className="hero-image-wrapper">
          <img src="/images/woman.png" alt="Corporate business woman" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;