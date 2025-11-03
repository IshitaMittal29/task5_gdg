import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); 
  const currentPath = location.pathname;

  const navLinks = [
    { name: 'Dashboard', icon: 'fa-solid fa-house', path: '/dashboard' },
    { name: 'Recommendations', icon: 'fa-solid fa-wand-magic-sparkles', path: '/recommendations' }, // NEW LINK
    { name: 'Lessons', icon: 'fa-solid fa-book', path: '#' },
    { name: 'Schedules', icon: 'fa-solid fa-calendar-days', path: '#' },
    { name: 'Materials', icon: 'fa-solid fa-folder-open', path: '#' },
    { name: 'Forum', icon: 'fa-solid fa-comments', path: '#' },
    { name: 'Assessments', icon: 'fa-solid fa-chart-line', path: '#' },
  ];

  return (
    <aside className="w-64 bg-blue-800 text-white p-6 rounded-r-3xl flex flex-col">
      <div className="text-2xl font-bold mb-10 flex items-center space-x-2">
        <i className="fa-solid fa-leaf"></i> 
        <span>Smart</span>
      </div>
      
      <nav className="flex-grow">
        <ul className="space-y-3">
          {navLinks.map((link) => (
            <li key={link.name}>
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
        <Link 
          to="/profile" 
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          <i className="fa-solid fa-gear"></i>
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;