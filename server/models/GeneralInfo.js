const mongoose = require('mongoose');

const generalInfoSchema = new mongoose.Schema({
    name: String,
    title: String,
    subtitle: String,
    description: String,
    email: String,
    phone: String,
    socialLinks: {
        linkedin: String,
        github: String,
        leetcode: String
    },
    resumeLink: String
});

module.exports = mongoose.model('GeneralInfo', generalInfoSchema);
