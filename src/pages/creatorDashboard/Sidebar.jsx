import React from 'react';

const CreatorSidebar = () => {
  const navLinks = [
    { name: 'Dashboard', icon: 'fa-solid fa-house', active: true },
    { name: 'My Courses', icon: 'fa-solid fa-video', active: false },
    { name: 'Create New', icon: 'fa-solid fa-plus-circle', active: false },
    { name: 'Analytics', icon: 'fa-solid fa-chart-pie', active: false },
    { name: 'Payouts', icon: 'fa-solid fa-dollar-sign', active: false },
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
              <a 
                href="#" 
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                  link.active 
                    ? 'bg-blue-700 font-semibold' 
                    : 'hover:bg-blue-700'
                }`}
              >
                <i className={link.icon}></i>
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <a 
          href="#" 
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          <i className="fa-solid fa-gear"></i>
          <span>Settings</span>
        </a>
      </div>
    </aside>
  );
};

export default CreatorSidebar;