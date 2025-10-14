const express = require('express');
const getBook = require('../controllers/booksContorllers.js'); // ✅ fixed import

const router = express.Router();

router.get('/', getBook);

module.exports = router;
