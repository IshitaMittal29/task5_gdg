import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiClient from '../api/apiClient'; 

function PaymentPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const billingDetails = {
      name: e.target.name.value,
      email: e.target.email.value,
    };

    try {
      const orderResponse = await apiClient.post('/payments/create-order', {
        courseId: 2, 
      });

      console.log("Create Order API Response:", orderResponse.data);

      const orderId = orderResponse.data.id;
      const orderAmount = orderResponse.data.amount;

      const options = {
        key: "rzp_test_RZoYCCZlPKea2x", 
        amount: orderAmount,
        currency: orderResponse.data.currency,
        name: "E-Learning Platform",
        description: "Course Payment",
        order_id: orderId,
        handler: function (response) {
          console.log("Razorpay Response:", response);
          navigate('/payment-success', { state: { orderId: response.razorpay_order_id } });
        },
        prefill: {
          name: billingDetails.name,
          email: billingDetails.email,
        },
        theme: {
          color: "#2563eb",
        },
      };
      
      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on('payment.failed', function (response) {
        console.error("Razorpay payment failed:", response.error);
        navigate('/payment-failed', { state: { error: response.error.description } });
      });

    } catch (err) {
      console.error(err);
      
      if (err.response && err.response.status === 401) {
        setError("You must be logged in to make a payment.");
      } else {
        setError(err.response?.data?.message || 'Failed to create order. Please try again.');
      }
      
      setLoading(false);
    }
    
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-inter">
      <div className="w-full max-w-4xl p-8 mx-4 bg-white rounded-lg shadow-lg md:flex md:space-x-12">
        
        <form className="w-full md:flex md:space-x-12" onSubmit={handlePayment}>
        
          {/* Left Side: Billing Details */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Billing Details
            </h2>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name" 
                required
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
                name="email" 
                required
                placeholder="you@example.com" 
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
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
                  <span className="font-medium text-gray-900">₹499.00</span> 
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-medium text-red-600">-₹0.00</span> 
                </div>
                <div className="border-t my-2 pt-3"></div>
                <div className="flex justify-between">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-lg font-bold text-gray-900">₹499.00</span> 
                </div>
              </div>
            </div>

            {/* Payment Details Form */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Payment Details
            </h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-md bg-gray-50 text-gray-700">
                You will be redirected to our secure payment partner (Razorpay) to enter your card details.
              </div>
              
              {error && <p className="text-sm text-center text-red-600">{error}</p>}
              
              <button
                type="submit"
                disabled={loading}
                className="flex justify-center w-full px-4 py-3 text-lg font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
              >
                {loading ? 'Processing...' : 'Pay ₹499.00'} 
              </button>
              <p className="text-xs text-center text-gray-500">
                Payments are secure and encrypted.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentPage;