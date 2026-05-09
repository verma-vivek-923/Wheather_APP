import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherBackground from './components/WeatherBackground';
import { Loader } from 'lucide-react';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [themeClass, setThemeClass] = useState('theme-clear-day');

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`http://localhost:3001/api/weather?city=${encodeURIComponent(city)}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch weather');
      }
      
      const data = await response.json();
      setWeatherData(data);
      updateTheme(data.condition, data.isDay);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const updateTheme = (condition, isDay) => {
    let newTheme = 'theme-clear-day';
    
    if (condition === 'clear') {
      newTheme = isDay ? 'theme-clear-day' : 'theme-clear-night';
    } else {
      newTheme = `theme-${condition}`;
    }
    
    setThemeClass(newTheme);
  };

  // Load default city on mount
  useEffect(() => {
    fetchWeather('London');
  }, []);

  // Sync theme class to body wrapper for global CSS variables to work
  useEffect(() => {
    document.body.className = themeClass;
  }, [themeClass]);

  return (
    <>
      <WeatherBackground condition={weatherData?.condition || 'clear'} />
      <div className="app-container">
        <SearchBar onSearch={fetchWeather} />
        
        {loading && (
          <div className="loading">
            <Loader className="spinner" size={48} />
            <p>Fetching latest weather...</p>
          </div>
        )}
        
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
        
        {!loading && !error && weatherData && (
          <WeatherDisplay data={weatherData} />
        )}
      </div>
    </>
  );
}

export default App;
