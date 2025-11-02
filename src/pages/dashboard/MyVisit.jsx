import React from 'react';

// Helper component for the stats
const StatCircle = ({ percent, label }) => (
  <div className="text-center">
    {/* This is a simplified stand-in for a donut chart */}
    <div className="p-4 rounded-full flex items-center justify-center">
      <span className="text-3xl font-bold text-blue-600">{percent}</span>
    </div>
    <p className="text-sm text-gray-500">{label}</p>
  </div>
);

const MyVisit = () => {
  return (
    <div className="col-span-1 bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-bold mb-4">My visit</h3>
      <div className="grid grid-cols-2 gap-4">
        <StatCircle percent="55%" label="Figma" />
        <StatCircle percent="45%" label="Total Projects" />
        <StatCircle percent="85%" label="Figma wireframe" />
        <StatCircle percent="88%" label="Total Projects" />
      </div>
    </div>
  );
};

export default MyVisit;