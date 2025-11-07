import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // 1. Import axios

function PlagiarismDetector() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null); // 2. Add state for errors

  const handleCheckPlagiarism = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null); // 3. Reset error

    try {
      const response = await axios.post('/api/ml/plagiarism/detect', {
        content: text, 
      });

      console.log("Plagiarism API Response:", response.data);
      
      setLoading(false);

     
      const score = response.data.plagiarismPercentage;
      if (score !== undefined) {
        setResult(`This content has an estimated ${score.toFixed(2)}% plagiarism match.`);
      } else {
        setResult(response.data.message || 'Check complete. Unknown response format.');
      }

    } catch (err) {
      console.error(err);
      setLoading(false);
      setError(err.response?.data?.message || 'Failed to check plagiarism.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <div className="max-w-3xl mx-auto p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Plagiarism Detection
          </h1>
          <button 
            onClick={() => navigate(-1)} // Go back
            className="flex items-center space-x-2 px-4 py-2 font-medium text-gray-700 bg-white rounded-lg shadow-sm hover:bg-gray-50"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>Back to Dashboard</span>
          </button>
        </div>

        {/* Plagiarism Checker Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleCheckPlagiarism}>
            <label 
              htmlFor="course-content" 
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Enter Course Content or Notes
            </label>
            <textarea
              id="course-content"
              rows="12"
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Paste your course content here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            
            <button
              type="submit"
              disabled={loading || !text}
              className="w-full mt-6 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400"
            >
              {loading ? 'Checking...' : 'Check Plagiarism'}
            </button>
          </form>

          {/* Result Area */}
          {result && !loading && (
            <div className="mt-6 p-4 text-center bg-blue-50 text-blue-800 rounded-lg">
              <p className="font-semibold">{result}</p>
            </div>
          )}
          
          {/* 8. Show error message */}
          {error && !loading && (
            <div className="mt-6 p-4 text-center bg-red-50 text-red-800 rounded-lg">
              <p className="font-semibold">{error}</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default PlagiarismDetector;