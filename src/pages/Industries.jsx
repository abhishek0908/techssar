// Industries.jsx

import React from 'react';
import PageHeader from '../components/PageHeader';
import IconTile from '../components/IconTile';

const industries = [
    { title: 'Manmade Fibers', desc: 'Spinning, drawing and finishing lines that depend on tightly synchronized drive control.' },
    { title: 'Automotive', desc: 'Assembly, drive and nut-runner control across high-throughput production lines.' },
    { title: 'Drugs & Pharmaceuticals', desc: 'Validated environments and full product-lifecycle traceability for regulated manufacturing.' },
    { title: 'Food & Beverage', desc: 'Hygienic process control with the environmental precision regulated production demands.' },
    { title: 'Power', desc: 'Combustion, utility and plant-efficiency controls for generation and distribution assets.' },
    { title: 'Tire', desc: 'Legacy migration and process modernization for tire manufacturing lines.' },
    { title: 'Chemical', desc: 'Reactor, scrubber and hazardous-material handling controls built around safety first.' },
];

const Industries = () => {
    return (
        <main>
            <PageHeader
                eyebrow="Where we work"
                title="Industries"
                subtitle="Automation solutions shaped around the process realities of each sector we serve."
            />

            <section className="bg-ink-900 py-20">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {industries.map((i) => (
                            <div key={i.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                                <IconTile className="mb-4" />
                                <h3 className="text-base font-semibold text-white">{i.title}</h3>
                                <p className="mt-2 text-sm text-slate-400">{i.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Industries;
