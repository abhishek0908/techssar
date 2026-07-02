// NotFound.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-ink-950 px-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-400">404</span>
            <h1 className="mt-3 text-3xl font-bold text-white">Page not found</h1>
            <p className="mt-3 max-w-md text-slate-400">
                The page you&apos;re looking for doesn&apos;t exist or has moved.
            </p>
            <Link
                to="/"
                className="mt-8 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3 font-semibold text-ink-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
                Back to home
            </Link>
        </main>
    );
}

export default NotFound;
