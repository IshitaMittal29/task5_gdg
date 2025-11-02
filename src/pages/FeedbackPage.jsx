import React from 'react';
import { useNavigate } from 'react-router-dom';

function FeedbackPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    navigate('/dashboard'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-inter">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Share your Feedback
        </h2>
        <p className="text-sm text-center text-gray-600">
          How was your experience with the course?
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* --- 5-Star Rating Component --- */}
          <div>
            <label className="block text-lg font-medium text-center text-gray-700 mb-2">
              Your Rating
            </label>
            {/* This is a CSS-based star rating system.
              We style radio inputs (which are hidden)
              and their <label> tags (which are the stars).
            */}
            <div 
              className="flex justify-center items-center space-x-1" 
              style={{
                // We reverse the direction so :hover works correctly
                flexDirection: 'row-reverse', 
                textAlign: 'left',
              }}
            >
              {/* Each star is a label for a hidden radio button */}
              <input type="radio" id="star5" name="rating" value="5" className="hidden" />
              <label htmlFor="star5" className="star-label text-4xl text-gray-300 cursor-pointer hover:text-yellow-400 peer-hover:text-yellow-400">★</label>
              
              <input type="radio" id="star4" name="rating" value="4" className="hidden" />
              <label htmlFor="star4" className="star-label text-4xl text-gray-300 cursor-pointer hover:text-yellow-400 peer-hover:text-yellow-400">★</label>
              
              <input type="radio" id="star3" name="rating" value="3" className="hidden" />
              <label htmlFor="star3" className="star-label text-4xl text-gray-300 cursor-pointer hover:text-yellow-400 peer-hover:text-yellow-400">★</label>
              
              <input type="radio" id="star2" name="rating" value="2" className="hidden" />
              <label htmlFor="star2" className="star-label text-4xl text-gray-300 cursor-pointer hover:text-yellow-400 peer-hover:text-yellow-400">★</label>
              
              <input type="radio" id="star1" name="rating" value="1" className="hidden" />
              <label htmlFor="star1" className="star-label text-4xl text-gray-300 cursor-pointer hover:text-yellow-400 peer-hover:text-yellow-400">★</label>

              {/* This CSS is a bit complex, so we'll add it to index.css */}
            </div>
          </div>
          {/* --- End of 5-Star Rating --- */}

          <div>
            <label 
              htmlFor="comments" 
              className="block text-sm font-medium text-gray-700"
            >
              Your Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              rows="4"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tell us more about your experience..."
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FeedbackPage;