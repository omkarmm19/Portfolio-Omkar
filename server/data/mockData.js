const generalInfo = {
    name: 'Omkar Mahesh',
    title: 'Aspiring DevOps Engineer | Python Backend (FastAPI) | MERN Developer | Cloud Enthusiast',
    subtitle: 'Cloud & GenAI Enthusiast',
    description: `Pre-Final Year B.Tech CSE (Cloud Computing & Automation) | VITB '27

Cloud & DevOps-focused CSE student skilled in building and automating scalable infrastructure using AWS, Docker, Kubernetes, and CI/CD.

Strong in Python backend development (FastAPI) with hands-on exposure to MERN stack and a solid foundation in DSA.

Driven by cloud-native architectures, automation, and reliability-first engineering.

Open to internships and real-world project collaborations (2027 batch).`,
    email: 'omkarmahesh12345@gmail.com',
    phone: '+91 7019936868',
    location: 'Bidar, Karnataka',
    socialLinks: {
        linkedin: 'https://www.linkedin.com/in/omkar-mahesh-a99b70289/',
        github: 'https://github.com/omkarmm19',
        leetcode: 'https://leetcode.com/u/omkarmm19/'
    },
    resumeLink: 'https://raw.githubusercontent.com/omkarmm19/Resume-Omkar/main/Omkar_Mahesh_Resume.pdf'
};

const experience = [
    {
        role: 'Web Development Intern',
        company: 'Coding Samurai',
        date: 'July 2025 - August 2025',
        desc: 'Architected and deployed a scalable, full-stack event management web application. Leveraged Next.js for SSR and performance, integrated Firebase for real-time database and auth, and deployed on Vercel, resulting in a 30% reduction in average page load time.',
        icon: 'fa-solid fa-code'
    },
    {
        role: 'Open Source Contributor',
        company: 'GSSoC & Hacktoberfest \'24',
        date: '2024',
        desc: 'Actively contributed to 5+ open-source projects. Merged 15+ pull requests, resolving critical bugs and adding features. Enhanced UI components in React and optimized backend API endpoints in Node.js, improving application responsiveness and maintainability.',
        icon: 'fa-solid fa-code-pull-request'
    }
];

const education = [
    {
        role: 'B.Tech, CSE (Cloud Computing & Automation)',
        company: 'VIT Bhopal University',
        date: '2023 - 2027',
        desc: 'CGPA: 8.6/10.0. Relevant Coursework: Data Structures & Algorithms, OOPS, Operating Systems, Computer Networks, Database Management Systems. Key Skills: Gained hands-on experience in Full-Stack Development, Cloud service management (AWS/GCP), and CI/CD pipeline implementation. Leadership: Event Management Lead for the Mozilla Firefox Club, organizing technical workshops and coding events for 500+ students.',
        icon: 'fa-solid fa-graduation-cap'
    }
];

const projects = [
    {
        title: 'DocuCraft — AI Document Platform',
        desc: 'Shipped a full-stack AI document platform integrating Groq Llama-3 via structured JSON-mode prompting to generate PPT, DOCX, and PDF — serving real users across 5 themes and 4–15 slide configs. Built FastAPI backend with PostgreSQL via SQLAlchemy for user auth and per-user download history. Containerized with Docker Compose and automated CI/CD via GitHub Actions for zero-touch deployment in under 3 minutes.',
        tech: ['FastAPI', 'React', 'PostgreSQL', 'SQLAlchemy', 'Groq API', 'Docker', 'GitHub Actions'],
        image: 'https://placehold.co/600x400/111827/9ca3af?text=DocuCraft',
        link: 'https://docuucraft.netlify.app',
        gitLink: 'https://github.com/omkarmm19/docucraft'
    },
    {
        title: 'Forge Todo — Devopsified',
        desc: 'Engineered a full-stack task manager with FastAPI, React, and PostgreSQL across 4 core resources with user-isolated CRUD. Implemented JWT auth and bcrypt hashing, securing 100% of access routes. Orchestrated 4 services (frontend, backend, database, proxy) using Docker Compose and Nginx for one-command deployment. Automated Docker builds via GitHub Actions CI/CD with multi-stage builds cutting image size by 40%.',
        tech: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'Nginx', 'GitHub Actions'],
        image: 'https://placehold.co/600x400/111827/9ca3af?text=Forge+Todo+App',
        link: 'https://forge-todo-cloud.vercel.app/',
        gitLink: 'https://github.com/omkarmm19/forge-todo-cloud'
    },
    {
        title: 'HotReload — Go CLI Dev Tool',
        desc: 'Built a Go CLI tool that watches project files and automatically rebuilds and restarts servers during development — cutting developer feedback loop by 60%. Implemented filesystem monitoring with fsnotify and a 300ms debounce, reducing redundant build triggers by 80%. Designed 4 modular components (watcher, builder, runner, engine) with SIGTERM→SIGKILL escalation guaranteeing zero orphan processes.',
        tech: ['Go', 'fsnotify', 'CLI', 'Process Management'],
        image: 'https://placehold.co/600x400/111827/9ca3af?text=HotReload+CLI',
        link: 'https://www.loom.com/share/cb4f2b8444a34fea9570accc484c0531',
        gitLink: 'https://github.com/omkarmm19/hotreload'
    },
    {
        title: 'Place Prep — AI Voice Interview Platform',
        desc: 'Engineered a full-stack AI interview simulator using Next.js, providing users with realistic voice-based practice and instant, AI-driven performance feedback.',
        tech: ['Next.js', 'React', 'Tailwind', 'OpenAI API', 'Deepgram'],
        image: 'https://placehold.co/600x400/111827/9ca3af?text=Place+Prep',
        link: 'https://place-prep.vercel.app/'
    },
    {
        title: 'Dynamic MERN Portfolio',
        desc: 'Built a highly interactive, responsive personal portfolio using the MERN stack. Features include a dynamic content management system via MongoDB, real-time email integration with Nodemailer, and a premium UI powered by Framer Motion animations.',
        tech: ['MongoDB', 'Node.js', 'Express.js', 'React.js', 'Tailwind', 'Framer Motion'],
        image: 'https://placehold.co/600x400/111827/9ca3af?text=Portfolio',
        link: 'https://portfolio-omkar-mern.vercel.app/',
        gitLink: 'https://github.com/omkarmm19/Portfolio-Omkar'
    },
    {
        title: 'Eira — AI Voice Assistant',
        desc: 'Developed an AI-powered virtual assistant in Python capable of real-time voice interaction, web navigation, and intelligent search. Integrated conversational AI, speech recognition, and text-to-speech APIs to simulate a natural digital companion experience.',
        tech: ['Python', 'Speech Recognition', 'Edge TTS', 'OpenRouter API', 'Google Search API'],
        image: 'https://placehold.co/600x400/111827/9ca3af?text=Eira+AI',
        link: 'https://github.com/omkarmm19/Eira'
    },
    {
        title: 'NewsVITaa — Event Management System',
        desc: 'Architected a scalable, serverless backend using the Firebase suite and engineered a responsive UI with React.js to streamline event discovery and registration.',
        tech: ['React.js', 'Firebase', 'JavaScript'],
        image: 'https://placehold.co/600x400/111827/9ca3af?text=NewsVITaa',
        link: 'https://newsvita-59b66.web.app/'
    },
    {
        title: 'Serverless Music Player',
        desc: 'Deployed a serverless music player using AWS S3 for hosting and CloudFront for secure, low-latency content delivery, providing a seamless streaming experience.',
        tech: ['AWS S3', 'AWS CloudFront', 'HTML', 'CSS', 'JS'],
        image: 'https://placehold.co/600x400/111827/9ca3af?text=Music+Player',
        link: 'https://dqwynj1udvvj0.cloudfront.net'
    },

];

const certifications = [
    // AWS — Most Prestigious (newest first)
    { title: 'AWS Certified Solutions Architect — Associate', issuer: 'Amazon Web Services', icon: 'devicon-amazonwebservices-plain colored', link: 'https://www.credly.com/badges/e0541226-e871-4e0f-9fc8-609dfd24f873/public_url' },
    { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', icon: 'devicon-amazonwebservices-plain colored', link: 'https://www.credly.com/badges/bad01b94-b5f9-4260-a1fb-8cc68aea78d5/public_url' },
    // Microsoft
    { title: 'Azure Data Fundamentals (DP-900)', issuer: 'Microsoft', icon: 'fa-brands fa-microsoft', link: 'https://www.credly.com/badges/68487755-3375-4887-a1b3-4268023b3ec7/public_url' },
    // IBM
    { title: 'DevOps Fundamentals', issuer: 'IBM', icon: 'fa-solid fa-infinity', link: 'https://courses.vit.skillsnetwork.site/certificates/d0bde818921c4b5982b1e4e647a77f9b' },
    { title: 'DevOps, Agile & Design Thinking', issuer: 'IBM', icon: 'fa-solid fa-infinity', link: 'https://courses.vit.skillsnetwork.site/certificates/9c348048d331464cbcedaabd3cd335ac' },
    // Google
    { title: 'Google IT Support Professional Certificate', issuer: 'Google', icon: 'fa-brands fa-google', link: 'https://www.credly.com/badges/7d04edcd-5d4f-4e25-bed1-48138478c5d2/public_url' },
    { title: 'Gen AI Academy', issuer: 'Google', icon: 'fa-brands fa-google', link: 'https://certificate.hack2skill.com/user/genai2/2025H2S04GENAI-A100367' },
    { title: 'The Bits and Bytes of Computer Networking', issuer: 'Google', icon: 'fa-brands fa-google', link: 'https://drive.google.com/file/d/1RM_JEV2iZ6GgyrXia8L-ORVejFJR55cu/view?usp=sharing' },
    // Postman
    { title: 'API Fundamentals Student Expert', issuer: 'Postman', icon: 'devicon-postman-plain colored', link: 'https://badgr.com/public/assertions/toYF93bjSFKvqWqrHA9i2w' },
    // Oracle
    { title: 'Oracle Certified AI Foundations Associate', issuer: 'Oracle', icon: 'devicon-oracle-original colored', link: 'https://drive.google.com/file/d/1IB9YpfeEnJAj0C9cNYwCgPIjery1Jabq/view?usp=sharing' },
    { title: 'Oracle Certified Cloud Foundations Associate', issuer: 'Oracle', icon: 'devicon-oracle-original colored', link: 'https://drive.google.com/file/d/1gswUO7jELq-Jy9p1gCFHZcRo1ZSs1O80/view?usp=sharing' },
    // NPTEL
    { title: 'Cloud Computing and Distributed Systems', issuer: 'NPTEL', icon: 'fa-solid fa-microchip', link: 'https://drive.google.com/file/d/1Q8a-JriSJzNFOw8nunz4ft1NhKf7Tztt/view?usp=sharing' },
    { title: 'Introduction to Internet of Things', issuer: 'NPTEL', icon: 'fa-solid fa-microchip', link: 'https://drive.google.com/file/d/1A4zlPeUzu9Ixi-6htih1p1EoWjxbAPXR/view?usp=sharing' },
    // Forage
    { title: 'Data Visualization', issuer: 'TATA Forage', icon: 'fa-solid fa-chart-bar', link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata%20Group_nvcYESxQthhFMataX_1725794820145_completion_certificate.pdf' },
    // Vityarthi
    { title: 'Fundamentals Of AIML', issuer: 'Vityarthi', icon: 'fa-solid fa-robot', link: 'https://drive.google.com/file/d/13zmb5ZCjhYvBzKLjhGo0pNvdt_EKLwFS/view?usp=sharing' },
    { title: 'Python Essentials', issuer: 'Vityarthi', icon: 'fa-brands fa-python', link: 'https://drive.google.com/file/d/17Pfv-ITW9n52Xms5405Yp0El2Pp7GKMD/view?usp=sharing' }
];

const achievements = [
    { title: 'PR and Outreach Lead', issuer: 'Health O Tech Club', icon: 'fa-solid fa-users', spotlight: true },
    { title: '1st Rank in Google Gen AI Exchange', issuer: 'Google Program 2025', icon: 'fa-solid fa-trophy', spotlight: true },
    { title: 'Leetcode DSA 100 Days Challenge', issuer: 'Completed in Java', icon: 'fa-solid fa-laptop-code', spotlight: false },
    { title: 'Event Management Lead', issuer: 'Mozilla Firefox Club', icon: 'fa-solid fa-users', spotlight: false },
];

const skills = [
    {
        category: 'Languages',
        icon: 'fas fa-code',
        items: [
            { name: 'Python', icon: 'devicon-python-plain colored' },
            { name: 'Java', icon: 'devicon-java-plain colored' },
            { name: 'Go', icon: 'devicon-go-plain colored' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
            { name: 'SQL', icon: 'fas fa-database' },
            { name: 'HTML', icon: 'devicon-html5-plain colored' },
            { name: 'CSS', icon: 'devicon-css3-plain colored' }
        ]
    },
    {
        category: 'Frontend, Backend & Databases',
        icon: 'fas fa-layer-group',
        items: [
            { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
            { name: 'Redis', icon: 'devicon-redis-plain colored' },
            { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
            { name: 'React.js', icon: 'devicon-react-original colored' },
            { name: 'Next.js', icon: 'devicon-nextjs-original colored' },
            { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
            { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
            { name: 'Express.js', icon: 'devicon-express-original colored' },
            { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
            { name: 'REST APIs', icon: 'fas fa-bolt' }
        ]
    },
    {
        category: 'Cloud & DevOps',
        icon: 'fas fa-cloud-upload-alt',
        items: [
            { name: 'Linux', icon: 'devicon-linux-plain colored' },
            { name: 'AWS', icon: 'devicon-amazonwebservices-plain colored' },
            { name: 'Docker', icon: 'devicon-docker-plain colored' },
            { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
            { name: 'Google Cloud (GCP)', icon: 'devicon-googlecloud-plain colored' },
            { name: 'CI/CD', icon: 'fas fa-sync-alt' },
            { name: 'Terraform', icon: 'devicon-terraform-plain colored' },
            { name: 'Ansible', icon: 'devicon-ansible-plain colored' },
            { name: 'Grafana', icon: 'devicon-grafana-plain colored' },
            { name: 'Scrum', icon: 'fas fa-people-carry-box' }
        ]
    },
    {
        category: 'Developer Tools',
        icon: 'fas fa-tools',
        items: [
            { name: 'Git', icon: 'devicon-git-plain colored' },
            { name: 'GitHub', icon: 'devicon-github-original colored' },
            { name: 'VSCode', icon: 'devicon-vscode-plain colored' },
            { name: 'Postman API', icon: 'fas fa-paper-plane' },
            { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
            { name: 'Figma', icon: 'devicon-figma-plain colored' }
        ]
    },
    {
        category: 'DSA & Foundations',
        icon: 'fas fa-brain',
        items: [
            { name: 'Data Structures', icon: 'fas fa-check-double' },
            { name: 'System Design', icon: 'fas fa-sitemap' },
            { name: 'Advanced Problem Solving', icon: 'fas fa-puzzle-piece' },
            { name: 'Algorithmic Analysis', icon: 'fas fa-chart-line' },
            { name: 'OOPS Concepts', icon: 'fas fa-object-group' },
            { name: 'Operating Systems (OS)', icon: 'fas fa-memory' },
            { name: 'DBMS', icon: 'fas fa-database' },
            { name: 'Computer Networks (CN)', icon: 'fas fa-network-wired' }
        ]
    },
    {
        category: 'AI & Machine Learning',
        icon: 'fas fa-robot',
        items: [
            { name: 'OpenAI API', icon: 'fas fa-lightbulb' },
            { name: 'LLMs & GenAI', icon: 'fas fa-brain' },
            { name: 'Prompt Engineering', icon: 'fas fa-keyboard' },
            { name: 'Streamlit', icon: 'fas fa-stream' },
            { name: 'Vertex AI', icon: 'fas fa-cloud' },
            { name: 'Google Cloud SDK', icon: 'fas fa-terminal' }
        ]
    }
];

module.exports = {
    generalInfo,
    experience,
    education,
    projects,
    certifications,
    achievements,
    skills
};
