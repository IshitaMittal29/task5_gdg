import React from 'react';

const PageTitleBar = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Dashboard for student
      </h1>
      <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
        <span>Light mode</span>
        <i className="fa-solid fa-sun"></i>
      </button>
    </div>
  );
};

export default PageTitleBar;