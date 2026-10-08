import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { LanguageProvider } from './i18n/LanguageProvider.jsx';
import App from './App.jsx';
import Experience from './components/experience/Experience.jsx';
import Skills from './components/skills/skills.jsx';
import Proyects from './components/proyects/proyects.jsx';
import Contact from './components/contact/contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<App />} />

          {/* Vista de experiencia */}
          <Route path="/experiencia" element={<Experience />} />

          {/* Vista de habilidades */}
          <Route path="/habilidades" element={<Skills />} />

          {/* Vista de proyectos */}
          <Route path="/proyectos" element={<Proyects />} />

          {/* Vista de contacto */}
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);
