// Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../nav';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 bg-ink-950">
            <div className="container mx-auto grid gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <Link to="/" className="flex items-center gap-2 text-white">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-ember-500 text-sm font-extrabold text-ink-950">
                            T
                        </span>
                        <span className="text-lg font-bold tracking-tight">Techssar</span>
                    </Link>
                    <p className="mt-4 max-w-xs text-sm text-slate-500">
                        Engineering and automation solutions built around your process, from
                        concept through commissioning.
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Sitemap</h3>
                    <ul className="mt-4 space-y-2 text-sm text-slate-500">
                        {NAV_LINKS.slice(0, 5).map((link) => (
                            <li key={link.to}>
                                <Link to={link.to} className="transition-colors hover:text-brand-400">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 opacity-0 lg:hidden">Sitemap</h3>
                    <ul className="mt-4 space-y-2 text-sm text-slate-500 lg:mt-10">
                        {NAV_LINKS.slice(5).map((link) => (
                            <li key={link.to}>
                                <Link to={link.to} className="transition-colors hover:text-brand-400">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Get in touch</h3>
                    <ul className="mt-4 space-y-2 text-sm text-slate-500">
                        <li>
                            <a href="mailto:info@techssar.com" className="transition-colors hover:text-brand-400">
                                info@techssar.com
                            </a>
                        </li>
                        <li>
                            <Link to="/contact-us" className="transition-colors hover:text-brand-400">
                                Send us a message
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/5">
                <div className="container mx-auto px-6 py-6 text-sm text-slate-500">
                    &copy; {year} Techssar. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
