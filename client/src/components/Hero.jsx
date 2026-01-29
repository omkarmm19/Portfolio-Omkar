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

    const roles = ["Aspiring DevOps Engineer", "Backend Developer Python (FastAPI)", "AWS and Cloud Enthusiast", "Full Stack Developer MERN", "Problem Solver"];

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

    // Typewriter Logic
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
                setTimeout(() => setIsDeleting(true), 1500);
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -z-10 animate-pulse" />

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative inline-block mb-6"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-lg opacity-50" />
                    {/* Assuming no profile image URL in data yet, using placeholder or just name if intended */}
                    {/* If you want a profile image, add <img> here. For now, strictly following text design. */}
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm md:text-base font-medium tracking-widest text-cyan-400 uppercase mb-4"
                >
                    Hello, I'm
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-6xl md:text-8xl font-bold font-display tracking-tight text-white mb-6"
                >
                    {data.name}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="h-12 text-2xl md:text-4xl font-light text-slate-300 mb-8"
                >
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                        {text}
                    </span>
                    <span className="animate-blink">|</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-10"
                >
                    {data.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform"
                    >
                        View Work
                    </a>
                    <a
                        href={data.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-lg backdrop-blur-sm transition-all"
                    >
                        Resume
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 flex justify-center gap-8 text-2xl text-slate-400"
                >
                    <a href={data.socialLinks.linkedin} className="hover:text-purple-400 transition-colors transform hover:-translate-y-1 block"><i className="fab fa-linkedin"></i></a>
                    <a href={data.socialLinks.github} className="hover:text-white transition-colors transform hover:-translate-y-1 block"><i className="fab fa-github"></i></a>
                    <a href={data.socialLinks.leetcode} className="hover:text-yellow-500 transition-colors transform hover:-translate-y-1 block"><i className="fa-solid fa-code"></i></a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
