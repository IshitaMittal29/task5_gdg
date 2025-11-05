import React from 'react';
import { Link } from 'react-router-dom';

function PaymentSuccess() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-inter">
      <div className="p-10 text-center bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-green-500 mb-4">
          ✔ Payment Successful
        </h2>
        <p className="text-gray-600 mb-8">
          Thank you! Your course has been successfully purchased.
        </p>
        <Link
          to="/dashboard"
          className="px-6 py-3 font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
        >
          Go to Your Dashboard
        </Link>
      </div>
    </div>
  );
}

export default PaymentSuccess;