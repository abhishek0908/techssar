// PageHeader.jsx

import React from 'react';

const PageHeader = ({ eyebrow, title, subtitle }) => {
    return (
        <section className="relative overflow-hidden bg-ink-950 pt-40 pb-16">
            <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
            <div
                className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl"
                aria-hidden="true"
            />
            <div className="container relative mx-auto max-w-3xl px-6 text-center">
                {eyebrow && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                        {eyebrow}
                    </span>
                )}
                <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">{subtitle}</p>
                )}
            </div>
        </section>
    );
}

export default PageHeader;
