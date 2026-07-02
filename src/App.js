// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Competencies from './pages/Competencies';
import CaseStudies from './pages/CaseStudies';
import Careers from './pages/Careers';
import Newsroom from './pages/Newsroom';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './index.css'

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-ink-950">
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/industries" element={<Industries />} />
                    <Route path="/competencies" element={<Competencies />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/newsroom" element={<Newsroom />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
