const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Certification = require('./models/Certification');
const Achievement = require('./models/Achievement');

dotenv.config({ path: path.join(__dirname, '.env') });

const checkData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');

        const certCount = await Certification.countDocuments();
        const achCount = await Achievement.countDocuments();

        console.log(`Certifications Count: ${certCount}`);
        console.log(`Achievements Count: ${achCount}`);

        const certifications = await Certification.find({}, 'title issuer');
        console.log('Certifications List:', certifications);

        const achievements = await Achievement.find({}, 'title issuer');
        console.log('Achievements List:', achievements);

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

checkData();
