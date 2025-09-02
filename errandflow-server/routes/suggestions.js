const express = require('express');
const router = express.Router();
const { getSuggestions } = require('../controllers/suggestionsController');

router.get('/', getSuggestions);

module.exports = router;
