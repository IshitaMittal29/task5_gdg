import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function PaymentPage() {
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    // In a real app, you would send this to Stripe, etc.
    alert("Payment successful! (Not really, this is a demo)");
    navigate('/dashboard'); // Redirect to dashboard after 'payment'
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-inter">
      <div className="w-full max-w-4xl p-8 mx-4 bg-white rounded-lg shadow-lg md:flex md:space-x-12">
        
        {/* Left Side: Billing Details */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Billing Details
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Billing Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="123 Main St"
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                  ZIP / Postal Code
                </label>
                <input
                  type="text"
                  id="zip"
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Right Side: Payment Details & Order Summary */}
        <div className="w-full mt-8 md:w-1/2 md:mt-0">
          {/* Order Summary */}
          <div className="p-6 mb-6 bg-gray-50 rounded-lg border">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Pro Plan (Annual)</span>
                <span className="font-medium text-gray-900">$120.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Discount (FIRSTYEAR)</span>
                <span className="font-medium text-red-600">-$20.00</span>
              </div>
              <div className="border-t my-2 pt-3"></div>
              <div className="flex justify-between">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-lg font-bold text-gray-900">$100.00</span>
              </div>
            </div>
          </div>

          {/* Payment Details Form */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Payment Details
          </h2>
          <form className="space-y-4" onSubmit={handlePayment}>
            <div>
              <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  id="card-number"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0000 0000 0000 0000"
                />
                <i className="fa-regular fa-credit-card absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="MM / YY"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="123"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-3 text-lg font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Pay $100.00
            </button>
            <p className="text-xs text-center text-gray-500">
              Payments are secure and encrypted.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;