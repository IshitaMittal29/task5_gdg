import React from 'react';

// Helper component for a single stat
const StatBox = ({ title, value, icon }) => (
  <div className="p-4 bg-gray-50 rounded-lg flex items-center space-x-3">
    <div className="p-3 bg-blue-100 rounded-full">
      <i className={`fa-solid ${icon} text-blue-600`}></i>
    </div>
    <div>
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold text-gray-800">{value}</div>
    </div>
  </div>
);

const CreatorStats = () => {
  return (
    <div className="col-span-1 row-span-2 bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-bold mb-4">At a Glance</h3>
      <div className="grid grid-cols-1 gap-4">
        <StatBox title="Total Students" value="1,482" icon="fa-users" />
        <StatBox title="Total Revenue" value="$12,345" icon="fa-dollar-sign" />
        <StatBox title="Avg. Rating" value="4.8" icon="fa-star" />
        <StatBox title="Courses" value="12" icon="fa-video" />
      </div>
    </div>
  );
};

export default CreatorStats;