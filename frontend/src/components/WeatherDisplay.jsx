import React from 'react';
import { Cloud, Droplets, Wind, Thermometer, CloudRain, Sun, CloudLightning, Snowflake } from 'lucide-react';

const WeatherDisplay = ({ data }) => {
  if (!data) return null;

  const { city, country, temperature, feelsLike, humidity, windSpeed, description, condition, cloudCover } = data;

  const getWeatherIcon = () => {
    switch(condition) {
      case 'clear': return <Sun size={32} />;
      case 'cloudy': return <Cloud size={32} />;
      case 'rain': return <CloudRain size={32} />;
      case 'snow': return <Snowflake size={32} />;
      case 'thunderstorm': return <CloudLightning size={32} />;
      default: return <Sun size={32} />;
    }
  };

  return (
    <div className="weather-card glass-panel">
      <h2 className="location-name">{city}</h2>
      <p className="location-country">{country}</p>
      
      <div className="temperature-container">
        <span className="temperature">{Math.round(temperature)}</span>
        <span className="temperature-unit">°C</span>
      </div>
      
      <div className="weather-desc">
        {getWeatherIcon()}
        <span>{description}</span>
      </div>

      <div className="details-grid">
        <div className="detail-item">
          <Thermometer className="detail-icon" size={24} />
          <div className="detail-info">
            <span className="detail-label">Feels Like</span>
            <span className="detail-value">{Math.round(feelsLike)}°C</span>
          </div>
        </div>
        
        <div className="detail-item">
          <Droplets className="detail-icon" size={24} />
          <div className="detail-info">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{humidity}%</span>
          </div>
        </div>
        
        <div className="detail-item">
          <Wind className="detail-icon" size={24} />
          <div className="detail-info">
            <span className="detail-label">Wind</span>
            <span className="detail-value">{windSpeed} km/h</span>
          </div>
        </div>
        
        <div className="detail-item">
          <Cloud className="detail-icon" size={24} />
          <div className="detail-info">
            <span className="detail-label">Cloud Cover</span>
            <span className="detail-value">{cloudCover}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
