// src/utils/axiosInstance.js
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000'; // Default to local backend

const axiosInstance = axios.create({ baseURL });


axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Get token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
