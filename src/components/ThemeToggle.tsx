import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/10 backdrop-blur-sm shadow-lg hover:bg-white/20 transition-all duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FaSun className="w-6 h-6 text-yellow-400" />
      ) : (
        <FaMoon className="w-6 h-6 text-slate-700" />
      )}
    </button>
  );
};

export default ThemeToggle;