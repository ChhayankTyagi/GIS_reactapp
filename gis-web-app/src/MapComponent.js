// MapComponent.js
import React, { useState, useRef, useEffect } from 'react';
import { MapContainer as Map, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import L from 'leaflet';
import './MapComponent.css';

const MapComponent = () => {
  const [mapLayers, setMapLayers] = useState({
    osm: {
      name: 'OpenStreetMap',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    },
    satellite: {
      name: 'Satellite Imagery',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    },
  });

  const [selectedLayer, setSelectedLayer] = useState('osm');
  const provider = new OpenStreetMapProvider();
  const searchControlRef = useRef(null);

  const handleLayerChange = (layer) => {
    setSelectedLayer(layer);
  };

  const Search = () => {
    const map = useMap();

    useEffect(() => {
      if (!searchControlRef.current) {
        const searchControl = new GeoSearchControl({
          provider,
          autoCompleteDelay: 300,
          showPopup: true,
          marker: {
            icon: new L.Icon.Default(),
            draggable: false,
          },
        });

        searchControl.addTo(map);
        searchControlRef.current = searchControl;
      }
    }, [map]);

    return null;
  };

  return (
    <div className="map-container">
      <div className="search-container">
        <label>Select Map Layer:</label>
        <select onChange={(e) => handleLayerChange(e.target.value)}>
          {Object.keys(mapLayers).map((layerKey) => (
            <option key={layerKey} value={layerKey}>
              {mapLayers[layerKey].name}
            </option>
          ))}
        </select>
      </div>
      <Map center={[0, 0]} zoom={2} className="map">
        <TileLayer
          url={mapLayers[selectedLayer].url}
          attribution={`&copy; ${mapLayers[selectedLayer].name}`}
        />
        <Search />
      </Map>
    </div>
  );
};

export default MapComponent;

