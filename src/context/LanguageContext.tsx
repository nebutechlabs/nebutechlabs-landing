import { createContext, useContext, useState, type ReactNode } from 'react';
import { es } from '../content/locales/es';
import { en } from '../content/locales/en';

type Language = 'es' | 'en';
type Translations = typeof es;

interface LanguageContextProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    // Default to Spanish as requested/implied by the user's prompt language, or detect from browser
    const [language, setLanguage] = useState<Language>('es');

    const t = language === 'es' ? es : en;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
