const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const GeneralInfo = require('./models/GeneralInfo');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => {
        console.error('MongoDB Connection Error:', err);
        process.exit(1);
    });

const updateBio = async () => {
    try {
        const conciseDescription = `Pre-Final Year B.Tech CSE (Cloud Computing & Automation) | VITB ’27

Cloud & DevOps-focused CSE student skilled in building and automating scalable infrastructure using AWS, Docker, Kubernetes, and CI/CD.

Strong in Python backend development (FastAPI) with hands-on exposure to MERN stack and a solid foundation in DSA.

Driven by cloud-native architectures, automation, and reliability-first engineering.

📌 Open to internships and real-world project collaborations (2027 batch).`;

        await GeneralInfo.findOneAndUpdate(
            {},
            { description: conciseDescription },
            { new: true, upsert: true }
        );
        console.log('✅ Bio Updated Successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error updating bio:', error);
        process.exit(1);
    }
};

updateBio();
