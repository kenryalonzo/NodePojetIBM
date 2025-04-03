const axios = require('axios');
const API_BASE_URL = 'http://localhost:3000/books';

// Tâche 10: Tous les livres avec async/await
async function getAllBooks() {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
}

// Tâche 11: Recherche par ISBN avec Promises
function getBookByISBN(isbn) {
    return new Promise((resolve, reject) => {
        axios.get(`${API_BASE_URL}/isbn/${isbn}`)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
}

// Tâche 12: Recherche par auteur avec async/await
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${API_BASE_URL}/author/${author}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching books by author:', error);
        throw error;
    }
}

// Tâche 13: Recherche par titre avec async/await
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${API_BASE_URL}/title/${title}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching books by title:', error);
        throw error;
    }
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};