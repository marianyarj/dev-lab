import React, { useEffect, useRef, useState } from 'react'
import { ThemeToggle } from '../home/ThemeToggle'
import { LanguageSelector } from '../home/LanguageSelector'

export function Navbar(): React.JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const menuRef = useRef<HTMLUListElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const navLinks: { href: string; label: string }[] = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#journey', label: 'Journey' },
        { href: '#contact', label: 'Contact' },
    ]

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
        e.preventDefault()
        setIsMenuOpen(false)

        const targetId: string = href.replace('#', '')
        const targetElement: HTMLElement | null = document.getElementById(targetId)

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const toggleMenu = (): void => {
        setIsMenuOpen((prev: boolean) => !prev)
    }

    useEffect((): (() => void) => {
        const handleClickOutSide = (event: MouseEvent): void => {
            const target = event.target as Node
            if (
                isMenuOpen &&
                menuRef.current &&
                buttonRef.current &&
                !menuRef.current.contains(target) &&
                !buttonRef.current.contains(target)
            ) {
                setIsMenuOpen(false)
            }
        }

        const handleEscKey = (event: KeyboardEvent): void => {
            if (event.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutSide)
        document.addEventListener('keydown', handleEscKey)

        return (): void => {
            document.removeEventListener('mousedown', handleClickOutSide)
            document.removeEventListener('keydown', handleEscKey)
        }
    }, [isMenuOpen])
    return (
        <nav className='flex items-center justify-end md:justify-center w-full'>
            <button ref={buttonRef} onClick={toggleMenu} className="md:hidden p-2 hover:bg-accent/10 rounded transition-colors" aria-label="Toggle menu" aria-expanded={isMenuOpen}>
                <span className="block w-6 h-0.5 bg-accent mb-1.5 transition-transform"></span>
                <span className="block w-6 h-0.5 bg-accent mb-1.5 transition-opacity"></span>
                <span className="block w-6 h-0.5 bg-accent transition-transform"></span>
            </button>
            <ul ref={menuRef} className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 absolute md:relative top-16 md:top-0 right-4 md:right-0 bg-bg-dark-secondary md:bg-transparent p-6 md:p-0 rounded border border-accent/20 md:border-0 shadow-lg md:shadow-none z-50`}
            ><li className="md:hidden pb-4 mb-4 border-b border-accent/20">
                    <div className="flex flex-col gap-4">
                        <ThemeToggle />
                        <LanguageSelector />
                    </div>
                </li>
                {navLinks.map((link: { href: string; label: string }) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, link.href)}
                            className="text-text-light-secondary dark:text-text-dark-secondary hover:text-text-light dark:hover:text-accent transition-colors duration-300 uppercase tracking-wide text-sm font-display"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}