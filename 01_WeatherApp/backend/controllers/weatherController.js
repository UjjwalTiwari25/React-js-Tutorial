const { fetchWeatherData } = require('../services/weatherService');

let searchHistory = []; // In-memory storage for search history

const getWeather = async (req, res) => {
    const location = req.params.location;
    console.log(`Fetching weather for location: ${location}`);
    try {
        const weatherData = await fetchWeatherData(location);
        searchHistory.push({ location, data: weatherData }); // Store the search
        console.log('Weather data received:', weatherData);
        res.json(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Failed to fetch weather data', details: error.message });
    }
};

const getSearchHistory = (req, res) => {
    res.json(searchHistory); // Return the search history
};

module.exports = { getWeather, getSearchHistory };
    