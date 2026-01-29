const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    role: { type: String, required: true },
    company: { type: String, required: true },
    date: { type: String, required: true },
    desc: { type: String, required: true },
    icon: { type: String, default: 'fa-solid fa-graduation-cap' }
});

module.exports = mongoose.model('Education', educationSchema);
