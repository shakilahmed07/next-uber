import Link from "next/link";
import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";

const Search = () => {
  const [pickup, setPickup] = useState("");
  const [dropOff, setDropOff] = useState("");

  return (
    <div className="h-screen bg-gray-200 md:px-40 md:py-10">
      {/* Back Button */}
      <div className="px-4 py-3 bg-white">
        <Link href="/">
          <ArrowLeftIcon className="h-5 w-5 text-gray-900 cursor-pointer" />
        </Link>
      </div>

      {/* Input Location */}
      <div className="flex flex-col px-4 bg-white">
        <input
          className="input-location"
          type="text"
          placeholder="Enter Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
        />
        <input
          className="my-2 input-location"
          type="text"
          placeholder="Where to?"
          value={dropOff}
          onChange={(e) => setDropOff(e.target.value)}
        />
      </div>

      {/* Saved Place */}
      <div className="px-4 bg-white">
        <div className="flex items-center my-3 p-2">
          {/* star icon */}
          <StarIcon className="h-6 w-6 text-white bg-gray-400 rounded-full p-1 mr-2" />
          <p>Saved Places</p>
        </div>
      </div>

      {/* confirm Button */}
      <div className="px-2 md:px-0">
        <Link
          href={{
            pathname: "/confirm",
            query: {
              pickup: pickup,
              dropOff: dropOff,
            },
          }}
        >
          <button className="bg-gray-900 text-white p-2 w-full">
            Confirm Locations
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Search;
