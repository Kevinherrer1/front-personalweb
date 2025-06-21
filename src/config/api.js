// Configuración de la API para diferentes entornos
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api-personalweb.onrender.com';

export const API_ENDPOINTS = {
  TECHNOLOGIES: `${API_BASE_URL}/technologies`,
  PROJECTS: `${API_BASE_URL}/projects`,
};

export default API_BASE_URL; 