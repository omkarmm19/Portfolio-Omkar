const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    icon: String,
    link: String,
    order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Certification', certificationSchema);
