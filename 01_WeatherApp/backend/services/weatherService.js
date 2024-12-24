const axios = require('axios');

const fetchWeatherData = async (location) => {
    const API_KEY = process.env.WEATHER_API_KEY; // Ensure this is set correctly
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
    
    try {
        console.log(`Making request to OpenWeatherMap for: ${location}`); // Log request
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error.response ? error.response.data : error.message);
        throw error; // Rethrow the error to handle it in the controller
    }
};

module.exports = { fetchWeatherData };
