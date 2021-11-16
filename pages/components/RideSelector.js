import React, { useEffect, useState } from "react";
import carList from "./data/carList";

const RideSelector = ({ pickupCoordinates, dropOffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropOffCoordinates[0]},${dropOffCoordinates[1]}?access_token=pk.eyJ1IjoidGFudmlyc2hha2lsIiwiYSI6ImNrczQ2Z2oxeDAwZHMycHBrdW01dm1janYifQ.kZ5H7GOkYq4Ss4ylo5Gh_w`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data);
        if (data.routes.length > 0) {
          setRideDuration(data.routes[0].duration / 100);
        } else {
          setRideDuration(0);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    // .then((res) => res.json())
    // .then((data) => setRideDuration(data.routes[0].duration / 100));
  }, [pickupCoordinates, dropOffCoordinates]);

  return (
    <div className="flex-1 flex flex-col overflow-y-scroll scrollbar-hide md:py-4">
      <p className="text-center py-2 text-sm text-gray-500 border-b">
        Choose a ride or swipe up for more
      </p>
      <div className="overflow-y-scroll scrollbar-hide">
        {carList.map((car, index) => (
          <div key={index} className="flex p-4 items-center">
            <img src={car.imgUrl} alt="" className="h-14 mr-2" />
            <div className="flex-1">
              <p className="font-medium">{car.service}</p>
              <p className="text-xs text-blue-500">5 minute away</p>
            </div>
            <p className="text-sm">
              {"$" + (rideDuration * car.multiplier).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideSelector;
