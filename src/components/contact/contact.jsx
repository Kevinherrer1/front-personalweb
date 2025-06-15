import React from 'react';
import './contact.css';
import avatar from './assets/avatar2.JPG';
import { Link } from 'react-router-dom';
import linkedin from './assets/linkedin.png';
import gmail from './assets/gmail.png';
import github from './assets/github.png';

function Contact() {
  return (
    <div className="container">
      <aside className="menu">
        <ul>
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/habilidades">HABILIDADES</Link>
          </li>
          <li>
            <Link to="/proyectos">PROYECTOS</Link>
          </li>
          <li className="active">
            <Link to="/contacto">CONTACTO</Link>
          </li>
        </ul>
      </aside>

      <main className="content">
        <h1>≫ CONTACTO ≪</h1>
        <div className="contact-body">
          <img src={avatar} alt="Avatar" className="avatar" />
          <div className="contact-info">
            
            <a
              href="https://github.com/kevinherrer1"
              target="_blank"
              rel="noopener noreferrer"
              className="box"
            >
              <p>• GitHub</p>
              <p>
                <img src={github} className="icon" alt="GitHub" />
                Kevinherrer1
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/kevinherrera"
              target="_blank"
              rel="noopener noreferrer"
              className="box"
            >
              <p>• LinkedIn</p>
              <p>
                <img src={linkedin} className="icon" alt="LinkedIn" />
                Kevin Herrera
              </p>
            </a>

            <a
              href="mailto:kevinherrerak14@gmail.com"
              className="box"
            >
              <p>• Correo electrónico</p>
              <p>
                <img src={gmail} className="icon" alt="Gmail" />
                kevinherrerak14@gmail.com
              </p>
            </a>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
