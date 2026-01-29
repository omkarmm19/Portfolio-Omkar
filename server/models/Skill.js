const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    category: { type: String, required: true }, // e.g., Languages, Cloud & DevOps
    icon: { type: String, required: true },
    items: [{
        name: String,
        icon: String
    }],
    order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Skill', skillSchema);
