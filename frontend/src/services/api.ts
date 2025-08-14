import axios from 'axios';

const apiClient = axios.create({
  // Use the environment variable directly
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
