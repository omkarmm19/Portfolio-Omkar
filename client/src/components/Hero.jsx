import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Loading from './Loading';

const Hero = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = [
        "Building FastAPI Backends · PostgreSQL · Docker",
        "DevOps — CI/CD · Docker · AWS · Terraform",
        "AI Systems with Groq Llama-3 & RAG Pipelines",
        "Go CLI Tooling · IaC · Zero-touch Deployments",
        "Shipped. Real. Scalable."
    ];

    const openTo = [
        { icon: 'fa-brands fa-python', label: 'Python FastAPI / AI Backend' },
        { icon: 'fas fa-infinity',      label: 'DevOps & Cloud Engineering' },
        { icon: 'fab fa-aws',           label: 'AWS Cloud' },
        { icon: 'fas fa-graduation-cap',label: 'Internships · Full-time' },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/general`);
                setData(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching general data", err);
                setError("Failed to load profile data.");
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];
            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );
            setTypingSpeed(isDeleting ? 30 : 150);
            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1800);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };
        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum]);

    if (loading) return <div className="h-screen flex items-center justify-center"><Loading /></div>;
    if (error) return <div className="h-screen flex items-center justify-center text-red-500">{error}</div>;
    if (!data) return null;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
            {/* Background Glows */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/15 rounded-full blur-[130px] -z-10 animate-pulse" />
            <div className="absolute top-2/3 right-1/4 w-[320px] h-[320px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute top-1/4 left-1/5 w-[260px] h-[260px] bg-blue-600/10 rounded-full blur-[80px] -z-10" />

            <div className="container mx-auto px-4 z-10 text-center max-w-4xl">

                {/* Greeting */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xs md:text-sm font-semibold tracking-[0.3em] text-cyan-400 uppercase mb-3"
                >
                    Hello, I'm
                </motion.p>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold font-display tracking-tight text-white mb-3"
                >
                    {data.name}
                </motion.h1>

                {/* Subtitle — now includes DevOps explicitly */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-base md:text-lg font-medium text-purple-300/80 tracking-widest mb-6"
                >
                    FastAPI Backend &nbsp;&middot;&nbsp; DevOps &amp; Cloud &nbsp;&middot;&nbsp; AI Engineer
                </motion.p>

                {/* Typewriter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="h-10 md:h-12 text-xl md:text-2xl font-light text-slate-300 mb-10"
                >
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                        {text}
                    </span>
                    <span className="animate-blink text-purple-400">|</span>
                </motion.div>

                {/* About Me */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-2xl mx-auto mb-8"
                >
                    <div className="relative px-6 py-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm text-left">
                        <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-gradient-to-b from-purple-500 to-cyan-500" />
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                            CS undergrad specializing in{' '}
                            <span className="text-white font-semibold">Cloud Computing &amp; Automation</span>{' '}
                            at VIT Bhopal. I design and ship production-grade systems — FastAPI backends
                            with PostgreSQL, containerized deployments with Docker &amp; Nginx,{' '}
                            <span className="text-white font-semibold">cloud infrastructure on AWS</span>,
                            and zero-touch CI/CD pipelines.
                            Also building Go CLI tooling and LLM-powered AI platforms with Groq Llama-3.
                        </p>
                        <p className="text-slate-400 text-sm mt-3 font-medium tracking-wide">
                            Not demos. Not prototypes.{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">
                                Shipped. Real. Scalable.
                            </span>
                        </p>
                    </div>
                </motion.div>

                {/* AWS Cert Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                    className="flex flex-wrap justify-center gap-3 mb-8"
                >
                    {[
                        { label: 'AWS Solutions Architect — Associate', link: 'https://www.credly.com/badges/e0541226-e871-4e0f-9fc8-609dfd24f873/public_url' },
                        { label: 'AWS Cloud Practitioner — Certified', link: 'https://www.credly.com/badges/bad01b94-b5f9-4260-a1fb-8cc68aea78d5/public_url' },
                    ].map((cert, i) => (
                        <a
                            key={i}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF9900]/40 bg-[#FF9900]/10 text-[#FF9900] text-xs font-semibold tracking-wide hover:bg-[#FF9900]/20 hover:border-[#FF9900]/70 transition-all duration-200 hover:scale-105"
                        >
                            <i className="devicon-amazonwebservices-plain colored text-sm" />
                            {cert.label}
                            <i className="fas fa-external-link-alt text-[10px] opacity-50" />
                        </a>
                    ))}
                </motion.div>

                {/* Open To — individual tags (much cleaner) */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mb-8"
                >
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-3 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block mr-2 align-middle" />
                        Open to opportunities
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {openTo.map((item, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.85 + i * 0.07 }}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-slate-300 text-xs font-medium hover:bg-white/[0.09] hover:border-purple-500/40 hover:text-white transition-all duration-200"
                            >
                                <i className={`${item.icon} text-purple-400 text-[11px]`} />
                                {item.label}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="flex flex-wrap justify-center gap-4 mb-14"
                >
                    <a
                        href="#projects"
                        className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-base hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 flex items-center gap-2"
                    >
                        <i className="fas fa-rocket text-sm group-hover:rotate-12 transition-transform duration-300" />
                        View My Work
                    </a>
                    <a
                        href={data.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-medium text-base backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
                    >
                        <i className="fas fa-file-alt text-sm" />
                        Resume
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="flex justify-center gap-4"
                >
                    {[
                        { href: data.socialLinks?.linkedin, icon: 'fab fa-linkedin', label: 'LinkedIn', hoverColor: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40' },
                        { href: data.socialLinks?.github,   icon: 'fab fa-github',   label: 'GitHub',   hoverColor: 'hover:text-white hover:border-white/40' },
                        { href: data.socialLinks?.leetcode, icon: 'fa-solid fa-code', label: 'LeetCode', hoverColor: 'hover:text-[#FFA116] hover:border-[#FFA116]/40' },
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={social.label}
                            className={`w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 text-lg ${social.hoverColor} hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-200`}
                        >
                            <i className={social.icon} />
                        </a>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
