// components/FloatingTranslate.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLanguage, FaTimes } from 'react-icons/fa';
import { useLanguageStore } from '../stores/languageStore';

const FloatingTranslate: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ar', name: 'العربية', flag: '🇹🇳' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu des langues */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 mb-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden min-w-[180px]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 text-left transition-all duration-200 flex items-center space-x-3 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 ${
                  language === lang.code
                    ? 'bg-[var(--violet)]/10 text-[var(--violet)] dark:text-[var(--violet-clair)]'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {language === lang.code && (
                  <div className="ml-auto w-2 h-2 bg-[var(--violet)] rounded-full"></div>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton flottant */}
      <motion.button
        onClick={toggleMenu}
        className="bg-gradient-to-r from-[var(--violet)] to-purple-600 text-white p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm border border-white/20"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          y: [0, -5, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          },
          rotate: {
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      >
        {isOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <div className="flex items-center space-x-2">
            <FaLanguage className="w-6 h-6" />
            <span className="text-sm font-medium uppercase">
              {language}
            </span>
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default FloatingTranslate;