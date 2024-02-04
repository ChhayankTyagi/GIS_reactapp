// SpatialDataComponent.js
import React, { useState, useRef } from 'react';
import { MapContainer as Map, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const SpatialDataComponent = () => {
  const [mapLayers, setMapLayers] = useState([]);
  const geoJsonRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const geoJsonData = JSON.parse(e.target.result);
          setMapLayers((prevLayers) => [...prevLayers, geoJsonData]);
        } catch (error) {
          console.error('Error parsing GeoJSON file:', error);
        }
      };

      reader.readAsText(file);
    }
  };

  return (
    <div>
      <div>
        <label>Upload GeoJSON file:</label>
        <input type="file" accept=".geojson" onChange={handleFileUpload} />
      </div>
      
    
    </div>
  );
};

export default SpatialDataComponent;
