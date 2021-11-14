import React from "react";
import carList from "./data/carList";

const RideSelector = () => {
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
            <p className="text-sm">$24.58</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideSelector;
