import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropOff } = router.query;
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropOffCoordinates, setDropOffCoordinates] = useState();

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoidGFudmlyc2hha2lsIiwiYSI6ImNrczQ2Z2oxeDAwZHMycHBrdW01dm1janYifQ.kZ5H7GOkYq4Ss4ylo5Gh_w",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropOffCoordinates = (dropOff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoidGFudmlyc2hha2lsIiwiYSI6ImNrczQ2Z2oxeDAwZHMycHBrdW01dm1janYifQ.kZ5H7GOkYq4Ss4ylo5Gh_w",
        })
    )
      .then((res) => res.json())
      .then((data) => setDropOffCoordinates(data.features[0].center));
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropOffCoordinates(dropOff);
  }, [pickup, dropOff]);

  return (
    <div className="flex flex-col h-screen md:flex-row-reverse">
      <Map
        pickupCoordinates={pickupCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      {/* ride section */}
      <div className="flex-1 flex flex-col h-1/2 md:py-5 md:h-screen">
        <RideSelector />
        <div className="border-t-2 md:border-t-0">
          <div className="bg-gray-900 text-white text-center mx-4 my-4 py-2">
            Confirm UberX
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
