import React from 'react';

import skillsIcon from '/images/bulb.png';
import courseIcon from '/images/list-check.png';
import paceIcon from '/images/calendar-clock.png';  

function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-card-icon">
              <img src={skillsIcon} alt="Skills icon" width="32" height="32" />
            </div>
            <h3>Learn more skills</h3>
            <p>the gradual accumulation of information about clients</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">
              <img src={courseIcon} alt="Course icon" width="32" height="32" />
            </div>
            <h3>Choose your course</h3>
            <p>the gradual accumulation of information about clients</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">
              <img src={paceIcon} alt="Pace icon" width="32" height="32" />
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