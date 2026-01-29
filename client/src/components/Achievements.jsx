import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Loading from './Loading';

const Achievements = () => {
    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/achievements`);
                setAchievements(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching achievements", err);
                setError("Failed to load achievements.");
                setLoading(false);
            }
        };
        fetchAchievements();
    }, []);

    if (loading) return <Loading />;
    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <section className="py-20 bg-[var(--bg-primary)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-title">Key Achievements</h2>
                    <p className="mt-8 max-w-3xl mx-auto text-xl text-[var(--text-secondary)] tracking-wide">
                        Highlights of my accomplishments in competitive programming and leadership.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2 border border-[var(--border-color)] ${achievement.spotlight ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white' : 'bg-[var(--card-bg)]'}`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 flex items-center justify-center rounded-full text-xl ${achievement.spotlight ? 'bg-white/20' : 'bg-[var(--bg-secondary)] text-[var(--accent-primary)]'}`}>
                                    <i className={achievement.icon}></i>
                                </div>
                                <div>
                                    <h3 className={`text-xl font-bold ${achievement.spotlight ? 'text-white' : 'text-[var(--text-primary)]'}`}>{achievement.title}</h3>
                                    <p className={`text-sm mt-1 ${achievement.spotlight ? 'text-white/80' : 'text-[var(--text-secondary)]'}`}>{achievement.issuer}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
