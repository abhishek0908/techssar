// Contact.jsx

import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const initialForm = { name: '', email: '', message: '' };

const Contact = () => {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setStatus('idle');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.message) {
            setStatus('error');
            return;
        }
        setStatus('success');
        setForm(initialForm);
    };

    return (
        <main>
            <PageHeader
                eyebrow="Let's talk"
                title="Contact Us"
                subtitle="Tell us about your process and where automation could help — we'll get back to you."
            />

            <section className="bg-ink-900 py-20">
                <div className="container mx-auto grid max-w-4xl gap-10 px-6 lg:grid-cols-5">
                    <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4" noValidate>
                        <div>
                            <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-300">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-300">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-300">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                                placeholder="What are you looking to automate?"
                            />
                        </div>
                        <button
                            type="submit"
                            className="rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3 font-semibold text-ink-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Send message
                        </button>
                        <p className="text-sm" aria-live="polite">
                            {status === 'success' && <span className="text-brand-400">Thanks — we&apos;ll be in touch soon.</span>}
                            {status === 'error' && <span className="text-ember-400">Please fill in every field with a valid email.</span>}
                        </p>
                    </form>

                    <div className="lg:col-span-2">
                        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Email</h3>
                            <a href="mailto:info@techssar.com" className="mt-2 block text-brand-400 hover:text-brand-300">
                                info@techssar.com
                            </a>
                            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-slate-300">Careers</h3>
                            <a href="mailto:careers@techssar.com" className="mt-2 block text-brand-400 hover:text-brand-300">
                                careers@techssar.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;
