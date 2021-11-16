import React from "react";
import { useEffect } from "react";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGFudmlyc2hha2lsIiwiYSI6ImNrczQ2Z2oxeDAwZHMycHBrdW01dm1janYifQ.kZ5H7GOkYq4Ss4ylo5Gh_w";

const Map = ({ pickupCoordinates, dropOffCoordinates }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/tanvirshakil/ckvs94n1n0tmc14t7s1zers9c",
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
