const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const axios = require('axios');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

// Routes
const bookRoutes = require('./routes/books');
const authRoutes = require('./routes/auth');
const reviewRoutes = require('./routes/reviews');

app.use('/books', bookRoutes);
app.use('/auth', authRoutes);
app.use('/reviews', reviewRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));