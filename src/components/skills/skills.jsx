import React, { useState, useEffect } from 'react';
import './skills.css';
import '../menu/menu.css';
import Menu from '../menu/Menu';
import { Link } from 'react-router-dom';
import { API_ENDPOINTS } from '../../config/api';
import vue from './assets/vue.png';
import windows from './assets/windows.png';

function Skills() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                setError(null);
                setLoading(true);
                const response = await fetch(API_ENDPOINTS.TECHNOLOGIES);
                if (!response.ok) {
                    throw new Error('No se pudieron cargar las habilidades desde el servidor.');
                }
                const data = await response.json();
                setSkills(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const groupedSkills = skills.reduce((acc, skill) => {
        const category = skill.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
    }, {});

    return (
        <div className='container'>
            <aside className="menu">
                <Menu />
            </aside>

            <div className="skills-container">
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰ Menú
                </button>
                <div className="mobile-menu-wrapper">
                    <nav className={`menu mobile-menu ${menuOpen ? 'show' : ''}`}>
                        <Menu isMobile={true} onLinkClick={() => setMenuOpen(false)} />
                    </nav>
                </div>
                <h1>»» HABILIDADES ««</h1>
                <div className="skills-grid">
                    {loading && <p>Cargando habilidades...</p>}
                    {error && <p className="error-mensaje">{error}</p>}
                    {!loading && !error &&
                        Object.entries(groupedSkills).map(([category, skillsList]) => (
                            <div key={category}>
                                <h3>• {category}</h3>
                                {skillsList.map(skill => (
                                    <p key={skill.id}>
                                        <img src={`/images/${skill.iconUrl}`} alt={skill.name} className="skill-icon" /> {skill.name}
                                    </p>
                                ))}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Skills;
