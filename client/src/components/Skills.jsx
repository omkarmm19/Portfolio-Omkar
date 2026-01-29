import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Loading from './Loading';

// Mock data (replace with API)
const mockSkills = [
    {
        category: 'Languages',
        icon: 'fas fa-code',
        items: [
            { name: 'Java', icon: 'devicon-java-plain colored' },
            { name: 'Python', icon: 'devicon-python-plain colored' },
            { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
            { name: 'SQL', icon: 'fas fa-database' },
            { name: 'HTML', icon: 'devicon-html5-plain colored' },
            { name: 'CSS', icon: 'devicon-css3-plain colored' }
        ]
    },
    // ... we will fetch this actually
];

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/skills`);
                setSkills(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching skills", err);
                setError("Failed to load skills.");
                setLoading(false);
            }
        };
        fetchSkills();
    }, []);

    if (loading) return <Loading />;
    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <section className="py-24 relative overflow-hidden" id="skills">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold mb-6 font-display"
                    >
                        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                            Technical Artillery
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto"
                    >
                        The tools and technologies I use to build scalable, resilient, and high-performance systems.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative h-full"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                            <div className="relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-[#111] transition-colors flex flex-col">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl text-purple-400 border border-white/10 shrink-0">
                                        <i className={skillGroup.icon}></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-white font-display leading-tight">{skillGroup.category}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2.5 content-start">
                                    {skillGroup.items.map((skill, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/5 hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-default"
                                        >
                                            {skill.icon.startsWith('devicon') ? (
                                                <i className={`${skill.icon} text-lg`}></i>
                                            ) : (
                                                <i className={`${skill.icon} text-lg text-blue-400`}></i>
                                            )}
                                            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
