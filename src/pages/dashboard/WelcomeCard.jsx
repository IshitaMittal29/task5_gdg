import React, { useState, useEffect } from 'react';

const WelcomeCard = () => {
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      const namePart = email.split('@')[0];
      setUserName(namePart);
    }
  }, []);

  return (
    <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 capitalize">Hello {userName}!</h2>
        <p className="text-gray-500 mb-4">You have 3 tasks. It's lots of work for today! so let's start!</p>
        <a href="#" className="text-blue-600 font-semibold hover:underline">
          review it
        </a>
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