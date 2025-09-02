const express = require('express');
const router = express.Router();
const { createErrand, getErrands } = require('../controllers/errandsController');

router.post('/', createErrand);
router.get('/', getErrands);

module.exports = router;
