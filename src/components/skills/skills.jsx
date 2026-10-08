import React from 'react';
import { BrainCircuit, CodeXml, Database, Monitor, Server, Wrench } from 'lucide-react';
import './skills.css';
import Layout from '../layout/Layout';
import { useLanguage } from '../../i18n/useLanguage';
import skills from '../../data/skills.json';

const categoryIcons = {
    backend: Server,
    frontend: Monitor,
    languages: CodeXml,
    ai: BrainCircuit,
    databases: Database,
    tools: Wrench,
};

const skillIcons = {
    BrainCircuit,
};

const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
        acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
}, {});

function Skills() {
    const { t, tr } = useLanguage();

    return (
        <Layout title={t.titles.skills}>
            <div className="skills-grid">
                {Object.entries(groupedSkills).map(([category, skillsList], index) => {
                    const CategoryIcon = categoryIcons[category];
                    return (
                        <section className="skill-category reveal" key={category} style={{ '--i': index }}>
                            <h2>
                                <CategoryIcon size={18} strokeWidth={2.5} aria-hidden="true" />
                                {t.skills.categories[category]}
                            </h2>
                            <ul>
                                {skillsList.map(skill => {
                                    const SkillIcon = skillIcons[skill.lucideIcon];
                                    return (
                                        <li key={skill.id} className="skill-item">
                                            {SkillIcon ? (
                                                <SkillIcon className="skill-lucide" size={28} strokeWidth={2} aria-hidden="true" />
                                            ) : (
                                                <img src={`/images/${skill.iconUrl}`} alt="" />
                                            )}
                                            {tr(skill.name)}
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                    );
                })}
            </div>
        </Layout>
    );
}

export default Skills;
