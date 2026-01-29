const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        console.log("MongoDB connection failed. Switching to local fallback mode.");
        // process.exit(1); // Do not exit, allowing request handlers to use fallback data
    }
};

module.exports = connectDB;
