// Header.jsx

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../nav';

const primaryLinks = NAV_LINKS.filter((link) => link.to !== '/contact-us');
const contactLink = NAV_LINKS.find((link) => link.to === '/contact-us');

const desktopLinkClass = ({ isActive }) =>
    `rounded-full px-3 py-1.5 transition-colors ${
        isActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
    }`;

const mobileLinkClass = ({ isActive }) =>
    `flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors ${
        isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
    }`;

const Header = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
                scrolled
                    ? 'border-white/10 bg-ink-950/90 shadow-lg shadow-black/20 backdrop-blur-md'
                    : 'border-transparent bg-ink-950/40 backdrop-blur-sm'
            }`}
        >
            <div className="container mx-auto flex items-center justify-between px-6 py-3.5">
                <NavLink to="/" className="group flex items-center gap-2.5 text-white" onClick={() => setOpen(false)}>
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-ember-500 text-sm font-extrabold text-ink-950 shadow-md shadow-brand-500/20 transition-transform duration-300 group-hover:scale-105">
                        T
                    </span>
                    <span className="text-lg font-bold tracking-tight">Techssar</span>
                </NavLink>

                <nav className="hidden xl:block">
                    <ul className="flex items-center gap-1 text-sm font-medium">
                        {primaryLinks.map((link) => (
                            <li key={link.to}>
                                <NavLink to={link.to} className={desktopLinkClass} end={link.to === '/'}>
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-3">
                    <NavLink
                        to={contactLink.to}
                        className="hidden rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-2 text-sm font-semibold text-ink-950 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] sm:inline-block"
                    >
                        {contactLink.label}
                    </NavLink>

                    <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:bg-white/5 xl:hidden"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {open ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`xl:hidden overflow-hidden border-t border-white/10 bg-ink-950 transition-[max-height] duration-300 ease-in-out ${
                    open ? 'max-h-[calc(100vh-64px)] overflow-y-auto' : 'max-h-0'
                }`}
            >
                <nav className="px-4 py-4">
                    <ul className="flex flex-col gap-1">
                        {NAV_LINKS.map((link) => (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    className={mobileLinkClass}
                                    end={link.to === '/'}
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                    <span aria-hidden="true" className="text-slate-500">&rarr;</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
