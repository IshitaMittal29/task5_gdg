import React from 'react';

const WelcomeCard = () => {
  return (
    <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Welcome, Alex!</h2>
        <p className="text-gray-500 mb-4">What will you create today?</p>
        <button className="px-5 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700">
          Create New Course
        </button>
      </div>
      <img 
        src="https://placehold.co/150x130/DBEAFE/3B82F6?text=Illustration" 
        alt="Illustration" 
        className="rounded-lg"
      />
    </div>
  );
};

export default WelcomeCard;