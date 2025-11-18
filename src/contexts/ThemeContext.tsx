import React, { createContext, useEffect, useState } from 'react'
import type { Theme, ThemeContextType, ThemeProviderProps } from '../types/theme.types'

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: ThemeProviderProps): React.JSX.Element {
    const [theme, setTheme] = useState<Theme>((): Theme => {
        const savedTheme: string | null = localStorage.getItem('theme')
        if (savedTheme === 'light' || savedTheme === 'dark') {
            return savedTheme
        }
        const prefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches
        return prefersDark ? 'dark' : 'light'
    })

    useEffect((): void => {
        const root: HTMLElement = document.documentElement
        console.log('Current theme:', theme)  // adicione isso
        console.log('Root element:', root)     // adicione isso

        if (theme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }

        console.log('Classes after:', root.classList)  // adicione isso
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = (): void => {
        setTheme((prevTheme: Theme): Theme => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}