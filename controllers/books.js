const booksData = require('../data/books.json');

// Tâche 1: Obtenir tous les livres
exports.getAllBooks = async (req, res) => {
    try {
        res.json(booksData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tâche 2: Recherche par ISBN
exports.getBookByISBN = (req, res) => {
    return new Promise((resolve, reject) => {
        const isbn = req.params.isbn;
        const book = booksData.find(b => b.isbn === isbn);
        
        if (book) {
            res.json(book);
            resolve();
        } else {
            res.status(404).json({ message: 'Book not found' });
            reject(new Error('Book not found'));
        }
    });
};

// Tâche 3: Recherche par auteur
exports.getBooksByAuthor = async (req, res) => {
    const author = req.params.author;
    const books = booksData.filter(b => 
        b.author.toLowerCase().includes(author.toLowerCase())
    );
    res.json(books);
};

// Tâche 4: Recherche par titre
exports.getBooksByTitle = async (req, res) => {
    const title = req.params.title;
    const books = booksData.filter(b => 
        b.title.toLowerCase().includes(title.toLowerCase())
    );
    res.json(books);
};