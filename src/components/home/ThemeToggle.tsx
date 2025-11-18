import React from 'react'
import { useTheme } from '../../hooks/useTheme'

export function ThemeToggle(): React.JSX.Element {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 font-display text-sm uppercase tracking-wide text-text-light dark:text-text-dark-secondary hover:text-accent border border-text-light/30 dark:border-accent/20 hover:border-accent/60 dark:hover:border-accent/40 rounded transition-colors duration-300 cursor-pointer"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? 'dark' : 'light'}
        </button>
    )
}