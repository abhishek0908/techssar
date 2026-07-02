// Newsroom.jsx

import React from 'react';
import PageHeader from '../components/PageHeader';
import IconTile from '../components/IconTile';

const articles = [
    {
        title: 'Remote Equipment Access',
        desc: 'The technology for remote access to plant equipment has existed for years — adoption is finally catching up, and it changes how fast issues get diagnosed.',
    },
    {
        title: 'Soft Skills in the Age of Automation',
        desc: 'As more repetitive work moves to machines, the human roles left behind lean harder on communication, judgment and collaboration.',
    },
    {
        title: 'Custom Control Panels',
        desc: 'Purpose-built control panels with machine-specific PLC and HMI integration, designed to your exact process rather than a generic template.',
    },
    {
        title: 'Systems Integration',
        desc: 'Advanced PAC programming, next-generation HMI touchscreen design, and full facility integration that ties previously separate systems together.',
    },
];

const Newsroom = () => {
    return (
        <main>
            <PageHeader
                eyebrow="Insights"
                title="Newsroom"
                subtitle="Notes on automation, engineering practice, and the industry we work in."
            />

            <section className="bg-ink-900 py-20">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                        {articles.map((a) => (
                            <div key={a.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                                <IconTile className="mb-4" />
                                <h3 className="text-base font-semibold text-white">{a.title}</h3>
                                <p className="mt-2 text-sm text-slate-400">{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Newsroom;
