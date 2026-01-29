const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    tech: [String],
    image: String,
    link: String,
    gitLink: String
});

module.exports = mongoose.model('Project', projectSchema);
