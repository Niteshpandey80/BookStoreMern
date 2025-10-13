const express = require('express')
const getBook = require('../controllers/booksContorllers.js')

const router = express.Router()
router.get('/' , getBook)

module.exports = router ; 