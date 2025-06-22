import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './index.css';
import App from './App.jsx';
import Auth from './components/auth/auth.jsx';
import Skills from './components/skills/skills.jsx';
import Proyects from './components/proyects/proyects.jsx';
import Contact from './components/contact/contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<App />} />

          {/* Vista de autenticación */}
          <Route path="/auth" element={<Auth />} />

          {/* Vista de habilidades */}
          <Route path="/habilidades" element={<Skills />} />

          {/* Vista de proyectos */}
          <Route path="/proyectos" element={<Proyects />} />

          {/* Vista de contacto */}
          <Route path="/contacto" element={<Contact />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
