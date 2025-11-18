import React from 'react'
import { Navbar } from './Navbar'
import { ThemeToggle } from '../home/ThemeToggle'

export function Header(): React.JSX.Element {
    return (
        <header className="w-full bg-bg-light dark:bg-bg-dark border-b border-accent/20">
            <div className="px-6 py-4 flex flex-col gap-4">

                <div className="flex flex-row justify-between items-center w-full">
                    <div className="font-display text-text-light dark:text-accent uppercase tracking-wider text-lg">
                        <span className="hidden md:inline">Case File #001: MARIANY</span>
                        <span className="md:hidden whitespace-nowrap">#001: MRY</span>
                    </div>

                    <div className="hidden md:flex">
                        <ThemeToggle />
                    </div>
                </div>

                <Navbar />

            </div>
        </header>
    )
}