const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-black text-white pt-12 pb-6 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-8">

                {/* Follow Me Section */}
                <div className="mb-12">
                    <h3 className="text-gray-500 text-sm font-semibold tracking-wider uppercase mb-4">Follow Me</h3>
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/omkar-mahesh-a99b70289/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110 text-gray-400 hover:text-white border border-white/5">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/omkarmm19" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110 text-gray-400 hover:text-white border border-white/5">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://leetcode.com/u/omkarmm19/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110 text-gray-400 hover:text-white border border-white/5">
                            <i className="fas fa-code"></i>
                        </a>
                        <a href="https://www.instagram.com/omkarmm19?igsh=MW5zcG9rN251czMzdA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110 text-gray-400 hover:text-white border border-white/5">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
                    {/* Brand */}
                    <div className="text-2xl font-bold font-display tracking-wide text-purple-500">
                        Portfolio.
                    </div>

                    {/* Copyright */}
                    <div className="text-sm text-gray-400 flex flex-col md:flex-row items-center gap-1">
                        <span>&copy; {currentYear} Omkar Mahesh. All rights reserved.</span>
                        <span className="hidden md:inline text-gray-600">|</span>
                        <span>Designed & Built with <i className="fas fa-heart text-red-500 mx-1"></i> by Omkar Mahesh</span>
                    </div>

                    {/* Scroll to Top */}
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all hover:-translate-y-1 group"
                        aria-label="Scroll to top"
                    >
                        <i className="fas fa-arrow-up text-gray-400 group-hover:text-white transition-colors"></i>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
