import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Placeholder data for recommended courses
const recommendations = [
  { id: 1, title: 'AI Course 1', description: 'Understand Machine Learning Basics' },
  { id: 2, title: 'AI Course 2', description: 'Understand Machine Learning Basics' },
  { id: 3, title: 'AI Course 3', description: 'Understand Machine Learning Basics' },
  { id: 4, title: 'AI Course 4', description: 'Understand Machine Learning Basics' },
  { id: 5, title: 'AI Course 5', description: 'Understand Machine Learning Basics' },
];

// Helper component for a single list item
const CourseListItem = ({ course }) => (
  <Link 
    to="#" // You can change this to /course/id later
    className="flex items-center p-4 bg-white rounded-xl shadow-sm transition-all hover:shadow-md"
  >
    {/* Play Icon */}
    <div className="mr-4">
      <i className="fa-solid fa-play-circle text-3xl text-blue-500"></i>
    </div>
    
    {/* Course Info */}
    <div className="flex-grow">
      <h3 className="font-semibold text-gray-800">{course.title}</h3>
      <p className="text-sm text-gray-500">{course.description}</p>
    </div>
    
    {/* Chevron Icon */}
    <div className="ml-4">
      <i className="fa-solid fa-chevron-right text-gray-400"></i>
    </div>
  </Link>
);

function RecommendedCourses() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <div className="max-w-3xl mx-auto p-8">
        
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

        {/* Course List */}
        <div className="space-y-4">
          {recommendations.map((course) => (
            <CourseListItem key={course.id} course={course} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default RecommendedCourses;