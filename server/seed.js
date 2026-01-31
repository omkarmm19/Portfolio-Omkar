const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');
const Experience = require('./models/Experience');
const Education = require('./models/Education');
const Skill = require('./models/Skill');
const Certification = require('./models/Certification');
const Achievement = require('./models/Achievement');
const GeneralInfo = require('./models/GeneralInfo');
const connectDB = require('./config/db');

// Import data from the central source of truth
const {
    generalInfo,
    experience,
    education,
    projects,
    certifications,
    achievements,
    skills
} = require('./data/mockData');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

connectDB();

const importData = async () => {
    try {
        console.log('🗑️  Clearing existing database...');
        await Project.deleteMany();
        await Experience.deleteMany();
        await Education.deleteMany();
        await Skill.deleteMany();
        await Certification.deleteMany();
        await Achievement.deleteMany();
        await GeneralInfo.deleteMany();

        console.log('🌱 Seeding new data from server/data/mockData.js...');

        // Add order to skills if missing (mockData might not have it strictly defined, but our model might expect it)
        // For now, we assume mockData structure is close enough or we can map it if needed.
        // Based on mockData.js content, it looks compatible.

        await GeneralInfo.create(generalInfo);
        await Experience.insertMany(experience);
        await Education.insertMany(education);
        await Project.insertMany(projects);
        await Certification.insertMany(certifications);
        await Achievement.insertMany(achievements);
        await Skill.insertMany(skills);

        console.log('✅ Data Imported Successfully!');
        process.exit();
    } catch (error) {
        console.error(`❌ Error with data import: ${error}`);
        process.exit(1);
    }
};

importData();
