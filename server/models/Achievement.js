const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    icon: String,
    spotlight: { type: Boolean, default: false },
    order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Achievement', achievementSchema);
