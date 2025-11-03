import React from 'react';

const CalendarItem = ({ time, title, lesson, color }) => {
  const colors = {
    blue: 'border-l-blue-500 bg-blue-50',
    indigo: 'border-l-indigo-500 bg-indigo-50',
    purple: 'border-l-purple-500 bg-purple-50',
    gray: 'border-l-gray-400 bg-gray-50',
  };
  return (
    <div className={`p-4 rounded-lg border-l-4 ${colors[color]}`}>
      <div className="text-xs text-gray-500">{time}</div>
      <div className="font-semibold text-gray-800">{title}</div>
      <div className="text-xs text-gray-500">{lesson}</div>
    </div>
  );
};

const Calendar = () => {
  return (
    <div className="col-span-1 row-span-2 bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-bold mb-4">Calendar</h3>
      <div className="space-y-4">
        <CalendarItem time="9:00 - 11:00 AM" title="Electronics lesson" lesson="21 lesson" color="blue" />
        <CalendarItem time="11:00 - 11:50 AM" title="Electronics lesson" lesson="23 lesson" color="indigo" />
        <CalendarItem time="3:00 - 5:00 PM" title="Robotics lesson" lesson="23 lesson" color="purple" />
        <CalendarItem time="12:00 - 1:00 PM" title="C++ lesson" lesson="31 lesson" color="gray" />
      </div>
    </div>
  );
};

export default Calendar;