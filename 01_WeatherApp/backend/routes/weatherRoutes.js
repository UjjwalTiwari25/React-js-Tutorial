const express = require('express');
const { getWeather, getSearchHistory } = require('../controllers/weatherController');
const router = express.Router();

router.get('/:location', getWeather);
router.get('/history', getSearchHistory); // Route to get search history

module.exports = router;
