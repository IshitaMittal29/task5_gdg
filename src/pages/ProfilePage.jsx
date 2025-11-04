import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiClient from '../api/apiClient';

function ProfilePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const [user, setUser] = useState({
    name: 'User',
    email: 'Loading...',
    avatar: 'U',
    bio: 'Loading user data...',
    role: 'Loading...',
  });
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);

  // This useEffect gets the basic info from localStorage
  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      const namePart = email.split('@')[0];
      const role = email.includes('creator') ? 'Creator' : 'Student';
      setUser({
        name: namePart,
        email: email,
        avatar: namePart.charAt(0).toUpperCase(),
        bio: 'User details would be loaded from an API.',
        role: role,
      });
    }
  }, []);

  // This useEffect fetches courses AFTER we know the role
  useEffect(() => {
    if (user.role === 'Student') {
      const fetchEnrolledCourses = async () => {
        setCoursesLoading(true);
        try {
          const response = await apiClient.get('/student/courses');
          console.log("Enrolled Courses API Response:", response.data);
          setEnrolledCourses(response.data);
          setCoursesLoading(false);
        } catch (err) {
          console.error("Failed to fetch enrolled courses:", err);
          setCoursesLoading(false);
        }
      };
      fetchEnrolledCourses();
    }
  }, [user.role]); 

  const handleLogout = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      await axios.post('/api/auth/logout', {
        accessToken: token,
      });
    } catch (err) {
      console.error("Logout API failed, logging out locally.", err);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('userEmail'); // <-- REMEMBER TO CLEAR THIS
      setLoading(false);
      alert("You have been logged out.");
      navigate('/');
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 font-inter">
      <div className="w-full max-w-4xl p-8 my-10 bg-white rounded-lg shadow-lg">
        
        <div className="flex items-center space-x-6 mb-8">
          <img 
            src={`https://placehold.co/128x128/E2E8F0/333333?text=${user.avatar}`} 
            alt="Profile Avatar" 
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-800 capitalize">{user.name}</h1>
            <p className="text-xl text-gray-600">{user.role}</p>
          </div>
          <div className="flex-grow text-right">
            <button className="px-6 py-2 font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700">
              Edit Profile
            </button>
          </div>
        </div>

        {/* User Details Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">
            User Details
          </h2>
          
          <div>
            <label className="text-sm font-medium text-gray-500">Display Name</label>
            <p className="text-lg text-gray-900 capitalize">{user.name}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-500">Email Address</label>
            <p className="text-lg text-gray-900">{user.email}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-500">Bio</label>
            <p className="text-lg text-gray-900">{user.bio}</p>
          </div>

          {user.role === 'Student' && (
            <>
              <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2 pt-4">
                My Enrolled Courses
              </h2>
              {coursesLoading ? (
                <p className="text-gray-500">Loading courses...</p>
              ) : (
                <ul className="list-disc list-inside text-gray-700">
                  {enrolledCourses.length > 0 ? (
                    enrolledCourses.map((course, index) => (
                      <li key={course.id || index}>{course.title || 'Course Name Missing'}</li>
                    ))
                  ) : (
                    <p className="text-gray-500">You are not enrolled in any courses yet.</p>
                  )}
                </ul>
              )}
            </>
          )}

          {/* Logout Button */}
          <div className="pt-6 border-t">
            <button 
              onClick={handleLogout}
              disabled={loading}
              className="w-full max-w-xs px-4 py-2 font-medium text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700 focus:outline-none disabled:bg-gray-400"
            >
              {loading ? 'Logging out...' : 'Log Out'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;