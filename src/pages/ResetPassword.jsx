import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ResetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password has been reset!");
    alert("Password reset successfully!");
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-inter">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Set a new password
        </h2>
        <p className="text-sm text-center text-gray-600">
          Please enter the 6-digit OTP sent to your email and create a new password.
        </p>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label 
              htmlFor="otp" 
              className="block text-sm font-medium text-gray-700"
            >
              6-Digit OTP
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

          <div>
            <label 
              htmlFor="new-password" 
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              id="new-password"
              name="new-password"
              type="password"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label 
              htmlFor="confirm-password" 
              className="block text-sm font-medium text-gray-700"
            >
              Confirm New Password
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
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
              Reset Password
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-gray-600">
          Remember your password?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ResetPassword;