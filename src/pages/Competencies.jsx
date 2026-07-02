// Competencies.jsx

import React from 'react';
import PageHeader from '../components/PageHeader';
import IconTile from '../components/IconTile';

const competencies = [
    {
        title: 'Project Management',
        desc: 'Every project starts with detailed planning and coordination, and runs on a proven execution methodology from specification through system acceptance, using industry best practices and tools throughout.',
    },
    {
        title: 'Control System Architecture & Design',
        desc: 'In-house capability across bill of materials, conduit layout and cable interconnect drawings, control loop diagrams, control panel design, electrical & control system design, load studies, hardware/software specification, design documentation and bench testing.',
    },
    {
        title: 'PLC Programming',
        desc: 'Open, consistent, well-documented and maintainable programs across Ladder Logic, Sequential Function Charts, Function Block Diagram, Structured Text, Instruction List and more.',
    },
    {
        title: 'SCADA & HMI Development',
        desc: 'Industrial network development spanning Radio, Fiber Optic, ControlNet, Remote I/O, Ethernet/IP, TCP/IP, RS232/422/485, Fieldbus, Profibus, Modbus and DeviceNet.',
    },
    {
        title: 'Project Commissioning',
        desc: 'Engineers who support implementation, start-up and commissioning end to end — instrumentation procurement and integration, loop design, field supervisory services, validation and acceptance testing — plus training for your plant personnel.',
    },
    {
        title: 'Operation Manuals & Documentation',
        desc: 'Clear, usable operation manuals and technical documentation for every piece of equipment we supply.',
    },
    {
        title: 'System Maintenance & Warranty Support',
        desc: 'Ongoing support after commissioning, so the system stays reliable long after handover.',
    },
];

const Competencies = () => {
    return (
        <main>
            <PageHeader
                eyebrow="How we work"
                title="Competencies"
                subtitle="Cutting-edge capabilities we continuously upgrade to keep pace with the sectors we serve."
            />

            <section className="bg-ink-900 py-20">
                <div className="container mx-auto max-w-4xl px-6 space-y-6">
                    {competencies.map((c) => (
                        <div key={c.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                            <IconTile className="mb-4" />
                            <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                            <p className="mt-2 text-sm text-slate-400">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Competencies;
