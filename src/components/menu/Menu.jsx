import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Menu.css';
import { useAuth } from '../../context/AuthContext';

function Menu({ isMobile, onLinkClick }) {
    const location = useLocation();
    const { pathname } = location;
    const { isAuthenticated, logout } = useAuth();

    let menuItems = [
        { path: '/', name: 'INICIO' },
        { path: '/habilidades', name: 'HABILIDADES' },
        { path: '/proyectos', name: 'PROYECTOS' },
        { path: '/contacto', name: 'CONTACTO' },
    ];

    if (!isAuthenticated) {
        // Insertar el link de autenticación si no está logueado
        menuItems.splice(1, 0, { path: '/auth', name: 'AUTENTICACIÓN' });
    }

    const handleLinkClick = () => {
        if (isMobile && onLinkClick) {
            onLinkClick();
        }
    };

    const handleLogoutClick = () => {
        logout();
        if (isMobile && onLinkClick) {
            onLinkClick();
        }
    };

    return (
        <ul>
            {menuItems.map(item => (
                <li key={item.path} className={pathname === item.path ? 'active' : ''}>
                    <Link to={item.path} onClick={handleLinkClick}>
                        {item.name}
                    </Link>
                </li>
            ))}
            {isAuthenticated && (
                <li>
                    <button onClick={handleLogoutClick} className="logout-button">
                        CERRAR SESIÓN
                    </button>
                </li>
            )}
        </ul>
    );
}

export default Menu; 