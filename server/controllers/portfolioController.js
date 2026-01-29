const Project = require('../models/Project');
const Experience = require('../models/Experience');
const Education = require('../models/Education');
const Skill = require('../models/Skill');
const Certification = require('../models/Certification');
const Achievement = require('../models/Achievement');
const GeneralInfo = require('../models/GeneralInfo');
const mockData = require('../data/mockData');

const isConnected = () => require('mongoose').connection.readyState === 1;

exports.getGeneralInfo = async (req, res) => {
    try {
        if (!isConnected()) throw new Error("DB not connected");
        const info = await GeneralInfo.findOne();
        if (!info) throw new Error("No data found");
        res.json(info);
    } catch (err) {
        console.warn("Serving local General Info:", err.message);
        res.json(mockData.generalInfo);
    }
};

exports.getProjects = async (req, res) => {
    try {
        if (!isConnected()) throw new Error("DB not connected");
        const projects = await Project.find().sort({ order: 1 });
        if (!projects.length) throw new Error("No data found");
        res.json(projects);
    } catch (err) {
        console.warn("Serving local Projects:", err.message);
        res.json(mockData.projects);
    }
};

exports.getExperience = async (req, res) => {
    try {
        if (!isConnected()) throw new Error("DB not connected");
        const experience = await Experience.find().sort({ order: 1 });
        if (!experience.length) throw new Error("No data found");
        res.json(experience);
    } catch (err) {
        console.warn("Serving local Experience:", err.message);
        res.json(mockData.experience);
    }
};

exports.getEducation = async (req, res) => {
    try {
        if (!isConnected()) throw new Error("DB not connected");
        const education = await Education.find().sort({ order: 1 });
        if (!education.length) throw new Error("No data found");
        res.json(education);
    } catch (err) {
        console.warn("Serving local Education:", err.message);
        res.json(mockData.education);
    }
};

exports.getSkills = async (req, res) => {
    try {
        if (!isConnected()) throw new Error("DB not connected");
        const skills = await Skill.find().sort({ order: 1 });
        if (!skills.length) throw new Error("No data found");
        res.json(skills);
    } catch (err) {
        console.warn("Serving local Skills:", err.message);
        res.json(mockData.skills);
    }
};

exports.getCertifications = async (req, res) => {
    try {
        if (!isConnected()) throw new Error("DB not connected");
        const certifications = await Certification.find().sort({ date: -1 });
        if (!certifications.length) throw new Error("No data found");
        res.json(certifications);
    } catch (err) {
        console.warn("Serving local Certifications:", err.message);
        res.json(mockData.certifications);
    }
};

exports.getAchievements = async (req, res) => {
    try {
        if (!isConnected()) throw new Error("DB not connected");
        const achievements = await Achievement.find().sort({ date: -1 });
        if (!achievements.length) throw new Error("No data found");
        res.json(achievements);
    } catch (err) {
        console.warn("Serving local Achievements:", err.message);
        res.json(mockData.achievements);
    }
};
