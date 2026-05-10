# 🌤️ Animated Weather App

A visually engaging, interactive weather application built with a modern React frontend and an Express.js backend. The app fetches real-time weather data and displays it using dynamic, CSS-based animations that reflect the current weather conditions.

## ✨ Features

- **Real-time Weather Data**: Fetches accurate, up-to-date weather information using the free Open-Meteo API.
- **Dynamic Animations**: Beautiful CSS-based animations that visually represent current conditions (e.g., rain, snow, clear sky, clouds, thunderstorm).
- **City Search**: Easily search for any city worldwide to get its current weather.
- **Responsive Design**: Clean and modern interface that looks great on any device.
- **Day/Night Modes**: Automatically adjusts the app's theme based on whether it's day or night in the selected location.

## 🚀 Technologies Used

### Frontend
- **React**: UI library for building the interface.
- **Vite**: Next-generation frontend tooling for fast development and builds.
- **Lucide React**: Beautiful, clean icons.
- **Vanilla CSS**: Custom styling and dynamic weather micro-animations.

### Backend
- **Node.js & Express.js**: Fast and minimal web server for handling API requests.
- **Axios**: Promise-based HTTP client for fetching data from the Open-Meteo API.
- **CORS**: Cross-Origin Resource Sharing middleware.

### APIs
- **Open-Meteo Geocoding API**: Resolves city names to geographical coordinates.
- **Open-Meteo Forecast API**: Fetches current weather conditions based on coordinates.

## 📦 Getting Started

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Installation & Setup

1. **Clone the repository (or download the project files):**
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Setup the Backend:**
   Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   *The backend server will run on `http://localhost:3001`.*

3. **Setup the Frontend:**
   Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   *The Vite development server will start, typically on `http://localhost:5173`.*

4. **View the App:**
   Open your browser and navigate to the URL provided by the Vite server to see the Animated Weather App in action!

## 📂 Project Structure

```text
weather-app/
├── backend/
│   ├── package.json
│   └── server.js           # Express API and Open-Meteo integration
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx         # Main application component
│       ├── index.css       # Global styles & themes
│       ├── animations.css  # CSS weather animations
│       └── components/     # React components (SearchBar, WeatherDisplay, WeatherBackground)
└── Readme.md
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License

This project is licensed under the [ISC License](LICENSE).
