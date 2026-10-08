import React from 'react';
import { Building2, CalendarDays, HeartPulse } from 'lucide-react';
import './experience.css';
import Layout from '../layout/Layout';
import { useLanguage } from '../../i18n/useLanguage';
import experience from '../../data/experience.json';

const icons = {
    Building2,
    HeartPulse,
};

function Experience() {
    const { t, tr } = useLanguage();

    const formatPeriod = (start, end) => {
        if (end === start) return start;
        return `${start} – ${end ?? t.experience.present}`;
    };

    return (
        <Layout title={t.titles.experience}>
            <ol className="timeline">
                {experience.map((item, index) => {
                    const Icon = icons[item.icon] ?? Building2;
                    return (
                        <li className="timeline-item reveal" key={item.id} style={{ '--i': index }}>
                            <div className="timeline-node" aria-hidden="true">
                                <Icon size={22} strokeWidth={2.5} />
                            </div>
                            <article className="timeline-card">
                                <span className={`timeline-period ${item.end === null ? 'current' : ''}`}>
                                    <CalendarDays size={16} strokeWidth={2.5} aria-hidden="true" />
                                    {formatPeriod(item.start, item.end)}
                                </span>
                                <h2 className="timeline-role">{tr(item.role)}</h2>
                                <p className="timeline-company">{item.company}</p>
                                <p className="timeline-description">{tr(item.description)}</p>
                                {item.highlights.length > 0 && (
                                    <ul className="timeline-highlights">
                                        {item.highlights.map((highlight, i) => (
                                            <li key={i}>{tr(highlight)}</li>
                                        ))}
                                    </ul>
                                )}
                                {item.tags.length > 0 && (
                                    <ul className="timeline-tags">
                                        {item.tags.map(tag => (
                                            <li key={tag}>{tag}</li>
                                        ))}
                                    </ul>
                                )}
                            </article>
                        </li>
                    );
                })}
            </ol>
        </Layout>
    );
}

export default Experience;
