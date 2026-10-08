import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { LanguageContext } from './LanguageContext';
import translations from './translations';

const STORAGE_KEY = 'lang';

function getInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') return saved;
    return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
}

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(getInitialLang);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang = lang;
        document.title = translations[lang].pageTitle;
    }, [lang]);

    // Los textos de los datos pueden ser un string (igual en ambos idiomas) o { es, en }
    const tr = useCallback(
        (value) => (typeof value === 'string' ? value : value[lang] ?? value.es),
        [lang]
    );

    const value = useMemo(
        () => ({ lang, setLang, t: translations[lang], tr }),
        [lang, tr]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
