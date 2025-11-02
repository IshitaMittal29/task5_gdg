import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  return (
    <header className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center mb-6">
      {/* Search Bar */}
      <div className="relative">
        <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input 
          type="text" 
          placeholder="Search"
          className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Icons & Profile */}
      <div className="flex items-center space-x-6">
        <i className="fa-solid fa-bell text-gray-600 text-xl cursor-pointer hover:text-blue-500"></i>
        <i className="fa-solid fa-message text-gray-600 text-xl cursor-pointer hover:text-blue-500"></i>
        
        <Link to="/profile" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <span className="font-semibold text-gray-700">Alex Johnson</span>
          <img 
            src="https://placehold.co/40x40/E2E8F0/333333?text=A" 
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-gray-200"
          />
        </Link>

      </div>
    </header>
  );
};

export default DashboardHeader;