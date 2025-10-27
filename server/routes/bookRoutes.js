const express = require('express');
const { getBooks, addBook } = require('../controllers/booksContorllers');

const router = express.Router();

// GET all books
router.get('/', getBooks);

// ✅ POST new book
router.post('/add', addBook);

module.exports = router;
