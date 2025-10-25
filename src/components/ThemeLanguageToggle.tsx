import React from 'react';
import { FaLanguage, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';
import { useTranslation } from '../hooks/useTranslation';


const ThemeLanguageToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useTranslation();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center space-x-4">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 bg-gray-800 dark:bg-white text-white dark:text-gray-800"
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
      </button>
      
      <button
        onClick={toggleLanguage}
        className="p-2 rounded-full bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 bg-gray-800 dark:bg-white text-white dark:text-gray-800"
        aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
      >
        <FaLanguage className="w-5 h-5" />
        <span className="ml-1 text-sm font-medium">{language.toUpperCase()}</span>
      </button>
    </div>
  );
};

export default ThemeLanguageToggle;