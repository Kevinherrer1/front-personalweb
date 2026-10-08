import React from 'react';
import { CodeXml, ExternalLink } from 'lucide-react';
import './proyects.css';
import Layout from '../layout/Layout';
import { useLanguage } from '../../i18n/useLanguage';
import githubIcon from './assets/githubicon.png';
import projects from '../../data/projects.json';

function Proyects() {
    const { t, tr } = useLanguage();

    return (
        <Layout title={t.titles.projects}>
            <div className="proyecto-lista">
                {projects.map((project, index) => (
                    <article className="proyecto reveal" key={project.id} style={{ '--i': index }}>
                        <img src={githubIcon} alt="" className="proyecto-icon" />
                        <div className="proyecto-body">
                            <h2 className="titulo-proyecto">{tr(project.title)}</h2>
                            <p>{tr(project.description)}</p>
                            <ul className="proyecto-tags">
                                {project.tags.map(tag => (
                                    <li key={tr(tag)}>{tr(tag)}</li>
                                ))}
                            </ul>
                            <div className="proyecto-links">
                                {project.links.map(link => {
                                    const LinkIcon = link.url.includes('github.com') ? CodeXml : ExternalLink;
                                    return (
                                        <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                                            <LinkIcon size={16} strokeWidth={2.5} aria-hidden="true" />
                                            {tr(link.label)}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </Layout>
    );
}

export default Proyects;
