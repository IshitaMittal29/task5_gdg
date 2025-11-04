import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import apiClient from '../api/apiClient';

// Helper component for a single course list item
const CourseListItem = ({ courseTitle }) => (
  <Link 
    to="#" // You can change this to /course/id later
    className="flex items-center p-4 bg-white rounded-xl shadow-sm transition-all hover:shadow-md"
  >
    <div className="mr-4">
      <i className="fa-solid fa-play-circle text-3xl text-blue-500"></i>
    </div>
    <div className="flex-grow">
      {/* Renders the course title string from the API */}
      <h3 className="font-semibold text-gray-800">{courseTitle}</h3>
      <p className="text-sm text-gray-500">View course details</p>
    </div>
    <div className="ml-4">
      <i className="fa-solid fa-chevron-right text-gray-400"></i>
    </div>
  </Link>
);

// Main page component
function RecommendedCourses() {
  const navigate = useNavigate();
  
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch initial courses when the page loads
  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      setError(null);
      try {
        // Calls the /api/ml/courses endpoint
        const response = await apiClient.get('/ml/courses'); 
        
        console.log("Courses API Response:", response.data); 
        
        // Sets the courses state to the array from the API
        setCourses(response.data.sample_courses); 
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load recommendations. Please try again.');
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []); // Runs once on page load

  // Handle the search form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) return;

    setLoading(true);
    setError(null);
    try {
      // Calls the /api/ml/search endpoint
      const response = await apiClient.get(`/ml/search?q=${searchTerm}`);
      
      console.log("Search API Response:", response.data);
      
      // Assumes search also returns an array of strings
      setCourses(response.data); 
      setLoading(false);
    } catch (err)
      {
      console.error(err);
      setError('Search failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <div className="max-w-3xl mx-auto p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Recommended For You
          </h1>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 px-4 py-2 font-medium text-gray-700 bg-white rounded-lg shadow-sm hover:bg-gray-50"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>Back to Dashboard</span>
          </button>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8 flex gap-2">
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for courses..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            className="px-5 py-2 font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
          >
            Search
          </button>
        </form>

        {/* Course List */}
        <div className="space-y-4">
          {loading && (
            <p className="text-center text-gray-500">Loading courses...</p>
          )}

          {error && (
            <p className="text-center text-red-500">{error}</p>
          )}

          {!loading && !error && courses.length === 0 && (
            <p className="text-center text-gray-500">No courses found.</p>
          )}

          {!loading && !error && courses.map((courseTitle, index) => (
            // Pass the courseTitle string as a prop
            <CourseListItem key={index} courseTitle={courseTitle} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default RecommendedCourses;