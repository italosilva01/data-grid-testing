import axios from 'axios';
import { toast } from 'sonner';
import { API_CONFIG } from './api.config';

export const axiosInstance = axios.create(API_CONFIG);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data?.message || '';

      switch (status) {
        case 400:
          toast.error('Requisição inválida', { 
            description: message || 'Verifique os dados enviados e tente novamente.' 
          });
          break;

        case 401:
          toast.error('Não autorizado', { 
            description: 'Você precisa estar autenticado para acessar este recurso.' 
          });
          break;

        case 403:
          toast.error('Acesso negado', { 
            description: 'Você não tem permissão para acessar este recurso.' 
          });
          break;

        case 404:
          toast.error('Recurso não encontrado', { 
            description: 'O recurso solicitado não foi encontrado.' 
          });
          break;

        case 429:
          toast.error('Muitas requisições', { 
            description: 'Aguarde alguns instantes antes de tentar novamente.' 
          });
          break;

        default:
          if (status >= 500) {
            toast.error('Erro no servidor', { 
              description: 'Não foi possível buscar os recursos. Tente novamente em alguns instantes.' 
            });
          }
      }
    } 
    else if (error.request) {
      toast.error('Falha na requisição', { 
        description: 'Verifique sua conexão com a internet e tente novamente.',
        duration: 5000,
      });
    } 
    // Timeout
    else if (error.code === 'ECONNABORTED') {
      toast.error('Tempo esgotado', { 
        description: 'A requisição demorou muito para responder.' 
      });
    }

    return Promise.reject(error);
  }
);

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
