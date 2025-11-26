import { createContext, useEffect, useState } from "react";
import type { Language, LanguageContextType, LanguageProviderProps } from "../types/language.types";

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>((): Language => {
        const savedLanguage: string | null = localStorage.getItem('language')
        if (savedLanguage === 'pt' || savedLanguage === 'es' || savedLanguage === 'en') {
            return savedLanguage
        }

        const navigatorLanguage = window.navigator.language.slice(0, 2)
        if (navigatorLanguage === 'pt' || navigatorLanguage === 'es') {
            return navigatorLanguage;
        }
        return 'en'
    })

    useEffect(() => {
        document.documentElement.lang = language

        localStorage.setItem('language', language);
    }, [language]);

    const updateLanguage = (lan: Language): void => {
        setLanguage(lan);
    };

    return <LanguageContext.Provider value={{
        language, updateLanguage
    }}>
        {children}
    </LanguageContext.Provider>
}

