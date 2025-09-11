// Hackathon.jsx
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import Challenges from './Challenges';

const ThreeBackground = () => (
    <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <Float speed={2} rotationIntensity={1}>
            <Sphere args={[1.4, 64, 64]}>
                <MeshDistortMaterial color="#3B82F6" distort={0.5} speed={2} />
            </Sphere>
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
);

const Hackathon = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // Disable background scroll when menu is open
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);

    const faqs = [
        ["Who can participate in the SRIMT Hackathon 2025?", "Undergraduate Students, Graduate/Postgraduate Students, PhD Students, and Research Scholars in India are eligible to participate."],
        ["What should be the ideal team size?", "Each team shall consist of 3 to 4 members. Members can be from colleges/universities."],
        ["What is the cost of participating?", "A participation fee of ₹50 per candidate will be charged."],
        ["Do I need prior any experience?", "No. The hackathon is open to all eligible students passionate about solving real-world challenges in space technology."],
        ["Will SRIMT mentors be available throughout?", "Yes. Participants will have access to mentorship from SRIMT during the hackathon phases."],
        ["Do we need to create a prototype now?", "Yes. All participants must build and submit a working prototype as part of their final project by the deadline (16th September). Ensure your submission is complete and functional for evaluation."]
    ];

    return (
        <div className="bg-black text-white font-sans scroll-smooth">

            {/* Navbar */}
            <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl px-6 py-3 bg-white text-black rounded-full shadow-lg flex items-center justify-between">
                <ul className="hidden md:flex space-x-8 font-semibold text-sm">
                    {['about', 'why', 'challenges', 'schedule', 'rewards', 'faqs'].map((item) => (
                        <li key={item}><a href={`#${item}`} className="hover:text-blue-600 capitalize">{item}</a></li>
                    ))}
                    <li><a href="/whatsapp" className="hover:text-blue-600 capitalize">WhatsApp</a></li>
                </ul>

                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <a href="#registration" className="hidden md:inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
                    Registration Open
                </a>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <>
                    <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden" onClick={() => setMenuOpen(false)} />
                    <div className="md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-white text-black rounded-xl p-4 z-50 shadow-lg">
                        <ul className="flex flex-col gap-3 text-sm font-semibold">
                            {['about', 'why', 'challenges', 'schedule', 'rewards', 'faqs'].map((item) => (
                                <li key={item}><a href={`#${item}`} className="hover:text-blue-600 capitalize" onClick={() => setMenuOpen(false)}>{item}</a></li>
                            ))}
                            <li><a href="/whatsapp" className="hover:text-blue-600 capitalize">WhatsApp</a></li>
                            <li>
                                <a href="#registration" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold block hover:bg-blue-700 transition" onClick={() => setMenuOpen(false)}>
                                    Registration Open
                                </a>
                            </li>
                        </ul>
                    </div>
                </>
            )}

            {/* Hero Section */}
            <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <ThreeBackground />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                <div className="relative z-20 max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-2">
                        <span className="text-blue-500">BUILD </span><span className="text-white">WITH</span><br />
                        <span className="text-orange-500">SRIMT</span><br />
                        <span className="text-white">HACKATHON 2025</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl font-light max-w-xl mx-auto">
                        Welcome to the SRIMT Hackathon 2025 — a national-level innovation challenge proudly hosted by SR Group of Institutions (SRGI), in collaboration with CodeNestia, empowering students to solve real-world space-tech challenges.
                    </p>
                    <p className="mt-3 mb-8 text-sm md:text-base font-semibold text-gray-300">
                        Organised by <span className="text-white font-bold">SR Group of Institutions (SRGI)</span>
                    </p>
                    <a href="#registration" className="inline-block mt-6 px-8 py-3 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-black transition">
                        Registration Open
                    </a>
                </div>
            </section>

            {/* About */}
            <section id="about" className="max-w-6xl mx-auto px-6 md:px-12 py-16">
                <h2 className="text-3xl font-bold mb-6 border-b border-blue-600 inline-block">About</h2>
                <p className="text-gray-300 leading-relaxed max-w-4xl">
                    The SRGI Hackathon 2025 is a national-level innovation challenge designed to empower budding engineers and tech enthusiasts. Open to B.Tech students across disciplines, this hackathon offers a dynamic platform to showcase your creativity, coding skills, and problem-solving abilities. Join us at SR Group of Institutions to collaborate, build real-world solutions, and take your ideas from concept to reality.
                </p>
            </section>

            {/* Who Can Participate */}
            <section className="bg-gray-900 py-16 px-6 md:px-12 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 border-b border-blue-600 inline-block">Who Can Participate?</h2>
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        {["CSE (All Branch)", "IT (All Branch)", "B.Voc"].map((role) => (
                            <button key={role} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition">
                                {role}
                            </button>
                        ))}
                    </div>
                    <p className="text-sm text-gray-300 italic">Note: Working Professionals are <span className="text-red-400 font-semibold">not eligible</span> to participate in the hackathon.</p>
                </div>
            </section>

            {/* Why Participate */}
            <section id="why" className="bg-gray-900 py-16 px-6 md:px-12">
                <h2 className="text-3xl font-bold mb-8 border-b border-blue-600 inline-block">Why Participate?</h2>
                <ul className="max-w-4xl space-y-6 text-gray-300 list-disc list-inside leading-relaxed">
                    <li><strong>Learn from Industry Mentors:</strong> Get guidance from experienced faculty members and industry professionals to shape your innovative ideas.</li>
                    <li><strong>Network & Collaborate:</strong> Work with talented peers, build strong teams, and connect with like-minded tech enthusiasts.</li>
                    <li><strong>Internship & Placement Opportunities:</strong> Top-performing teams may receive internship or placement opportunities through CodeNestia tie-ups.</li>
                    <li><strong>Recognition & Certification:</strong> Earn certificates, prizes, and recognition that strengthen your resume and academic profile.</li>
                </ul>
            </section>

            {/* Challenges */}
            <Challenges />

            {/* Schedule */}
            <section id="schedule" className="bg-gray-900 py-16 px-6 md:px-12">
                <h2 className="text-3xl font-bold mb-8 border-b border-blue-600 inline-block">Schedule</h2>
                <ul className="text-gray-300 space-y-4 max-w-3xl">
                    <li><strong>Registrations Open: </strong> Sep 11 – Sep 15</li>
                    <li><strong>Idea Submission Deadline:</strong> Sep 15, 2025</li>
                    <li><strong>Hackathon Days:</strong> Sep 16, 2025</li>
                    <li><strong>Result Announcement:</strong> Sep 16, 2025</li>
                </ul>
            </section>

            {/* Rewards */}
            <section id="rewards" className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 border-b border-blue-600 inline-block">Rewards</h2>
                <div className="text-gray-300 space-y-4">
                    <p><strong>Top 3 Winners:</strong> Certificates, cash prizes, and more.</p>
                    <p><strong>All Participants:</strong> E-certificates from SRGI tie-up by CodeNestia.</p>
                </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="bg-gray-900 py-16 px-6 md:px-12">
                <h2 className="text-3xl font-bold mb-8 border-b border-blue-600 inline-block">FAQs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                    {faqs.map(([question, answer], i) => (
                        <div key={i} className="bg-gray-800 p-4 rounded-lg">
                            <h4 className="font-semibold text-white mb-2">{question}</h4>
                            <p className="text-sm">{answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Registration */}
            <section id="registration" className="py-16 px-6 md:px-12 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Register Now</h2>
                <p className="text-gray-300 mb-6">Click below to register your team and secure your spot in SRIMT Hackathon 2025!</p>
                <a href="https://your-registration-form-link.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                    Register Your Team
                </a>
            </section>

            {/* Footer */}
            <footer className="bg-black text-gray-500 py-6 text-center text-sm">
                © 2025 SRGI Hackathon. Built with ❤️ by CodeNestia.
            </footer>
        </div>
    );
};

export default Hackathon;
