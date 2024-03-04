import React, { useRef, useEffect } from "react";
import * as L from "leaflet"; // Correct import
import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    // Create the Leaflet map
    const map = L.map(mapRef.current, {
      // Add options (if needed)
      center: [center.lat, center.lng],
      zoom: zoom,
    });

    // Add a tile layer from OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', // Revised attribution link
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
