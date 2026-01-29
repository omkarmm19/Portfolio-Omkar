const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

router.get('/general', portfolioController.getGeneralInfo);
router.get('/projects', portfolioController.getProjects);
router.get('/experience', portfolioController.getExperience);
router.get('/education', portfolioController.getEducation);
router.get('/skills', portfolioController.getSkills);
router.get('/certifications', portfolioController.getCertifications);
router.get('/achievements', portfolioController.getAchievements);

module.exports = router;
