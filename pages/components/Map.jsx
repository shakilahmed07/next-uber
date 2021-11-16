import React from "react";
import { useEffect } from "react";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "your token";

const Map = ({ pickupCoordinates, dropOffCoordinates }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/yourstyle",
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 3, // starting zoom
    });

    if (pickupCoordinates) {
      AddToMap(map, pickupCoordinates);
    }

    if (dropOffCoordinates) {
      AddToMap(map, dropOffCoordinates);
    }

    if (pickupCoordinates && dropOffCoordinates) {
      map.fitBounds([pickupCoordinates, dropOffCoordinates], {
        padding: 60,
      });
    }
  }, [pickupCoordinates, dropOffCoordinates]);

  const AddToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <div id="map" className="flex-1 h-1/2 md:h-screen"></div>;
};

export default Map;
