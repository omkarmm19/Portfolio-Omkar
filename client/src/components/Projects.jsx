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
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[var(--card-bg)] rounded-2xl shadow-lg border border-[var(--border-color)] overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--accent-primary)] transition-all duration-300 group"
                        >
                            <div className="relative overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                                {/* Quick action overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="px-4 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-purple-400 hover:text-white transition-colors flex items-center gap-2"
                                        >
                                            <i className="fas fa-external-link-alt text-xs" />
                                            {project.gitLink ? 'Live Demo' : 'View'}
                                        </a>
                                    )}
                                    {project.gitLink && (
                                        <a
                                            href={project.gitLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="px-4 py-2 rounded-full bg-white/10 text-white border border-white/30 text-sm font-bold hover:bg-white/20 transition-colors flex items-center gap-2 backdrop-blur-sm"
                                        >
                                            <i className="fab fa-github text-xs" />
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech && project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-semibold px-2 py-1 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-[var(--text-secondary)] text-sm flex-grow" style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}>{project.desc}</p>

                                {/* Bottom action bar */}
                                <div className="flex gap-3 mt-5 pt-4 border-t border-[var(--border-color)]">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                                        >
                                            <i className="fas fa-external-link-alt" />
                                            {project.gitLink ? 'Live Demo' : 'View Project'}
                                        </a>
                                    )}
                                    {project.gitLink && (
                                        <a
                                            href={project.gitLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-white transition-colors"
                                        >
                                            <i className="fab fa-github" />
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
