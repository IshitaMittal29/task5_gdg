import React from 'react';

const Bar = ({ h }) => <div className={`w-full ${h} bg-blue-500 rounded-t-lg`}></div>;

const Performance = () => {
  return (
    <div className="col-span-1 bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Performance</h3>
        <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
      </div>
      <p className="text-sm text-gray-500">The best lessons:</p>
      <p className="font-semibold text-gray-700 mb-2">Introduction on programming</p>
      <div className="text-4xl font-bold mb-4">95.6<span className="text-lg text-gray-400">/100</span></div>
      <div className="flex space-x-2 items-end h-24">
        <Bar h="h-16" /> <Bar h="h-20" /> <Bar h="h-12" /> <Bar h="h-24" /> <Bar h="h-16" /> <Bar h="h-20" />
      </div>
    </div>
  );
};

export default Performance;