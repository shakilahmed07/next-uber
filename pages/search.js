import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";

const Search = () => {
  return (
    <div className="h-screen bg-gray-200">
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
        />
        <input
          className="my-2 input-location"
          type="text"
          placeholder="Where to?"
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
      <div className="px-2">
        <button className="bg-gray-900 text-white p-2 w-full">
          Confirm Locations
        </button>
      </div>
    </div>
  );
};

export default Search;
