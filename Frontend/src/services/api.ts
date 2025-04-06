import axios from 'axios';

// URL base da API
const API_URL = 'http://localhost:8000/api';

// Criação da instância do axios com a URL base
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para tratamento de erros
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // O servidor respondeu com um status de erro
      console.error('Erro na resposta da API:', error.response.data);
    } else if (error.request) {
      // A requisição foi feita mas nenhuma resposta foi recebida
      console.error('Sem resposta da API:', error.request);
    } else {
      // Erro ao configurar requisição
      console.error('Erro na configuração da requisição:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api; 