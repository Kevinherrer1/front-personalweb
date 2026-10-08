import React from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import './available.css';

function AvailableBadge({ className = '' }) {
    const { t } = useLanguage();

    return (
        <span className={`available-badge ${className}`}>
            <span className="available-dot" aria-hidden="true" />
            {t.available}
        </span>
    );
}

export default AvailableBadge;
