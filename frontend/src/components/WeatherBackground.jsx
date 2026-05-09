import React, { useEffect, useState } from 'react';
import '../animations.css';

const WeatherBackground = ({ condition }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate random elements based on condition
    const newElements = [];
    
    if (condition === 'rain') {
      for (let i = 0; i < 100; i++) {
        newElements.push(
          <div 
            key={`rain-${i}`}
            className="rain-drop" 
            style={{
              left: `${Math.random() * 100}vw`,
              animationDuration: `${0.5 + Math.random() * 0.5}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        );
      }
    } else if (condition === 'snow') {
      for (let i = 0; i < 80; i++) {
        newElements.push(
          <div 
            key={`snow-${i}`}
            className="snow-flake" 
            style={{
              left: `${Math.random() * 100}vw`,
              animationDuration: `${3 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.4 + Math.random() * 0.6,
              transform: `scale(${0.5 + Math.random() * 1.5})`
            }}
          />
        );
      }
    } else if (condition === 'cloudy') {
      for (let i = 0; i < 6; i++) {
        newElements.push(
          <div 
            key={`cloud-${i}`}
            className="cloud" 
            style={{
              top: `${10 + Math.random() * 30}vh`,
              width: `${200 + Math.random() * 300}px`,
              height: `${80 + Math.random() * 100}px`,
              animationDuration: `${40 + Math.random() * 40}s`,
              animationDelay: `-${Math.random() * 40}s`,
              opacity: 0.1 + Math.random() * 0.3
            }}
          />
        );
      }
    } else if (condition === 'thunderstorm') {
      // Rain + Lightning
      for (let i = 0; i < 120; i++) {
        newElements.push(
          <div 
            key={`rain-${i}`}
            className="rain-drop" 
            style={{
              left: `${Math.random() * 100}vw`,
              animationDuration: `${0.4 + Math.random() * 0.4}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        );
      }
      newElements.push(<div key="lightning" className="lightning" />);
    } else if (condition === 'clear') {
      newElements.push(<div key="sun" className="sun-ray" />);
    }

    setElements(newElements);
  }, [condition]);

  return (
    <div className="weather-background">
      {elements}
    </div>
  );
};

export default WeatherBackground;
