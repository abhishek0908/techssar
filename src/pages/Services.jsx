// Services.jsx

import React from 'react';
import PageHeader from '../components/PageHeader';
import IconTile from '../components/IconTile';

const services = [
    {
        title: 'Advanced Environment Controls',
        desc: 'Tight environmental control for manufacturing, packing, storage and research spaces in biotech, food & beverage, pharmaceutical and textile sectors — holding temperature, humidity, pressure, flow and particle count within validated limits.',
    },
    {
        title: 'Continuous Process Controls',
        desc: 'Distillation, filtration, gas separation, reactor and scrubber control, utilities and wastewater treatment — processes that demand constant monitoring of multiple variables at once.',
    },
    {
        title: 'Energy Management Controls',
        desc: 'Managing energy cost and emissions compliance across chemical plants, healthcare, refineries and power generation, including burner control and combustion management for boilers, furnaces and process heaters.',
    },
    {
        title: 'Legacy System Migration',
        desc: 'Evaluating and migrating off legacy PLCs or relay logic without holding your operations hostage to undocumented, end-of-life hardware.',
    },
    {
        title: 'Plant Efficiency & Reporting',
        desc: 'Real-time performance data behind indices like OEE, KPI, PPI and Process Yield, so lean manufacturing decisions are backed by numbers, not guesswork.',
    },
    {
        title: 'Utility Management Controls',
        desc: 'Effective monitoring and control of plant utilities like compressed air and steam, with fast root-cause diagnosis to protect equipment and maximize utilization.',
    },
    {
        title: 'Material Handling & Batch Management',
        desc: 'Automated identification and inspection across in-plant transport of bulk solids, liquids, packaging and finished goods.',
    },
    {
        title: 'Manufacturing Execution Systems',
        desc: 'MES/MOM for regulated industries that need full product-lifecycle tracking — plant-wide visibility, material tracking, ERP integration and executive dashboards.',
    },
    {
        title: 'PLC, DCS, HMI & SCADA',
        desc: 'Solution conceptualization, design, engineering, manufacturing and commissioning across the major control platforms, kept current through our technology partners.',
    },
];

const Services = () => {
    return (
        <main>
            <PageHeader
                eyebrow="What we do"
                title="Services"
                subtitle="A 360-degree approach — from solution conceptualization and design through engineering, manufacturing and commissioning on your premises."
            />

            <section className="bg-ink-900 py-20">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((s) => (
                            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                                <IconTile className="mb-4" />
                                <h3 className="text-base font-semibold text-white">{s.title}</h3>
                                <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Services;
