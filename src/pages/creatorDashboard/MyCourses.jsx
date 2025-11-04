import React, { useState, useEffect } from 'react';
import apiClient from '../../api/apiClient'; // 1. Import our apiClient

// Helper component for a single course
// 2. We'll need to check the API response for the correct property names
const CourseItem = ({ course }) => (
  <div className="flex items-center justify-between p-4 border-b hover:bg-gray-50">
    <div>
      {/* 3. Check your console log for the real property names */}
      <div className="font-bold text-gray-800">{course.title || 'Course Title Missing'}</div>
      <div className="flex space-x-4 text-sm text-gray-500">
        <span><i className="fa-solid fa-tag mr-1"></i>{course.category || 'N/A'}</span>
        <span><i className="fa-solid fa-users mr-1"></i>{course.students || 0} Students</span>
        <span><i className="fa-solid fa-dollar-sign mr-1"></i>{course.revenue || 0}</span>
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
  // 4. Add state for loading, courses, and errors
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 5. Add useEffect to fetch data when the page loads
  useEffect(() => {
    const fetchMyCourses = async () => {
      setLoading(true);
      setError(null);
      try {
        // 6. Call your new API endpoint
        const response = await apiClient.get('/course/my-courses');
        
        // 7. Log the response so we can see the data structure
        console.log("My Courses API Response:", response.data);
        
        // 8. Assuming the API returns an array. If it's an object, we'll need to adjust.
        setCourses(response.data); 
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch creator courses:", err);
        setError("Could not load your courses. Please try again.");
        setLoading(false);
      }
    };

    fetchMyCourses();
  }, []); // The empty array means this runs once

  // 9. Render loading, error, or data states
  const renderContent = () => {
    if (loading) {
      return <p className="text-gray-500">Loading your courses...</p>;
    }

    if (error) {
      return <p className="text-red-500">{error}</p>;
    }

    if (courses.length === 0) {
      return <p className="text-gray-500">You haven't created any courses yet.</p>;
    }

    return (
      <div className="space-y-2">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} /> // Make sure your API sends a unique 'id'
        ))}
      </div>
    );
  };

  return (
    <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-bold mb-4">My Courses</h3>
      {renderContent()}
    </div>
  );
};

export default MyCourses;