let reviews = []; // À remplacer par une vraie base de données

exports.getReviews = async (req, res) => {
    const bookId = req.params.bookId;
    const bookReviews = reviews.filter(r => r.bookId === bookId);
    res.json(bookReviews);
};

exports.addReview = async (req, res) => {
    const { text, rating } = req.body;
    const bookId = req.params.bookId;
    const username = req.user.username;
    
    const newReview = {
        id: Date.now().toString(),
        bookId,
        username,
        text,
        rating,
        createdAt: new Date()
    };
    
    reviews.push(newReview);
    res.status(201).json(newReview);
};

exports.updateReview = async (req, res) => {
    const reviewId = req.params.reviewId;
    const { text, rating } = req.body;
    const username = req.user.username;
    
    const reviewIndex = reviews.findIndex(r => r.id === reviewId && r.username === username);
    
    if (reviewIndex === -1) {
        return res.status(404).json({ message: 'Review not found or unauthorized' });
    }
    
    reviews[reviewIndex] = {
        ...reviews[reviewIndex],
        text,
        rating,
        updatedAt: new Date()
    };
    
    res.json(reviews[reviewIndex]);
};

exports.deleteReview = async (req, res) => {
    const reviewId = req.params.reviewId;
    const username = req.user.username;
    
    const reviewIndex = reviews.findIndex(r => r.id === reviewId && r.username === username);
    
    if (reviewIndex === -1) {
        return res.status(404).json({ message: 'Review not found or unauthorized' });
    }
    
    reviews = reviews.filter(r => r.id !== reviewId);
    res.json({ message: 'Review deleted successfully' });
};