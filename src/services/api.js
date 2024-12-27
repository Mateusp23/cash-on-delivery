import axios from 'axios';

const API_BASE_URL = 'https://api-candidate.ogruposix.com';
const USER_TOKEN = import.meta.env.VITE_USER_TOKEN;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'user-token': USER_TOKEN,
    'Content-Type': 'application/json',
  },
});

export default api;
