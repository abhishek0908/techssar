// Home.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconTile from '../components/IconTile';

const highlights = [
    { title: 'Legacy Migration', desc: 'Moving aging PLC, DCS and relay-logic systems onto modern platforms without disrupting production.' },
    { title: 'Asset Tracking & Control', desc: 'Real-time visibility into equipment, materials and batches across the plant floor.' },
    { title: 'Deep Domain Expertise', desc: 'Engineers who understand your process, not just the hardware that runs it.' },
];

const servicePreview = [
    { title: 'PLC, DCS, HMI & SCADA', desc: 'Design, engineering and commissioning across the major control platforms.' },
    { title: 'Continuous Process Controls', desc: 'Distillation, filtration, reactor and utility control for demanding processes.' },
    { title: 'Manufacturing Execution Systems', desc: 'Plant-wide visibility, material tracking and executive dashboards.' },
];

const faqPreview = [
    { q: 'What is industrial automation?', a: 'The use of control systems and technology to run manufacturing and process tasks with less manual intervention, improving consistency and throughput.' },
    { q: 'What are the benefits of automation?', a: 'Higher output quality, lower operating cost, safer plants, and data you can actually act on.' },
];

const Home = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus('error');
            return;
        }
        setStatus('success');
        setEmail('');
    };

    return (
        <main>
            {/* Hero */}
            <section className="relative overflow-hidden bg-ink-950 pt-40 pb-28">
                <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
                <div
                    className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl animate-float"
                    aria-hidden="true"
                />
                <div
                    className="pointer-events-none absolute top-40 right-10 h-56 w-56 rounded-full bg-ember-500/10 blur-3xl animate-float"
                    style={{ animationDelay: '2s' }}
                    aria-hidden="true"
                />

                <div className="container relative mx-auto max-w-3xl px-6 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                        Industrial automation, engineered right
                    </span>

                    <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                        You build.
                        <span className="bg-gradient-to-r from-brand-400 to-ember-400 bg-clip-text text-transparent"> We automate.</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
                        Techssar designs, engineers and commissions automation solutions that
                        streamline your processes, cut downtime, and keep safety front and centre.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <Link
                            to="/services"
                            className="rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3 font-semibold text-ink-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Our Services
                        </Link>
                        <Link
                            to="/contact-us"
                            className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:border-brand-500 hover:text-brand-400"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="border-t border-white/5 bg-ink-900 py-20">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="grid gap-6 sm:grid-cols-3">
                        {highlights.map((h) => (
                            <div key={h.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                                <IconTile className="mb-4" />
                                <h3 className="text-lg font-semibold text-white">{h.title}</h3>
                                <p className="mt-2 text-sm text-slate-400">{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About preview */}
            <section className="border-t border-white/5 bg-ink-950 py-24">
                <div className="container mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">Who we are</span>
                        <h2 className="mt-3 text-3xl font-bold text-white">Complete automation, end to end</h2>
                        <p className="mt-4 text-slate-400">
                            Techssar is a technology-driven team on a mission to automate manual
                            and semi-automatic processes, and to re-engineer existing automated
                            lines for better productivity and profitability &mdash; without ever
                            losing sight of safety.
                        </p>
                        <p className="mt-4 text-slate-400">
                            We favour proven, commercially available automation hardware and
                            build around it with an engineering methodology refined project after
                            project, so every solution is documented, maintainable, and built to last.
                        </p>
                        <Link to="/about-us" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-400 hover:text-brand-300">
                            More about Techssar
                            <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {servicePreview.slice(0, 2).map((s) => (
                            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                                <IconTile className="mb-4" />
                                <h3 className="text-base font-semibold text-white">{s.title}</h3>
                                <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
                            </div>
                        ))}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
                            <IconTile className="mb-4" />
                            <h3 className="text-base font-semibold text-white">{servicePreview[2].title}</h3>
                            <p className="mt-2 text-sm text-slate-400">{servicePreview[2].desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ preview */}
            <section className="border-t border-white/5 bg-ink-900 py-24">
                <div className="container mx-auto max-w-3xl px-6">
                    <div className="text-center">
                        <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">FAQ</span>
                        <h2 className="mt-3 text-3xl font-bold text-white">Common questions</h2>
                    </div>
                    <div className="mt-10 space-y-4">
                        {faqPreview.map((f) => (
                            <div key={f.q} className="rounded-xl border border-white/10 bg-white/5 p-6">
                                <h3 className="font-semibold text-white">{f.q}</h3>
                                <p className="mt-2 text-sm text-slate-400">{f.a}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link to="/faq" className="font-semibold text-brand-400 hover:text-brand-300">
                            See all FAQs &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            {/* Newsletter / CTA */}
            <section className="border-t border-white/5 bg-ink-950 py-24">
                <div className="container mx-auto max-w-2xl px-6 text-center">
                    <h2 className="text-3xl font-bold text-white">Stay in the loop</h2>
                    <p className="mt-4 text-slate-400">
                        Get occasional updates on new case studies, insights and openings from Techssar.
                    </p>
                    <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-md" noValidate>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <label htmlFor="home-email" className="sr-only">Email address</label>
                            <input
                                id="home-email"
                                type="email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
                                placeholder="you@example.com"
                                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                            />
                            <button
                                type="submit"
                                className="shrink-0 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3 font-semibold text-ink-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="mt-3 text-sm" aria-live="polite">
                            {status === 'success' && <span className="text-brand-400">Thanks — you&apos;re on the list.</span>}
                            {status === 'error' && <span className="text-ember-400">Please enter a valid email address.</span>}
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Home;
