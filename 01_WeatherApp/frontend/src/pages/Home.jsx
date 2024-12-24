import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
    // State to store the location entered by the user
    const [location, setLocation] = useState('');
    
    // State to store fetched weather data
    const [weatherData, setWeatherData] = useState(null);
    
    // State to store any error messages
    const [error, setError] = useState('');
    
    // State to maintain the history of searched locations
    const [history, setHistory] = useState([]);

    // Function to fetch weather data from the API
    const fetchWeather = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/weather/${location}`);
            
            // Set the fetched weather data to the state
            setWeatherData(response.data);
            
            // Clear any previous error messages
            setError('');
            
            // Add the new search to the history state
            setHistory(prevHistory => [...prevHistory, { location, data: response.data }]);
        } catch (err) {
            console.error('Error fetching weather data:', err);
            
            // Handle different error cases
            if (err.response) {
                setError(`Error: ${err.response.status} - ${err.response.data.message}`);
            } else if (err.request) {
                setError('No response received from server');
            } else {
                setError('Error: ' + err.message);
            }
            
            // Clear previous weather data in case of an error
            setWeatherData(null);
        }
    };

    return (
        <div className="home">
            {/* Navbar Section */}
            <nav className="navbar">
                <h2>Weather App</h2>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                </div>
            </nav>

            {/* Card Section */}
            <div className="card">
                <h1>Check Weather</h1>
                <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} // Update location state on input change
                />
                <button onClick={fetchWeather}>Get Weather</button>

                {/* Weather Information Display */}
                {weatherData && (
                    <div className="weather-info">
                        <h2>{weatherData.name}</h2>
                        <p>Temperature: {weatherData.main?.temp}°C</p>
                        <p>Humidity: {weatherData.main?.humidity}%</p>
                        <p>Wind Speed: {weatherData.wind?.speed} m/s</p>
                        <p>Condition: {weatherData.weather?.[0]?.description}</p>
                    </div>
                )}

                {/* Error Message Display */}
                {error && <p className="error">{error}</p>}
            </div>

            {/* Footer Section */}
            <footer className="footer">
                <p>Contact Us:</p>
                <a href="https://github.com/UjjwalTiwari25" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="mailto:ujjwaltiwari153@gmail.com">Email</a>
            </footer>
        </div>
    );
};

export default Home;
