import type { LanguagesData } from "../types/repository.types";

export interface LanguagePercentage {
    name: string
    percentage: number
}

export function calculateLanguagePercentages(languages: LanguagesData): LanguagePercentage[] {
    const totalBytes: number = Object.values(languages).reduce(
        (sum: number, bytes: number): number => sum + bytes,
        0
    )

    const languageswithPercentage: LanguagePercentage[] = Object.entries(languages)
        .map(([name, bytes]: [string, number]): LanguagePercentage => ({
            name,
            percentage: (bytes / totalBytes) * 100,
        }))

    const filtered: LanguagePercentage[] = languageswithPercentage.filter((lang: LanguagePercentage): boolean => lang.percentage > 5)

    return filtered.sort((a: LanguagePercentage, b: LanguagePercentage): number =>
        b.percentage - a.percentage
    )
}