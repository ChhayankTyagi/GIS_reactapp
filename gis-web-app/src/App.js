// App.js
import React from 'react';
import MapComponent from './MapComponent';
import SpatialDataComponent from './SpatialDataComponent';
import './App.css'; // Import the App-specific CSS file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GIS Web App</h1>
      </header>
      <main>
        <div className="map-container">
          <MapComponent />
        </div>
        <div className="spatial-data-container">
          <SpatialDataComponent />
        </div>
      </main>
    </div>
  );
}

export default App;
