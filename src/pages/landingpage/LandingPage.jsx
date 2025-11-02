/* src/pages/landingpage/LandingPage.jsx */
import React from 'react';
import './LandingPage.css'; // Correct path

// 2. Import all your components for this page (with correct paths)
import Header from '../../components/Header.jsx';
import NavBar from '../../components/NavBar.jsx';
import Footer from '../../components/Footer.jsx';
import Hero from './Hero.jsx';
import ActionsSocial from './ActionsSocial.jsx';
import Features from './Features.jsx';
import Courses from './Courses.jsx';

// 3. Assemble the page
function LandingPage() {
  return (
    <div id="page-landing">
      <Header />
      <NavBar />
      <Hero />
      <ActionsSocial />
      <Features />
      <Courses />
      <Footer />
    </div>
  );
}

export default LandingPage;