import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeStore = {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme) => {
        set({ theme });
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);