import axios from 'axios';

const apiClient = axios.create({
  // Use the relative path to the proxy
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;