import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';   
import './index.css';
import App      from './App.jsx';
import Skills   from './components/skills/skills.jsx';
import Proyects from './components/proyects/proyects.jsx'; 
import Contact from './components/contact/contact.jsx';             

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<App />} />

        {/* Vista de habilidades */}
        <Route path="/habilidades" element={<Skills />} />

        {/* Vista de habilidades */}
        <Route path="/proyectos" element={<Proyects />} />

        {/* Vista de habilidades */}
        <Route path="/contacto" element={<Contact />} />


      </Routes>
    </BrowserRouter>
  </StrictMode>
);
