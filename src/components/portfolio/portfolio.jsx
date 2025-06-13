import React from 'react';
import './portfolio.css';
import avatar from './assets/avatar.png'; 
import { Link } from 'react-router-dom';



function Portfolio() {
    return (
        <div className="container">
            <aside className="menu">
                <ul>
                    <li className="active">
                        <Link to="/">INICIO</Link>
                    </li>
                    <li>
                        <Link to="/habilidades">HABILIDADES</Link>
                    </li>
                    <li>
                        <Link to="/proyectos">PROYECTOS</Link>
                    </li>
                    <li>
                        <Link to="/contacto">CONTACTO</Link>
                    </li>
                </ul>
            </aside>


            <main className="content">
                <h1>»» BIENVENIDO ««</h1>
                <div className="profile">
                    {<img src={avatar} alt="Avatar de Kevin" />}
                    <div className="info">
                        <h2>Kevin Herrera</h2>
                        <ul>
                            <li>📌 24 años</li>
                            <li>📌 2 años de experiencia en Desarrollo Web</li>
                            <li>📌 Mayor habilidad en Backend</li>
                        </ul>
                    </div>
                </div>
                <div className="description">
                    Soy estudiante en proceso de formación en Ingeniería en Informática, actualmente trabajando en el área de desarrollo web en la empresa CVG...
                </div>
                <div className="controls">
                    <span className="btn">🅰 Seleccionar</span>
                    <span className="btn">🅱 Atrás</span>
                </div>
            </main>
        </div>
    );
}

export default Portfolio;
