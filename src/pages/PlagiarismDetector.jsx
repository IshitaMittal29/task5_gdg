import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PlagiarismDetector() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // To store the result

  const handleCheckPlagiarism = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    // --- FAKE API CALL ---
    // In a real app, you'd send this to your API
    // await axios.post('/api/plagiarism-check', { content: text });
    
    console.log("Checking for plagiarism:", text);
    
    // Simulate a 2-second API call
    setTimeout(() => {
      setLoading(false);
      // Simulate a fake result
      const fakeScore = Math.floor(Math.random() * 20) + 5; // 5-25%
      setResult(`This content shows an estimated ${fakeScore}% plagiarism match.`);
    }, 2000);
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
              disabled={loading}
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
        </div>

      </div>
    </div>
  );
}

export default PlagiarismDetector;