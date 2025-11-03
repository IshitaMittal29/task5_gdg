import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const user = {
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  role: 'Student',
  avatar: 'https://placehold.co/128x128/E2E8F0/333333?text=A',
  bio: 'Frontend developer passionate about learning and creating new things.',
};

function ProfilePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You have been logged out.");
    navigate('/'); 
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 font-inter">
      <div className="w-full max-w-4xl p-8 my-10 bg-white rounded-lg shadow-lg">
        
        <div className="flex items-center space-x-6 mb-8">
          <img 
            src={user.avatar} 
            alt="Profile Avatar" 
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{user.name}</h1>
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
            <label className="text-sm font-medium text-gray-500">Full Name</label>
            <p className="text-lg text-gray-900">{user.name}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-500">Email Address</label>
            <p className="text-lg text-gray-900">{user.email}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-500">Bio</label>
            <p className="text-lg text-gray-900">{user.bio}</p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2 pt-4">
            My Courses (Student)
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Introduction on programming</li>
            <li>Electronics lesson</li>
            <li>Robotics lesson</li>
          </ul>

          {/* Logout Button */}
          <div className="pt-6 border-t">
            <button 
              onClick={handleLogout}
              className="w-full max-w-xs px-4 py-2 font-medium text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700 focus:outline-none"
            >
              Log Out
            </button>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default ProfilePage;