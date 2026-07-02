// Careers.jsx

import React from 'react';
import PageHeader from '../components/PageHeader';
import IconTile from '../components/IconTile';

const perks = [
    'World-class infrastructure',
    'Challenging, hands-on work',
    'Excellent team culture',
    'Room to work independently',
    'Competitive remuneration',
    'A calm, focused work environment',
];

const roles = [
    { title: 'Automation Sales Engineer', desc: 'Own client relationships and translate process problems into automation proposals.' },
    { title: 'Application Engineer', desc: 'Design and specify industrial control panels for real production lines.' },
    { title: 'Automation Engineer', desc: 'Build and commission PLC, SCADA and HMI systems on-site.' },
    { title: 'Controls Engineer', desc: 'Own control system architecture from schematic through validation.' },
];

const Careers = () => {
    return (
        <main>
            <PageHeader
                eyebrow="Join us"
                title="Careers"
                subtitle="We hire people who like solving real process problems, not just writing code for its own sake."
            />

            <section className="bg-ink-900 py-20">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-2xl font-bold text-white">Why join Techssar</h2>
                    <p className="mt-4 text-slate-400">
                        We&apos;ve built our engineering methodology one project at a time, and we
                        look for people who want to keep building it with us.
                    </p>
                    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                        {perks.map((p) => (
                            <li key={p} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                                {p}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-t border-white/5 bg-ink-950 py-20">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-2xl font-bold text-white">Roles we typically hire for</h2>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        {roles.map((r) => (
                            <div key={r.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                                <IconTile className="mb-4" />
                                <h3 className="text-base font-semibold text-white">{r.title}</h3>
                                <p className="mt-2 text-sm text-slate-400">{r.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-8 text-center">
                        <h3 className="text-lg font-semibold text-white">Don&apos;t see an exact fit?</h3>
                        <p className="mt-2 text-sm text-slate-400">
                            Send us your resume anyway — we&apos;d still like to hear from you.
                        </p>
                        <a
                            href="mailto:careers@techssar.com"
                            className="mt-6 inline-block rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3 font-semibold text-ink-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            careers@techssar.com
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Careers;
