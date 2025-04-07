import api from './api';

// Interface para o formulário de contato
export interface loginFormData {
  email: string;
  password: string;
}

// API de contatos
const loginService = {
  //Verificar credenciais de login
  verifyCredentials: async (data: loginFormData) => {

  }
  
};

export default loginService; 