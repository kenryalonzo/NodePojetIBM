const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviews');
const authMiddleware = require('../middlewares/auth');

// Tâche 5: Obtenir les critiques
router.get('/:bookId', reviewController.getReviews);

// Routes protégées
router.use(authMiddleware.authenticate);

// Tâche 8: Ajouter/modifier une critique
router.post('/:bookId', reviewController.addReview);
router.put('/:reviewId', reviewController.updateReview);

// Tâche 9: Supprimer une critique
router.delete('/:reviewId', reviewController.deleteReview);

module.exports = router;