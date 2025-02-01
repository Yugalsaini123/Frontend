// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const getFAQs = async (lang = 'en') => {
  try {
    const response = await api.get(`/faqs?lang=${lang}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    throw error;
  }
};

export const createFAQ = async (data) => {
  try {
    const response = await api.post('/faqs', data);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Network Error';
    throw new Error(errorMessage);
  }
};