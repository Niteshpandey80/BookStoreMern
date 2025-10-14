const express = require('express');
const { signup } = require('../controllers/userController.js'); // ✅ destructure
const router = express.Router();

router.post('/signup', signup);

module.exports = router;
