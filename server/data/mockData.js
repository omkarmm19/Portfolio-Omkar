const generalInfo = {
    name: 'Omkar Mahesh',
    title: 'Aspiring DevOps Engineer | Python Backend (FastAPI) | MERN Developer | Cloud Enthusiast',
    subtitle: 'Cloud & GenAI Enthusiast',
    description: `Pre-Final Year B.Tech CSE (Cloud Computing & Automation) | VITB ’27

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
    resumeLink: 'https://raw.githubusercontent.com/omkarmm19/Resume-Omkar/main/Omkar%20Mahesh.pdf'
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
        desc: 'CGPA: 8.54/10.0. Relevant Coursework: Data Structures & Algorithms, OOPS, Operating Systems, Computer Networks, Database Management Systems. Key Skills: Gained hands-on experience in Full-Stack Development, Cloud service management (AWS/GCP), and CI/CD pipeline implementation. Leadership: Event Management Lead for the Mozilla Firefox Club, organizing technical workshops and coding events for 500+ students.',
        icon: 'fa-solid fa-graduation-cap'
    }
];

const projects = [
    {
        title: 'Place Prep - AI Voice Interview Platform',
        desc: 'Engineered a full-stack AI interview simulator using Next.js, providing users with realistic voice-based practice and instant, AI-driven performance feedback.',
        tech: ['Next.js', 'React', 'Tailwind', 'OpenAI API', 'Deepgram'],
        image: 'https://placehold.co/600x400/111827/9ca3af?text=Place+Prep',
        link: 'https://place-prep.vercel.app/'
    },
    {
        title: 'NewsVITaa - Event Management System',
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
    }
];

const certifications = [
    { title: 'DevOps, Agile & Design Thinking', issuer: 'IBM', icon: 'fa-solid fa-brain', link: 'https://courses.vit.skillsnetwork.site/certificates/9c348048d331464cbcedaabd3cd335ac' },
    { title: 'Azure Data Fundamentals', issuer: 'Microsoft', icon: 'fa-brands fa-microsoft', link: 'https://www.credly.com/badges/68487755-3375-4887-a1b3-4268023b3ec7/public_url' },
    { title: 'DevOps Fundamentals', issuer: 'IBM', icon: 'fa-solid fa-infinity', link: 'https://courses.vit.skillsnetwork.site/certificates/d0bde818921c4b5982b1e4e647a77f9b' },
    { title: 'Gen AI Academy', issuer: 'Google', icon: 'fa-brands fa-google', link: 'https://certificate.hack2skill.com/user/genai2/2025H2S04GENAI-A100367' },
    { title: 'API Fundamentals Expert', issuer: 'Postman', icon: 'fa-solid fa-rocket', link: 'https://badgr.com/public/assertions/toYF93bjSFKvqWqrHA9i2w' },
    { title: 'Data Visualization', issuer: 'TATA Forage', icon: 'fa-solid fa-chart-bar', link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata%20Group_nvcYESxQthhFMataX_1725794820145_completion_certificate.pdf' },
    { title: 'Fundamentals Of AIML', issuer: 'Vityarthi', icon: 'fa-solid fa-robot' },
    { title: 'Python Essentials', issuer: 'Vityarthi', icon: 'fa-brands fa-python' },
    { title: 'Oracle Cloud Foundations', issuer: 'Oracle', icon: 'fa-solid fa-cloud' },
    { title: 'Oracle AI Foundations', issuer: 'Oracle', icon: 'fa-solid fa-brain' },
    { title: 'Bits and Bytes of Computer Networking', issuer: 'Google', icon: 'fa-solid fa-network-wired' }
];

const achievements = [
    { title: 'PR and Outreach Lead', issuer: 'Health O Tech Club', icon: 'fa-solid fa-users', spotlight: true },
    { title: '1st Rank in Google Gen AI Exchange', issuer: 'Google Program 2025', icon: 'fa-solid fa-trophy', spotlight: true },
    { title: 'Leetcode DSA 100 Days Challenge', issuer: 'Completed in Java', icon: 'fa-solid fa-laptop-code', spotlight: false },
    { title: 'Event Management Lead', issuer: 'Mozilla Firefox & VITKult Clubs', icon: 'fa-solid fa-users', spotlight: false },
];

const skills = [
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
            { name: 'AWS', icon: 'devicon-amazonwebservices-plain colored' },
            { name: 'Docker', icon: 'devicon-docker-plain colored' },
            { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
            { name: 'Google Cloud (GCP)', icon: 'devicon-googlecloud-plain colored' },
            { name: 'Linux', icon: 'devicon-linux-plain colored' },
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
            { name: 'RAG Systems', icon: 'fas fa-retweet' },
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
