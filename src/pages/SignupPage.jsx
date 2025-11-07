import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupPage() {
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
  });
  const [otp, setOtp] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const setRole = (newRole) => {
    setFormData({ ...formData, role: newRole });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/auth/register', formData);
      
      console.log(response.data);
      setLoading(false);
      setStep(2); 
      
    } catch (err) {
      console.error("Registration Error:", err.response); 
      setLoading(false);
      
        if (err.response && err.response.status === 409) {
        setError("This email address is already registered.");
      } else if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/auth/verify-otp', {
        email: formData.email,
        otp: otp,
      });

      console.log(response.data);
      setLoading(false);
      alert('Account verified successfully! Please log in.');
      navigate('/login');

    } catch (err) {
      console.error(err);
      setLoading(false);
      setError(err.response?.data?.message || 'Invalid OTP. Please try again.');
    }
  };
  
  const handleResendOtp = async () => {
    setLoading(true);
    setError(null);
    try {
      await axios.post('/api/auth/resend-otp', { email: formData.email });
      setLoading(false);
      alert('A new OTP has been sent to your email.');
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Failed to resend OTP.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-inter">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        
        {/* --- STEP 1: REGISTRATION FORM --- */}
        {step === 1 && (
          <>
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Create your account
            </h2>
            <form className="space-y-6" onSubmit={handleRegister}>
              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Register as</label>
                <div className="flex mt-1 rounded-md shadow-sm">
                  <button
                    type="button"
                    onClick={() => setRole('student')}
                    className={`flex-1 px-4 py-2 text-sm font-medium border rounded-l-md focus:outline-none ${
                      formData.role === 'student' ? 'bg-blue-600 text-white border-blue-600 z-10' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('creator')}
                    className={`flex-1 px-4 py-2 -ml-px text-sm font-medium border rounded-r-md focus:outline-none ${
                      formData.role === 'creator' ? 'bg-blue-600 text-white border-blue-600 z-10' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Creator
                  </button>
                </div>
              </div>
              
              {/* Form Fields */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                <input
                  id="name" name="name" type="text" required
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input
                  id="email" name="email" type="email" autoComplete="email" required
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="password" name="password" type="password" autoComplete="new-password" required
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {/* Error Message */}
              {error && <p className="text-sm text-center text-red-600">{error}</p>}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
                >
                  {loading ? 'Creating...' : 'Create account'}
                </button>
              </div>
            </form>
            <p className="text-sm text-center text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Log in
              </Link>
            </p>
          </>
        )}

        {/* --- STEP 2: OTP VERIFICATION --- */}
        {step === 2 && (
          <>
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Verify your email
            </h2>
            <p className="text-sm text-center text-gray-600">
              We sent a 6-digit code to <strong>{formData.email}</strong>. Please enter it below.
            </p>
            <form className="space-y-6" onSubmit={handleVerifyOtp}>
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  6-Digit Verification Code
                </label>
                <input
                  id="otp" name="otp" type="text" maxLength="6" required
                  className="w-full px-3 py-2 mt-1 tracking-widest text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              
              {error && <p className="text-sm text-center text-red-600">{error}</p>}

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
                >
                  {loading ? 'Verifying...' : 'Verify Account'}
                </button>
              </div>
            </form>
            <div className="text-sm text-center text-gray-600">
              Didn't get the code?{' '}
              <button
                onClick={handleResendOtp}
                disabled={loading}
                className="font-medium text-blue-600 hover:text-blue-500 disabled:text-gray-400"
              >
                Resend OTP
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default SignupPage;