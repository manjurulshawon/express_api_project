
const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blogController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');

// Routes for the blog controller
router.get('/blogs/create', blogController.create);
router.get('/blogs/read', blogController.read);
router.get('/blogs/update', blogController.update);
router.get('/blogs/delete', blogController.delete);

// Routes for the comment controller (similarly for other controllers)
router.get('/comments/create', commentController.create);
router.get('/comments/read', commentController.read);
router.get('/comments/update', commentController.update);
router.get('/comments/delete', commentController.delete);

// Routes for the message controller
router.get('/messages/create', messageController.create);
router.get('/messages/read', messageController.read);
router.get('/messages/update', messageController.update);
router.get('/messages/delete', messageController.delete);

// Routes for the portfolio controller
router.get('/portfolios/create', portfolioController.create);
router.get('/portfolios/read', portfolioController.read);
router.get('/portfolios/update', portfolioController.update);
router.get('/portfolios/delete', portfolioController.delete);

// Routes for the product controller
router.get('/products/create', productController.create);
router.get('/products/read', productController.read);
router.get('/products/update', productController.update);
router.get('/products/delete', productController.delete);

module.exports = router;
