import React, { useState, useEffect } from 'react';
import './proyects.css';
import '../menu/Menu.css';
import Menu from '../menu/Menu';
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
                <Menu />
            </aside>

            <div className="proyects-container">
                {/* Botón para móvil */}
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰ Menú
                </button>
                {/* Menú móvil siempre en el DOM */}
                <div className="mobile-menu-wrapper">
                    <nav className={`menu mobile-menu ${menuOpen ? 'show' : ''}`}>
                        <Menu isMobile={true} onLinkClick={() => setMenuOpen(false)} />
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
