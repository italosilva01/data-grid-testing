import axios from 'axios';
import { API_CONFIG } from './api.config';

export const axiosInstance = axios.create(API_CONFIG);

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
