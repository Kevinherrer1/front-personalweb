// Configuración de la API para diferentes entornos
const API_BASE_URL = 'http://localhost:3000'; // Asegúrate de que este sea el puerto correcto de tu API

export const API_ENDPOINTS = {
  BASE_URL: API_BASE_URL,
  TECHNOLOGIES: `${API_BASE_URL}/technologies`,
  PROJECTS: `${API_BASE_URL}/projects`,
  MESSAGES: `${API_BASE_URL}/messages`,
  AUTH_LOGIN: `${API_BASE_URL}/auth/login`,
  AUTH_REGISTER: `${API_BASE_URL}/auth/register`,
};

export default API_BASE_URL; 