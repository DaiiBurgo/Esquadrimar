import api from './api';

// Interface para o formulário de contato
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// API de contatos
const contactService = {
  // Enviar mensagem de contato
  sendContactMessage: async (data: ContactFormData) => {
    try {
      const response = await api.post('/contact/create/', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Obter todas as mensagens (apenas para admin)
  getAllMessages: async () => {
    try {
      const response = await api.get('/contact/');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Obter uma mensagem específica (apenas para admin)
  getMessage: async (id: number) => {
    try {
      const response = await api.get(`/contact/${id}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Marcar mensagem como lida/não lida (apenas para admin)
  updateMessageReadStatus: async (id: number, isRead: boolean) => {
    try {
      const response = await api.patch(`/contact/${id}/`, { read: isRead });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Excluir mensagem (apenas para admin)
  deleteMessage: async (id: number) => {
    try {
      const response = await api.delete(`/contact/${id}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default contactService; 