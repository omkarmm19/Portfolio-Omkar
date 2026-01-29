import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Loading from './Loading';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);
                setProjects(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching projects", err);
                setError("Failed to load projects.");
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading) return <Loading />;
    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <section className="py-20 bg-[var(--bg-secondary)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-title">Project Showcase</h2>
                    <p className="mt-8 max-w-3xl mx-auto text-xl text-[var(--text-secondary)] tracking-wide">
                        Highlights of my work where I've transformed ideas into functional applications.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[var(--card-bg)] rounded-2xl shadow-lg border border-[var(--border-color)] overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--accent-primary)] transition-all duration-300"
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech && project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-semibold px-2 py-1 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-[var(--text-secondary)] text-sm flex-grow line-clamp-3">{project.desc}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
