const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog');
const authService = require('../services/auth');

router.get('', blogController.getBlogs);

router.get('/dashboard', authService.checkJWT,
                  			 authService.checkRole('siteOwner'),
                  			 blogController.getUserBlogs);

router.get('/:id', blogController.getBlogById);

router.get('/s/:slug', blogController.getBlogBySlug);

router.post('', authService.checkJWT, 
								authService.checkRole('siteOwner'), 
								blogController.createBlog);

router.patch(':id', authService.checkJWT, 
										authService.checkRole('siteOwner'), 
										blogController.updateBlog);

router.patch('/:id', authService.checkJWT, 
										 authService.checkRole('siteOwner'), 
										 blogController.updateBlog);

router.delete('/:id', authService.checkJWT,
			                authService.checkRole('siteOwner'),
			                blogController.deleteBlog);

module.exports = router; 