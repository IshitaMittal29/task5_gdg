import React from 'react';

// Helper component
const TeacherItem = ({ name, img }) => (
  <div className="flex items-center space-x-3">
    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
      {img}
    </div>
    <span className="font-semibold text-gray-700">{name}</span>
  </div>
);

const LinkedTeachers = () => {
  return (
    <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-bold mb-4">Linked Teachers</h3>
      <div className="space-y-4">
        <TeacherItem name="Dr. Tanu ma'am" img="T" />
        <TeacherItem name="Mr. Denwor sir" img="D" />
      </div>
    </div>
  );
};

export default LinkedTeachers;