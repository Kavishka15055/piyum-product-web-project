import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const fetchServices = async () => {
  const response = await api.get('/services');
  return response.data;
};

export const sendContactMessage = async (data: any) => {
  const response = await api.post('/contact', data);
  return response.data;
};