import { useLanguage } from "../../hooks/useLanguage";
import type { Language } from "../../types/language.types";

export function LanguageSelector() {
    const { language, updateLanguage } = useLanguage()
    const languages: Language[] = ['pt', 'es', 'en']

    return (
        <div className="flex flex-row gap-2">
            {languages.map((option: Language) => {
                const isActive: boolean = option === language

                return <button key={option} onClick={(): void => updateLanguage(option)}
                    className={` px-3 py-1 font-display text-sm uppercase tracking-wide border rounded transition-colors duration-300 cursor-pointer
              ${isActive ? 'bg-accent/10 border-accent text-accent' : 'border-text-light/30 dark:border-accent/20 text-text-light dark:text-text-dark-secondary hover:text-accent hover:border-accent/60'}`}
                    aria-label={`Switch to ${option.toUpperCase()}`} aria-pressed={isActive} aria-current={isActive ? 'true' : undefined}>
                    [ {option.toUpperCase()} ]
                </button>
            })}
        </div>
    )
}