import React, { useState } from 'react';
import './proyects.css';
import { Link } from 'react-router-dom';
import githubIcon from './assets/githubicon.png';



function Proyects() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (

        <div className='container'>

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


            <div className="proyects-container">
                {/* Botón para móvil */}
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰ Menú
                </button>
                {/* Menú móvil siempre en el DOM */}
                <div className="mobile-menu-wrapper">
                    <nav className={`menu mobile-menu ${menuOpen ? 'show' : ''}`}>
                        <ul>
                            <li>
                                <Link to="/" onClick={() => setMenuOpen(false)}>INICIO</Link></li>
                            <li>
                                <Link to="/habilidades" onClick={() => setMenuOpen(false)}>HABILIDADES</Link>
                            </li>
                            <li>
                                <Link to="/proyectos" onClick={() => setMenuOpen(false)}>PROYECTOS</Link>
                            </li>
                            <li>
                                <Link to="/contacto" onClick={() => setMenuOpen(false)}>CONTACTO</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <h1>»» PROYECTOS ««</h1>
                <div className="proyects-lista">

                    <div className="proyecto">
                        <img src={githubIcon} alt="GitHub" className="icon" />
                        <div>
                            <a href="https://github.com/Kevinherrer1/JuegoDamas_Q-Learning" target="_blank" rel="noopener noreferrer">
                                <strong className="titulo-proyecto">• JuegoDamas_Q-Learning</strong>
                            </a>
                            <p>
                                Implemnetación de un agente autónomo capaz de jugar Damas en un tablero reducido de 4x4, utilizando el algoritmo Q-Learning para mejorar su rendimiento a medida que juega más partidas.
                            </p>
                        </div>
                    </div>
                    <div className="proyecto">
                        <img src={githubIcon} alt="GitHub" className="icon" />
                        <div>
                            <a href="https://github.com/Kevinherrer1/JuegoDamas_Agente" target="_blank" rel="noopener noreferrer">
                                <strong className="titulo-proyecto">• JuegoDamas_Agente</strong>
                            </a>
                            <p>
                                Juego de Damas implementado en Python, donde puedes jugar contra una Inteligencia Artificial (IA) utilizando el algoritmo Minimax
                            </p>
                        </div>
                    </div>

                    <div className="proyecto">
                        <img src={githubIcon} alt="GitHub" className="icon" />
                        <div>
                            <a href="https://github.com/Kevinherrer1/ProyectoIO_IA" target="_blank" rel="noopener noreferrer">
                                <strong className="titulo-proyecto">• ProyectoIO_IA</strong>
                            </a>
                            <p>
                                Este repositorio contiene un script en Python que utiliza un modelo de aprendizaje automático para predecir el tiempo de entrega en un servicio de delivery.
                            </p>
                        </div>
                    </div>

                    <div className="proyecto">
                        <img src={githubIcon} alt="GitHub" className="icon" />
                        <div>
                            <a href="https://github.com/Callaquenoveo/Proyecto-Cassandra" target="_blank" rel="noopener noreferrer">
                                <strong className="titulo-proyecto">• Proyecto-Cassandra</strong>
                            </a>
                            <p>
                                Sistema de gestión de supermercado desarrollado con Flask y Cassandra. Permite la gestión de clientes, productos y facturas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proyects;
