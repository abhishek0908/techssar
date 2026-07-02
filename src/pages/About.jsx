// About.jsx

import React from 'react';
import PageHeader from '../components/PageHeader';
import IconTile from '../components/IconTile';

const values = [
    { title: 'Passion for excellence', desc: 'We hold our own work to a higher bar than the spec sheet requires.' },
    { title: 'Integrity in every interaction', desc: 'Straightforward advice, even when it is not the easy answer.' },
    { title: 'Commitment to the mandate', desc: "Every engagement is measured against the customer's actual goals." },
    { title: 'Precision and quality', desc: 'Documented, repeatable, maintainable — every time.' },
];

const About = () => {
    return (
        <main>
            <PageHeader
                eyebrow="Who we are"
                title="About Techssar"
                subtitle="A technology-driven team focused on automating manual and semi-automatic processes, and re-engineering existing lines for better productivity."
            />

            <section className="bg-ink-900 py-20">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-2xl font-bold text-white">Complete automation solutions</h2>
                    <p className="mt-4 text-slate-400">
                        Techssar exists to automate manual and semi-automatic processes and to
                        re-engineer already-automated ones, always with an eye on productivity,
                        profitability, and safety &mdash; whenever and wherever that&apos;s needed.
                    </p>
                    <p className="mt-4 text-slate-400">
                        We build primarily on proven, commercially available automation hardware
                        and accessories, choosing platforms for their track record and their fit
                        with the interfaces a given solution actually needs. The hard lessons from
                        early projects became the backbone of the engineering methodology we still
                        use today: plan thoroughly, document everything, and hand over a system
                        the customer&apos;s own team can run and maintain.
                    </p>
                    <p className="mt-4 text-slate-400">
                        That methodology is shared across every discipline in the company &mdash;
                        design and development engineers, programmers, manufacturing engineers,
                        sourcing specialists, and the commissioning engineers who see a project
                        through to acceptance on-site.
                    </p>
                </div>
            </section>

            <section className="border-t border-white/5 bg-ink-950 py-20">
                <div className="container mx-auto max-w-5xl px-6">
                    <h2 className="text-center text-2xl font-bold text-white">Our values</h2>
                    <div className="mt-10 grid gap-6 sm:grid-cols-2">
                        {values.map((v) => (
                            <div key={v.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                                <IconTile className="mb-4" />
                                <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                                <p className="mt-2 text-sm text-slate-400">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;
