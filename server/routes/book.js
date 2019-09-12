const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book');

router.get('', bookController.getBooks);
router.post('', bookController.saveBook);
router.patch('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;