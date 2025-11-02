import React from 'react';

// Helper component for a single course
const CourseItem = ({ title, category, students, revenue }) => (
  <div className="flex items-center justify-between p-4 border-b hover:bg-gray-50">
    <div>
      <div className="font-bold text-gray-800">{title}</div>
      <div className="flex space-x-4 text-sm text-gray-500">
        <span><i className="fa-solid fa-tag mr-1"></i>{category}</span>
        <span><i className="fa-solid fa-users mr-1"></i>{students} Students</span>
        <span><i className="fa-solid fa-dollar-sign mr-1"></i>{revenue}</span>
      </div>
    </div>
    <div className="flex space-x-2">
      <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-md hover:bg-blue-200">
        Edit
      </button>
      <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
        View
      </button>
    </div>
  </div>
);

const MyCourses = () => {
  return (
    <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-bold mb-4">My Courses</h3>
      <div className="space-y-2">
        <CourseItem 
          title="Introduction on programming" 
          category="Programming"
          students="450"
          revenue="$4,500"
        />
        <CourseItem 
          title="The Ultimate Electronics Course" 
          category="Engineering"
          students="312"
          revenue="$3,800"
        />
        <CourseItem 
          title="Advanced Robotics with AI" 
          category="Robotics"
          students="120"
          revenue="$2,400"
        />
        <CourseItem 
          title="C++ for Beginners" 
          category="Programming"
          students="600"
          revenue="$1,645"
        />
      </div>
    </div>
  );
};

export default MyCourses;