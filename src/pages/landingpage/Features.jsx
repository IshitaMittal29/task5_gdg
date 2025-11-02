import React from 'react';

function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-card-icon">
              <img src="https://assets-global.website-files.com/6574cf978c4309a474d2834b/6574d293f0b212f71661d476_arrow-up-right.svg" alt="Arrow icon" width="32" height="32" />
            </div>
            <h3>Learn more skills</h3>
            <p>the gradual accumulation of information about clients</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">
              <img src="https://assets-global.website-files.com/6574cf978c4309a474d2834b/6574d293f0b212f71661d473_heart.svg" alt="Heart icon" width="32" height="32" />
            </div>
            <h3>Choose your course</h3>
            <p>the gradual accumulation of information about clients</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">
              <img src="https://assets-global.website-files.com/6574cf978c4309a474d2834b/6574d293f0b212f71661d475_profile-circle.svg" alt="Profile circle icon" width="32" height="32" />
            </div>
            <h3>Learn at your own pace</h3>
            <p>the gradual accumulation of information about clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;