import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    return (
        <Button variant="ghost" size="sm" onClick={toggleLanguage} className="gap-2">
            <Globe className="h-4 w-4" />
            <span className="uppercase">{language}</span>
        </Button>
    );
};
