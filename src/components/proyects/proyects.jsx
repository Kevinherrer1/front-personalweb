import React, { useState, useEffect } from 'react';
import './proyects.css';
import { Link } from 'react-router-dom';
import githubIcon from './assets/githubicon.png';
import { API_ENDPOINTS } from '../../config/api';

function Proyects() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(API_ENDPOINTS.PROJECTS);
                if (!response.ok) {
                    throw new Error('No se pudieron cargar los proyectos desde el servidor.');
                }
                const data = await response.json();
                setProjects(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

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
                    {loading && <p>Cargando proyectos...</p>}
                    {error && <p className="error-mensaje">{error}</p>}
                    {!loading && !error && projects.map(project => (
                        <div className="proyecto" key={project.id}>
                            <img src={githubIcon} alt="GitHub" className="icon" />
                            <div>
                                <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                                    <strong className="titulo-proyecto">• {project.title}</strong>
                                </a>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Proyects;
