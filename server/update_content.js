require('dotenv').config({ path: './server/.env' });
const mongoose = require('mongoose');
const GeneralInfo = require('./models/GeneralInfo');
const Skill = require('./models/Skill');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => {
        console.error('MongoDB Connection Error:', err);
        process.exit(1);
    });

const updateData = async () => {
    try {
        // 1. Update General Info (About Me)
        const newDescription = `I am Omkar Mahesh, a Pre-Final Year CSE student at VIT Bhopal, dedicated to bridging the gap between performant code and scalable infrastructure.

🚀 **DevOps & Cloud**: I architect reliable CI/CD pipelines and automate cloud-native workflows using AWS, Docker, Kubernetes, and Linux, ensuring production-ready deployments.

🐍 **Backend Engineering**: I specialize in building high-concurrency microservices and RESTful APIs with Python (FastAPI), optimizing for both speed and scalability.

💻 **Full-Stack & Algorithms**: With a strong core in DSA and MERN stack development, I approach system design with both algorithmic precision and architectural depth.

📌 **Goal**: Seeking DevOps, SRE, or Cloud Engineering internships (2027 batch) to solve impactful reliability challenges.`;

        const generalInfo = await GeneralInfo.findOneAndUpdate(
            {},
            {
                description: newDescription,
                location: 'Bidar, Karnataka' // Updating location as well
            },
            { new: true, upsert: true } // Create if doesn't exist (though it should)
        );
        console.log('✅ General Info Updated');

        // 2. Update Skills
        // We need to find the "Frontend & Backend" category and update/add items
        const targetCategory = 'Frontend & Backend';
        const skillsToAdd = [
            { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
            { name: 'Redis', icon: 'devicon-redis-plain colored' },
            { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' }
        ];

        let skillGroup = await Skill.findOne({ category: targetCategory });

        if (skillGroup) {
            // Check and add missing skills
            skillsToAdd.forEach(newSkill => {
                const exists = skillGroup.items.some(item => item.name === newSkill.name);
                if (!exists) {
                    skillGroup.items.push(newSkill);
                    console.log(`   -> Added ${newSkill.name} to ${targetCategory}`);
                } else {
                    // Update icon if it exists (just in case)
                    const item = skillGroup.items.find(i => i.name === newSkill.name);
                    item.icon = newSkill.icon;
                    console.log(`   -> Updated ${newSkill.name} icon`);
                }
            });
            await skillGroup.save();
            console.log('✅ Skills Updated');
        } else {
            console.log('❌ "Frontend & Backend" skill category not found!');
        }

        console.log('Database update complete!');
        process.exit(0);

    } catch (error) {
        console.error('Error updating data:', error);
        process.exit(1);
    }
};

updateData();
