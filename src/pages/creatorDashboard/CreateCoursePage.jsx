import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import apiClient from '../../api/apiClient'; 

function CreateCoursePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
  });
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };
  const handleThumbnailChange = (e) => {
    setThumbnailFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!videoFile || !thumbnailFile) {
      setError('Please upload both a video and a thumbnail.');
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description); 
    data.append('category', formData.category);
    data.append('price', formData.price);
    data.append('video', videoFile);
    data.append('file', thumbnailFile); 

    try {
      const response = await apiClient.post('/course/create', data);

      console.log("Course created:", response.data);
      setLoading(false);
      alert("Course created successfully!");
      navigate('/creator-dashboard'); 

    } catch (err) {
      console.error(err);
      setLoading(false);
      setError(err.response?.data?.message || 'Failed to create course.');
    }
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
            onClick={() => navigate(-1)} 
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
                type="text" id="title" name="title" required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                placeholder="e.g., Introduction to Python"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            
            {/* Course Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Course Description
              </label>
              <textarea
                id="description" name="description" rows="4" required
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm"
                placeholder="What will students learn in this course?"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <input
                  type="text" id="category" name="category" required
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                  placeholder="e.g., Programming"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>
              {/* Price */}
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price (in ₹)
                </label>
                <input
                  type="number" id="price" name="price" required min="0"
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                  placeholder="e.g., 499"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            {/* Thumbnail Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course Thumbnail (Image)
              </label>
              <input 
                type="file" 
                name="thumbnail" 
                accept="image/png, image/jpeg"
                required
                onChange={handleThumbnailChange}
                className="w-full mt-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {thumbnailFile && <span className="text-sm text-gray-600">{thumbnailFile.name}</span>}
            </div>

            {/* Video Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course Video
              </label>
              <input 
                type="file" 
                name="video" 
                accept="video/mp4, video/quicktime"
                required
                onChange={handleVideoChange}
                className="w-full mt-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {videoFile && <span className="text-sm text-gray-600">{videoFile.name}</span>}
            </div>

            {error && <p className="text-sm text-center text-red-600">{error}</p>}
            
            <div className="text-right">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex justify-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 disabled:bg-gray-400"
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