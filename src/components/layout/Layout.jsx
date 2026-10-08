import React, { useEffect, useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import Menu from '../menu/Menu';
import LanguageToggle from '../language/LanguageToggle';
import AvailableBadge from '../available/AvailableBadge';
import { useLanguage } from '../../i18n/useLanguage';
import './layout.css';

function Layout({ title, children }) {
    const { t } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    useEffect(() => {
        if (!menuOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [menuOpen]);

    return (
        <div className="layout">
            <header className="mobile-header">
                <div className="mobile-header-bar">
                    <div className="sidebar-header-text">
                        <span className="sidebar-name">KEVIN HERRERA</span>
                        <span className="sidebar-role">{t.role}</span>
                    </div>
                    <div className="mobile-header-actions">
                        <LanguageToggle />
                        <button
                            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
                            onClick={() => setMenuOpen(prev => !prev)}
                            aria-expanded={menuOpen}
                            aria-label={menuOpen ? t.menuClose : t.menuOpen}
                        >
                            {menuOpen ? <X size={24} strokeWidth={3} /> : <MenuIcon size={24} strokeWidth={3} />}
                        </button>
                    </div>
                </div>
                <div className={`mobile-menu-wrapper ${menuOpen ? 'open' : ''}`} inert={!menuOpen}>
                    <div className="mobile-menu-inner">
                        <nav className="menu mobile-menu">
                            <Menu isMobile={true} onLinkClick={() => setMenuOpen(false)} />
                        </nav>
                    </div>
                </div>
            </header>

            <aside className="sidebar">
                <div className="sidebar-header sidebar-header-text">
                    <span className="sidebar-name">KEVIN HERRERA</span>
                    <span className="sidebar-role">{t.role}</span>
                    <AvailableBadge className="sidebar-available" />
                </div>
                <nav className="menu">
                    <Menu />
                </nav>
                <div className="sidebar-footer">
                    <LanguageToggle />
                </div>
            </aside>

            <main className="panel">
                <h1 className="panel-title">»» {title} ««</h1>
                {children}
            </main>
        </div>
    );
}

export default Layout;
