# API Service

Serviço centralizado para chamadas HTTP usando Axios.

## Uso

```typescript
import { api } from '@shared/services/api';

// GET
const users = await api.get('/users');
const user = await api.get<User>('/users/1');

// POST
const newUser = await api.post('/users', { name: 'João' });

// PUT
const updatedUser = await api.put('/users/1', { name: 'João Silva' });

// PATCH
const patchedUser = await api.patch('/users/1', { name: 'João' });

// DELETE
await api.delete('/users/1');
```

## Configuração

Edite `api.config.ts` para alterar a baseURL, timeout, headers, etc.

```typescript
export const API_CONFIG = {
  baseURL: 'https://api.exemplo.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};
```

## Interceptors

Para adicionar interceptors (autenticação, logs, etc), edite `api.instance.ts`:

```typescript
// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirecionar para login
    }
    return Promise.reject(error);
  }
);
```
