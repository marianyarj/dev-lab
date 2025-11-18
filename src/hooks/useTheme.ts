import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import type { ThemeContextType } from '../types/theme.types'

export function useTheme(): ThemeContextType {
    const context: ThemeContextType | undefined = useContext(ThemeContext)

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }

    return context
}