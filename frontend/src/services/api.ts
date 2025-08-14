import axios from 'axios';

// Add this line to check the value in the browser's console
console.log('VITE_API_BASE_URL:', import.meta.env.VITE_API_BASE_URL);

const apiClient = axios.create({
  // Use the environment variable directly
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
