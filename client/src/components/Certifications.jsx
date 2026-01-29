import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Loading from './Loading';

const Certifications = () => {
    const [certifications, setCertifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCertifications = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/certifications`);
                setCertifications(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching certifications", err);
                setError("Failed to load certifications.");
                setLoading(false);
            }
        };
        fetchCertifications();
    }, []);

    if (loading) return <Loading />;
    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <section className="py-20 bg-[var(--bg-secondary)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-title">Licenses & Certifications</h2>
                    <p className="mt-8 max-w-3xl mx-auto text-xl text-[var(--text-secondary)] tracking-wide">
                        My commitment to continuous learning, validated by industry credentials.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-[var(--card-bg)] rounded-2xl shadow-lg p-6 border border-[var(--border-color)] flex items-center gap-4 hover:-translate-y-2 hover:shadow-xl hover:border-[var(--accent-primary)] transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-2xl group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-colors duration-300">
                                <i className={cert.icon}></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg leading-tight group-hover:text-[var(--accent-primary)] transition-colors">{cert.title}</h3>
                                <p className="text-sm text-[var(--text-secondary)] mt-1">{cert.issuer}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
