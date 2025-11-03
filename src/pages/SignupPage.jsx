import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
  const [role, setRole] = useState('student'); 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-inter">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create your account
        </h2>
        
        <form className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Register as
            </label>
            <div className="flex mt-1 rounded-md shadow-sm">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex-1 px-4 py-2 text-sm font-medium border rounded-l-md focus:outline-none ${
                  role === 'student'
                    ? 'bg-blue-600 text-white border-blue-600 z-10'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => setRole('creator')}
                className={`flex-1 px-4 py-2 -ml-px text-sm font-medium border rounded-r-md focus:outline-none ${
                  role === 'creator'
                    ? 'bg-blue-600 text-white border-blue-600 z-10'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                Creator
              </button>
            </div>
          </div>

          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-700"
            >
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="flex mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
              <button
                type="button"
                className="px-4 py-2 -ml-px text-sm font-medium text-blue-700 bg-blue-100 border border-blue-200 rounded-r-md hover:bg-blue-200 focus:outline-none"
              >
                Send OTP
              </button>
            </div>
          </div>

          <div>
            <label 
              htmlFor="otp" 
              className="block text-sm font-medium text-gray-700"
            >
              6-Digit Verification Code
            </label>
            <input
              id="otp"
              name="otp"
              type="text"
              maxLength="6"
              required
              className="w-full px-3 py-2 mt-1 tracking-widest text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••"
            />
          </div>
          {/* --- End of OTP Verification --- */}

          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create account
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;