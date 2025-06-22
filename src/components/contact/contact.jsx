import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { API_ENDPOINTS } from '../../config/api';
import './contact.css';
import '../menu/Menu.css';
import Menu from '../menu/Menu';
import avatar from './assets/avatar2.JPG';
import linkedin from './assets/linkedin.png';
import gmail from './assets/gmail.png';
import github from './assets/github.png';

function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, token, isAuthenticated } = useAuth();
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ type: '', message: ''}); // success o error

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    setStatus({ type: '', message: '' });

    console.log("Enviando token:", token);

    try {
      const response = await fetch(API_ENDPOINTS.MESSAGES, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ content: message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'No se pudo enviar el mensaje.');
      }

      setMessage('');
      setStatus({ type: 'success', message: '¡Mensaje enviado con éxito!' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className="container">
      <aside className="menu">
        <Menu />
      </aside>

      <main className="content">
        <button className="menu-toggle" onClick={toggleMenu}>☰ Menú</button>
        <div className="mobile-menu-wrapper">
          <nav className={`menu mobile-menu ${menuOpen ? 'show' : ''}`}>
            <Menu isMobile={true} onLinkClick={() => setMenuOpen(false)} />
          </nav>
        </div>

        <h1>≫ CONTACTO ≪</h1>
        
        {isAuthenticated ? (
          <div className="contact-form-container">
            <h3>¡Hola, {user?.username}! Envíame un mensaje:</h3>
            <form onSubmit={handleMessageSubmit} className="contact-form">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje aquí..."
                required
              />
              <button type="submit" className="submit-btn">Enviar Mensaje</button>
            </form>
            {status.message && <p className={`status-${status.type}`}>{status.message}</p>}
          </div>
        ) : (
          <div className="login-prompt">
            <p>Debes <Link to="/auth">iniciar sesión</Link> para poder enviar un mensaje.</p>
          </div>
        )}

        <div className="contact-body">
          <img src={avatar} alt="Avatar" className="avatar" />
          <div className="contact-info">
            
            <a href="https://github.com/kevinherrer1" target="_blank" rel="noopener noreferrer" className="box">
              <p>• GitHub</p>
              <p><img src={github} className="icon" alt="GitHub" /> Kevinherrer1</p>
            </a>

            <a href="https://www.linkedin.com/in/kevinherrera" target="_blank" rel="noopener noreferrer" className="box">
              <p>• LinkedIn</p>
              <p><img src={linkedin} className="icon" alt="LinkedIn" /> Kevin Herrera</p>
            </a>

            <a href="mailto:kevinherrerak14@gmail.com" className="box">
              <p>• Correo electrónico</p>
              <p><img src={gmail} className="icon" alt="Gmail" /> kevinherrerak14@gmail.com</p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
