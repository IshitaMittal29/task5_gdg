import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/landingpage/LandingPage.jsx';
import DashboardPage from './pages/dashboard/DashboardPage.jsx';
import CreatorDashboardPage from './pages/creatorDashboard/CreatorDashboardPage.jsx'; 
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx'; 
import PaymentPage from './pages/PaymentPage.jsx';
import FeedbackPage from './pages/FeedbackPage.jsx'; 
import ProfilePage from './pages/ProfilePage.jsx'; 
import RecommendedCourses from './pages/RecommendedCourses.jsx'; 
import PlagiarismDetector from './pages/PlagiarismDetector.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      
      <Route path="/dashboard" element={<DashboardPage />} /> 
      <Route path="/creator-dashboard" element={<CreatorDashboardPage />} /> 

      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/recommendations" element={<RecommendedCourses />} />
      <Route path="/plagiarism" element={<PlagiarismDetector />} />
    </Routes>
  );
}

export default App;