import React from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import './language.css';

const languages = ['es', 'en'];

function LanguageToggle() {
    const { lang, setLang, t } = useLanguage();

    return (
        <div className="language-toggle" role="group" aria-label={t.changeLanguage}>
            {languages.map(code => (
                <button
                    key={code}
                    type="button"
                    className={lang === code ? 'active' : ''}
                    aria-pressed={lang === code}
                    onClick={() => setLang(code)}
                >
                    {code.toUpperCase()}
                </button>
            ))}
        </div>
    );
}

export default LanguageToggle;
