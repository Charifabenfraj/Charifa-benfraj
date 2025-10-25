// stores/languageStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LanguageState {
  language: string;
  setLanguage: (lang: string) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'fr', // Langue par défaut
      setLanguage: (lang: string) => set({ language: lang }),
    }),
    {
      name: 'language-storage', // Nom pour le localStorage
    }
  )
);