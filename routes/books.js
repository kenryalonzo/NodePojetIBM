const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books');

// Routes pour les utilisateurs généraux
router.get('/', bookController.getAllBooks);
router.get('/isbn/:isbn', bookController.getBookByISBN);
router.get('/author/:author', bookController.getBooksByAuthor);
router.get('/title/:title', bookController.getBooksByTitle);

module.exports = router;