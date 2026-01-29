import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Loading from './Loading';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/experience`);
                setExperiences(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching experience", err);
                setError("Failed to load experience data.");
                setLoading(false);
            }
        };
        fetchExperience();
    }, []);

    if (loading) return <Loading />;
    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <section className="py-20 bg-[var(--bg-primary)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-title">Professional Journey</h2>
                    <p className="mt-8 max-w-3xl mx-auto text-xl text-[var(--text-secondary)] tracking-wide">
                        My journey in tech has been defined by hands-on learning, tangible results, and continuous improvement.
                    </p>
                </div>
                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-[24px] md:left-1/2 w-0.5 h-full bg-[var(--border-color)] transform -translate-x-1/2">
                        <div className="w-full h-full bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-secondary)] origin-top scale-y-100 transition-transform duration-1000"></div>
                    </div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`relative flex items-center mb-10 w-full ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                        >
                            {/* Icon */}
                            <div className="absolute left-[24px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full z-20 text-white text-xl shadow-lg timeline-item-icon">
                                <i className={exp.icon}></i>
                            </div>

                            {/* Content */}
                            <div className="w-full pl-12 md:pl-0 md:w-1/2 md:flex md:justify-end md:pr-12 md:even:justify-start md:even:pl-12">
                                <div className="bg-[var(--card-bg)] rounded-2xl shadow-lg p-7 border border-[var(--border-color)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 md:w-full">
                                    <p className="text-sm font-medium gradient-text">{exp.date}</p>
                                    <h3 className="mb-1 font-bold text-lg">{exp.role}</h3>
                                    <p className="mb-2 font-semibold text-[var(--text-secondary)]">{exp.company}</p>
                                    <p className="text-sm leading-relaxed tracking-wide text-[var(--text-secondary)]">{exp.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
