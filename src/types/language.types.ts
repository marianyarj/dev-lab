export type Language = 'pt' | 'es' | 'en'

export interface LanguageContextType {
    language: Language
    updateLanguage: (lan: Language) => void
}

export interface LanguageProviderProps {
    children: React.ReactNode
}

