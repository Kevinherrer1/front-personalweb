import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, Download, GraduationCap, Server } from 'lucide-react';
import './portfolio.css';
import Layout from '../layout/Layout';
import Typewriter from '../typewriter/Typewriter';
import AvailableBadge from '../available/AvailableBadge';
import { useLanguage } from '../../i18n/useLanguage';
import avatarSprite from './assets/avatar-sprite.png';

const controls = [
    { key: 'a', label: 'A', path: '/proyectos' },
    { key: 'b', label: 'B', path: '/contacto' },
];

const factIcons = [Server, Briefcase, GraduationCap];

function Portfolio() {
    const navigate = useNavigate();
    const { t } = useLanguage();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey || e.metaKey || e.altKey || e.repeat) return;
            const control = controls.find(c => c.key === e.key.toLowerCase());
            if (control) navigate(control.path);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [navigate]);

    return (
        <Layout title={t.titles.home}>
            <div className="profile reveal" style={{ '--i': 0 }}>
                <div
                    className="profile-avatar"
                    role="img"
                    aria-label="Kevin Herrera"
                    style={{ backgroundImage: `url(${avatarSprite})` }}
                />
                <div className="info">
                    <h2>
                        <Typewriter key={t.home.greeting} text={t.home.greeting} />
                    </h2>
                    <AvailableBadge className="profile-available" />
                    <ul>
                        {t.home.facts.map((fact, index) => {
                            const FactIcon = factIcons[index];
                            return (
                                <li key={fact}>
                                    <FactIcon size={18} strokeWidth={2.5} aria-hidden="true" /> {fact}
                                </li>
                            );
                        })}
                    </ul>
                    <a href="/cv-kevin-herrera.pdf" download className="btn btn-cv">
                        <Download size={18} strokeWidth={2.5} aria-hidden="true" /> {t.home.cv}
                    </a>
                </div>
            </div>
            <div className="description reveal" style={{ '--i': 1 }}>
                {t.home.description}
            </div>
            <div className="controls reveal" style={{ '--i': 2 }}>
                {controls.map(control => (
                    <Link key={control.key} to={control.path} className="control-btn">
                        <span className={`control-key control-key-${control.key}`}>{control.label}</span>
                        {t.home.controls[control.key]}
                    </Link>
                ))}
            </div>
            <p className="controls-hint">{t.home.hint}</p>
        </Layout>
    );
}

export default Portfolio;
