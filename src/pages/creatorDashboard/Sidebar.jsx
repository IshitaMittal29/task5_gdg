import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CreatorSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: 'Dashboard', icon: 'fa-solid fa-house', path: '/creator-dashboard' },
    { name: 'My Courses', icon: 'fa-solid fa-video', path: '#' },
    { name: 'Create New', icon: 'fa-solid fa-plus-circle', path: '#' },
    { name: 'Plagiarism', icon: 'fa-solid fa-shield-halved', path: '/plagiarism' }, // <-- NEW LINK
    { name: 'Analytics', icon: 'fa-solid fa-chart-pie', path: '#' },
    { name: 'Payouts', icon: 'fa-solid fa-dollar-sign', path: '#' },
  ];

  return (
    <aside className="w-64 bg-blue-800 text-white p-6 rounded-r-3xl flex flex-col">
      <div className="text-2xl font-bold mb-10 flex items-center space-x-2">
        <i className="fa-solid fa-leaf"></i> 
        <span>Creator Hub</span>
      </div>
      
      <nav className="flex-grow">
        <ul className="space-y-3">
          {navLinks.map((link) => (
            <li key={link.name}>
              {/* Changed <a> to <Link> */}
              <Link 
                to={link.path} 
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                  currentPath === link.path 
                    ? 'bg-blue-700 font-semibold' 
                    : 'hover:bg-blue-700'
                }`}
              >
                <i className={link.icon}></i>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        {/* Changed <a> to <Link> */}
        <Link 
          to="/profile" // Or a dedicated /settings page
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          <i className="fa-solid fa-gear"></i>
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
};

export default CreatorSidebar;