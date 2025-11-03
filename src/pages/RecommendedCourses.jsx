import React from 'react';
import { useNavigate } from 'react-router-dom';

const recommendations = [
  {
    id: 1,
    title: 'Advanced JavaScript & ESNext',
    reason: 'Because you excelled in "Introduction on programming".',
    img: 'https://placehold.co/600x400/f59e0b/ffffff?text=JavaScript',
    tag: 'Programming',
  },
  {
    id: 2,
    title: 'Modern React with Hooks',
    reason: 'A popular choice for Frontend Developers.',
    img: 'https://placehold.co/600x400/3b82f6/ffffff?text=React',
    tag: 'Framework',
  },
  {
    id: 3,
    title: 'AI Fundamentals & Machine Learning',
    reason: 'Matches your interest in "Advanced Robotics".',
    img: 'https://placehold.co/600x400/10b981/ffffff?text=AI/ML',
    tag: 'AI',
  },
];

// Helper component for a single course card
const CourseCard = ({ course }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
    <img src={course.img} alt={course.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
        {course.tag}
      </span>
      <h3 className="text-xl font-bold text-gray-800 mt-3 mb-2">{course.title}</h3>
      <p className="text-gray-600 text-sm">{course.reason}</p>
      <button className="w-full mt-4 px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700">
        View Course
      </button>
    </div>
  </div>
);

function RecommendedCourses() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 font-inter p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Recommended For You
          </h1>
          <button 
            onClick={() => navigate(-1)} // Go back to the previous page
            className="flex items-center space-x-2 px-4 py-2 font-medium text-gray-700 bg-white rounded-lg shadow-sm hover:bg-gray-50"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>Back to Dashboard</span>
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default RecommendedCourses;