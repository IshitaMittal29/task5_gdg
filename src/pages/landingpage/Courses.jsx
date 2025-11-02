import React from 'react';

function Courses() {
  return (
    <section className="courses-section">
      <div className="container">
        <div className="courses-header">
          <h2 className="section-title">
            Let browse, search, and filter courses
          </h2>
          <div className="features-cta">
            <a href="#" className="btn blue-gradient">
              <span>See all courses</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
        
        <div className="courses-grid">
          <div className="course-card">
            <img src="https://placehold.co/600x400/065f46/ffffff?text=Python+Course" alt="Python Course" className="course-card-image" onError={(e) => { e.target.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Error'; }} />
            <div className="course-card-content">
              <span className="course-card-tag">PYTHON</span>
              <h3>Python course</h3>
              <p>Start from scratch and build projects with guidance. Learn the language that powers AI, web dev, and automation.</p>
              <a href="#" className="course-card-link">
                <span>Read more</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
          <div className="course-card">
            <img src="https://placehold.co/600x400/4338ca/ffffff?text=Graphics+Design" alt="Graphics Design" className="course-card-image" onError={(e) => { e.target.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Error'; }} />
            <div className="course-card-content">
              <span className="course-card-tag">DESIGN</span>
              <h3>Graphics Designing</h3>
              <p>Go from beginner to pro. Learn the art of visual communication with Figma, Photoshop, Illustrator, and Canva.</p>
              <a href="#" className="course-card-link">
                <span>Read more</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
          <div className="course-card">
            <img src="https://placehold.co/600x400/b91c1c/ffffff?text=Video+Editing" alt="Video Editing" className="course-card-image" onError={(e) => { e.target.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Error'; }} />
            <div className="course-card-content">
              <span className="course-card-tag">MEDIA</span>
              <h3>Video Editing</h3>
              <p>Master storytelling through cinematic effects. Master tools like Premiere Pro and DaVinci Resolve to create professional edits.</p>
              <a href="#" className="course-card-link">
                <span>Read more</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;