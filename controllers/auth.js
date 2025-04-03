const jwt = require('jsonwebtoken');
const users = []; // À remplacer par une vraie base de données

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Vérifier si l'utilisateur existe déjà
        if (users.find(u => u.username === username)) {
            return res.status(400).json({ message: 'User already exists' });
        }
        
        // Ajouter l'utilisateur (en production, hacher le mot de passe)
        users.push({ username, password });
        
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = users.find(u => u.username === username && u.password === password);
        
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        // Créer un token JWT
        const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' });
        
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};