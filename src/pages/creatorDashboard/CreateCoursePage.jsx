import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // The typo was 'in' instead of 'from'

// import apiClient from '../../api/apiClient'; // We'll need this later

function CreateCoursePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    // TODO: Connect this to the POST /api/course/create-course endpoint
    
    const formData = {
      title: e.target.title.value,
      description: e.target.description.value,
      category: e.target.category.value,
      price: e.target.price.value,
    };
    
    console.log("Form Data:", formData);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Course created successfully! (UI Demo)");
      navigate('/creator-dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <div className="max-w-4xl mx-auto p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Create a New Course
          </h1>
          <button 
            onClick={() => navigate(-1)} // Go back
            className="flex items-center space-x-2 px-4 py-2 font-medium text-gray-700 bg-white rounded-lg shadow-sm hover:bg-gray-50"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>Back to Dashboard</span>
          </button>
        </div>

        {/* Create Course Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Course Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Course Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Introduction to Python"
              />
            </div>
            
            {/* Course Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Course Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="What will students learn in this course?"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  required
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Programming"
                />
              </div>
              
              {/* Price */}
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price (in ₹)
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  required
                  min="0"
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 499"
                />
              </div>
            </div>

            {/* Thumbnail Upload (UI only) */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course Thumbnail
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <i className="fa-solid fa-image text-4xl text-gray-400"></i>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            {error && <p className="text-sm text-center text-red-600">{error}</p>}
            
            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex justify-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400"
              >
                {loading ? 'Creating...' : 'Create Course'}
              </button>
            </div>
            
          </form>
        </div>

      </div>
    </div>
  );
}

export default CreateCoursePage;