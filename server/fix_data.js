const mongoose = require('mongoose');
const Certification = require('./models/Certification');
const Achievement = require('./models/Achievement');
require('dotenv').config();

const fixData = async () => {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected!');

        // Overwrite the corrupted 'date' field with a valid string string
        // This fixes the "unknown operator: $date" error by replacing the object with a string
        const certResult = await Certification.updateMany({}, { $set: { date: "2024-01-01" } });
        console.log(`Updated ${certResult.modifiedCount} certifications to have a default date.`);

        const achResult = await Achievement.updateMany({}, { $set: { date: "2024-01-01" } });
        console.log(`Updated ${achResult.modifiedCount} achievements to have a default date.`);

        console.log('SUCCESS: Data is clean. You can now edit it safely.');
        process.exit();
    } catch (err) {
        console.error('Error fixing data:', err);
        process.exit(1);
    }
};

fixData();
