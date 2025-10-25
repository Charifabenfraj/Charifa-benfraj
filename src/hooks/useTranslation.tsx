import { useState } from 'react';

type Language = 'en' | 'fr';

const translations: Record<Language, Record<string, string>> = {
  en: {
    hello: 'Hello',
    welcome: 'Welcome',
    theme: 'Theme',
    language: 'Language',
  },
  fr: {
    hello: 'Bonjour',
    welcome: 'Bienvenue',
    theme: 'Thème',
    language: 'Langue',
  },
};

export function useTranslation() {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'fr' : 'en'));
  };

  const t = (key: string) => translations[language][key] || key;

  return { language, toggleLanguage, t };
}
