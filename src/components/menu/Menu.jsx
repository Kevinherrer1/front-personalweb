import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n/useLanguage';
import './Menu.css';

const menuItems = [
    { path: '/', key: 'home' },
    { path: '/experiencia', key: 'experience' },
    { path: '/habilidades', key: 'skills' },
    { path: '/proyectos', key: 'projects' },
    { path: '/contacto', key: 'contact' },
];

function Menu({ isMobile, onLinkClick }) {
    const { pathname } = useLocation();
    const { t } = useLanguage();

    const handleLinkClick = () => {
        if (isMobile && onLinkClick) {
            onLinkClick();
        }
    };

    return (
        <ul>
            {menuItems.map(item => (
                <li key={item.path} className={pathname === item.path ? 'active' : ''}>
                    <Link to={item.path} onClick={handleLinkClick}>
                        {t.nav[item.key]}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Menu;
