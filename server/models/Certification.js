const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    icon: String,
    link: String,
    order: { type: Number, default: 0 },
    date: String // YYYY-MM-DD for easy sorting
});

module.exports = mongoose.model('Certification', certificationSchema);
