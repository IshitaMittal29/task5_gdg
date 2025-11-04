import axios from 'axios';

// Create a new axios instance
const apiClient = axios.create({
  // Our Vite proxy will catch this /api prefix
  baseURL: '/api', 
});

// This is an "interceptor"
// It runs BEFORE every request is sent
apiClient.interceptors.request.use(
  (config) => {
    // 1. Get the token from localStorage
    const token = localStorage.getItem('token');
    
    // 2. If the token exists, add it to the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config; // 3. Send the request
  },
  (error) => {
    // Handle any request errors
    return Promise.reject(error);
  }
);

export default apiClient;