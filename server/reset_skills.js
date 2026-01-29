const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const Skill = require('./models/Skill');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => {
        console.error('MongoDB Connection Error:', err);
        process.exit(1);
    });

const skillsData = [
    {
        category: 'Languages',
        order: 1,
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
        order: 2,
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
        order: 3,
        icon: 'fas fa-cloud-upload-alt',
        items: [
            { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
            { name: 'AWS', icon: 'devicon-amazonwebservices-plain colored' },
            { name: 'Docker', icon: 'devicon-docker-plain colored' },
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
        order: 4,
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
        order: 5,
        icon: 'fas fa-brain',
        items: [
            { name: 'System Design', icon: 'fas fa-sitemap' },
            { name: 'DSA (Java)', icon: 'fas fa-check-double' },
            { name: 'OOPS Concepts', icon: 'fas fa-object-group' },
            { name: 'OS', icon: 'fas fa-memory' },
            { name: 'DBMS', icon: 'fas fa-database' },
            { name: 'CN', icon: 'fas fa-network-wired' },
            { name: 'Adv. Problem Solving', icon: 'fas fa-puzzle-piece' }
        ]
    },
    {
        category: 'AI & Machine Learning',
        order: 6,
        icon: 'fas fa-robot',
        items: [
            { name: 'OpenAI API', icon: 'fas fa-lightbulb' },
            { name: 'LLMs & GenAI', icon: 'fas fa-brain' },
            { name: 'Prompt Eng.', icon: 'fas fa-keyboard' },
            { name: 'RAG Systems', icon: 'fas fa-retweet' },
            { name: 'Streamlit', icon: 'fas fa-stream' },
            { name: 'Vertex AI', icon: 'fas fa-cloud' },
            { name: 'Google Cloud SDK', icon: 'fas fa-terminal' }
        ]
    }
];

const resetSkills = async () => {
    try {
        console.log('🗑️  Deleting all existing skills...');
        await Skill.deleteMany({});

        console.log('✨ Inserting new skills with strict ordering...');
        await Skill.insertMany(skillsData);

        console.log('✅ Skills Reset Complete!');
        process.exit(0);

    } catch (error) {
        console.error('Error resetting skills:', error);
        process.exit(1);
    }
};

resetSkills();
