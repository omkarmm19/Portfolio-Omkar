import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [statusMsg, setStatusMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // Check for EmailJS keys
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setStatus('error');
            setStatusMsg('Missing EmailJS keys in .env file!');
            setTimeout(() => setStatus('idle'), 5000);
            return;
        }

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: "Omkar"
                },
                publicKey
            );
            setStatus('success');
            setStatusMsg('Message sent successfully! I will get back to you soon.');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setStatus('error');
            console.error('EmailJS Error:', error);
            setStatusMsg('Failed to send message. Please try again.');
        }

        // Reset status after 5 seconds
        setTimeout(() => {
            setStatus('idle');
            setStatusMsg('');
        }, 5000);
    };

    return (
        <section className="py-20 bg-[var(--bg-secondary)] relative overflow-hidden" id="contact">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">Contact Me</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-7xl mx-auto">
                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-bold mb-6 text-white">Let's build something extraordinary.</h3>
                        <p className="text-[var(--text-secondary)] mb-10 text-lg leading-relaxed">
                            Whether you have a question, a project idea, or just want to say hi, I'm always open to discussing new opportunities and how we can work together.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-[var(--card-bg)] p-6 rounded-2xl flex items-center gap-5 border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-colors duration-300">
                                <div className="w-14 h-14 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center text-[var(--accent-primary)] text-2xl">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Email</h4>
                                    <p className="text-[var(--text-secondary)]">omkarmahesh12345@gmail.com</p>
                                </div>
                            </div>

                            <div className="bg-[var(--card-bg)] p-6 rounded-2xl flex items-center gap-5 border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-colors duration-300">
                                <div className="w-14 h-14 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center text-[var(--accent-primary)] text-2xl">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Phone</h4>
                                    <p className="text-[var(--text-secondary)]">+91 7019936868</p>
                                </div>
                            </div>

                            <div className="bg-[var(--card-bg)] p-6 rounded-2xl flex items-center gap-5 border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-colors duration-300">
                                <div className="w-14 h-14 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center text-[var(--accent-primary)] text-2xl">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Location</h4>
                                    <p className="text-[var(--text-secondary)]">Bangalore, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-[var(--card-bg)] p-8 rounded-3xl border border-[var(--border-color)] shadow-xl relative"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <i className="far fa-comment-alt text-purple-500"></i> Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-white ml-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-white ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-semibold text-white ml-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-white ml-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="5"
                                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className={`w-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-[var(--accent-primary)]/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {status === 'loading' ? (
                                    <>
                                        <i className="fas fa-spinner fa-spin"></i> Sending...
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-paper-plane text-sm"></i> Send Message
                                    </>
                                )}
                            </button>


                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="text-green-400 text-center font-medium bg-green-400/10 p-3 rounded-lg border border-green-400/20"
                                    >
                                        {statusMsg}
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="text-red-400 text-center font-medium bg-red-400/10 p-3 rounded-lg border border-red-400/20"
                                    >
                                        {statusMsg}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
