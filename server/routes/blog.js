const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog');
const authService = require('../services/auth');

router.post('', authService.checkJWT, authService.checkRole('siteOwner'), blogController.createBlog);

module.exports = router;