import React from 'react';

const EventItem = ({ title, img }) => (
  <div className="flex items-center space-x-3">
    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
      {img}
    </div>
    <p className="text-sm text-gray-600">{title}</p>
  </div>
);

const UpcomingEvents = () => {
  return (
    <div className="col-span-1 bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-bold mb-4">Upcoming events</h3>
      <div className="space-y-4">
        <EventItem title="Python event will be held on 21 Jan 2026." img="L" />
        <EventItem title="Robotics event will be held on 22 March 2026." img="R" />
      </div>
    </div>
  );
};

export default UpcomingEvents;