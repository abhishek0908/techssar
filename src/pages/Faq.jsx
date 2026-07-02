// Faq.jsx

import React from 'react';
import PageHeader from '../components/PageHeader';

const faqs = [
    {
        q: 'What is the purpose of automation?',
        a: 'Automation aims to reduce manual involvement in repetitive tasks, streamline operations, and lift productivity and consistency across a wide range of industries.',
    },
    {
        q: 'What are industrial automation solutions?',
        a: 'A mix of technologies, systems and strategies used to automate manufacturing and process tasks — built to boost output quality and efficiency while cutting down repetitive manual work.',
    },
    {
        q: 'What is the role of industrial automation?',
        a: 'It ties together the tools and techniques used to run and monitor industrial processes, tailored to the specific demands of a given plant or sector.',
    },
    {
        q: 'What are the benefits of automation?',
        a: 'Consistent quality, lower operating costs, safer working conditions, and real-time data that actually informs decisions — benefits that compound as processes get more complex.',
    },
    {
        q: 'What is automation hardware?',
        a: 'The physical building blocks of an automated system — controllers, drives, sensors and interface devices — used to regulate, observe and improve a process without constant manual input.',
    },
];

const Faq = () => {
    return (
        <main>
            <PageHeader eyebrow="Good to know" title="Frequently asked questions" />

            <section className="bg-ink-900 py-20">
                <div className="container mx-auto max-w-3xl px-6 space-y-4">
                    {faqs.map((f) => (
                        <div key={f.q} className="rounded-xl border border-white/10 bg-white/5 p-6">
                            <h3 className="font-semibold text-white">{f.q}</h3>
                            <p className="mt-2 text-sm text-slate-400">{f.a}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Faq;
