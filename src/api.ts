import axios from 'axios';

const API_CONFIG = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  //baseURL: 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};
const axiosInstance = axios.create(API_CONFIG);

export const api = {
  // GET
  get: async <T = unknown>(url: string, config = {}) => {
    const response = await axiosInstance.get<T>(url, config);
    return response.data;
  },

  // POST
  post: async <T = unknown>(url: string, data?: unknown, config = {}) => {
    const response = await axiosInstance.post<T>(url, data, config);
    return response.data;
  },

  // PUT
  put: async <T = unknown>(url: string, data?: unknown, config = {}) => {
    const response = await axiosInstance.put<T>(url, data, config);
    return response.data;
  },

  // PATCH
  patch: async <T = unknown>(url: string, data?: unknown, config = {}) => {
    const response = await axiosInstance.patch<T>(url, data, config);
    return response.data;
  },

  // DELETE
  delete: async <T = unknown>(url: string, config = {}) => {
    const response = await axiosInstance.delete<T>(url, config);
    return response.data;
  },
};

export { axiosInstance };

export default api;

