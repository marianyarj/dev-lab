import { useContext } from "react"
import type { LanguageContextType } from "../types/language.types";
import { LanguageContext } from "../contexts/LanguageContext";


export function useLanguage(): LanguageContextType {
    const context: LanguageContextType | undefined = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }

    return context
}