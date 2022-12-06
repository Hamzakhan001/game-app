import React, { useRef } from 'react';
import { MapContainer,GeoJSON} from 'react-leaflet';
import './App.css';
import bar from "./zonesdata.json";
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet'
// import ReactDOMServer from "react-dom/server";

const defaultCenter = [25.740529092773226,73.30627441406251];
const defaultZoom = 8;

function App() {
  const mapRef = useRef();
  function onEachFeature(feature, layer) {
    if (feature.properties) {
      layer.on('click',(e)=>{
        let code=feature.properties.Zipcode;
        layer.bindPopup(`Zip Code : ${code}`).openPopup();
      })
    }
}
  return (
    <div className="App">
      <MapContainer ref={mapRef} center={defaultCenter} zoom={defaultZoom}>
        {/* <TileLayer url={gameTiles}
        attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" /> */}
        <GeoJSON data={bar}  onEachFeature={onEachFeature} />
      </MapContainer>
    </div>
  );
}

export default App;
