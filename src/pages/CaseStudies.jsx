// CaseStudies.jsx

import React from 'react';
import PageHeader from '../components/PageHeader';
import IconTile from '../components/IconTile';

const cases = [
    {
        title: 'Common DC Bus System',
        desc: 'A shared DC bus architecture for AC drives across multi-spindle spinning units in fiber manufacturing, cutting energy loss between braking and driving spindles.',
    },
    {
        title: 'Automotive Nut-Runner Control',
        desc: 'Coordinated control for multi-spindle nut runners on a car assembly line, tightening torque accuracy and cycle time together.',
    },
    {
        title: 'Legacy Drive Migration',
        desc: 'Modernizing a rubber extrusion line by migrating DC motor drives to AC, restoring precision without a full line rebuild.',
    },
    {
        title: 'PLC5 to ControlLogix Migration',
        desc: 'Moving a production line from PLC5 to ControlLogix for greater capacity and better equipment utilization, with minimal production downtime.',
    },
    {
        title: 'Hazardous Gas Handling',
        desc: 'Automating chlorine filling and transportation for a chemical manufacturer, with safety interlocks built into every step.',
    },
];

const CaseStudies = () => {
    return (
        <main>
            <PageHeader
                eyebrow="What we build"
                title="Example Solutions"
                subtitle="Representative problems our engineering approach is built to solve — illustrative examples of the kind of work we take on."
            />

            <section className="bg-ink-900 py-20">
                <div className="container mx-auto max-w-4xl px-6 space-y-6">
                    {cases.map((c) => (
                        <div key={c.title} className="flex items-start gap-5 rounded-xl border border-white/10 bg-white/5 p-6">
                            <IconTile className="shrink-0" />
                            <div>
                                <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                                <p className="mt-2 text-sm text-slate-400">{c.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default CaseStudies;
