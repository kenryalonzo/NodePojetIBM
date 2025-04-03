const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

// Tâche 6: Enregistrement
router.post('/register', authController.register);

// Tâche 7: Connexion
router.post('/login', authController.login);

module.exports = router;