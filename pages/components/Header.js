import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Uber-Logo.wine.svg";
import user from "../../public/user.jpg";
import UberX from "../../public/UberX.png";
import UberBike from "../../public/bike.png";
import UberSchedule from "../../public/uberschedule.png";

const Header = () => {
  return (
    <div className="flex-1 px-2">
      {/* uber */}
      <div className="flex justify-between">
        <Image src={logo} width={80} height={80} />
        <div className="flex items-center">
          <p className="text-sm text-gray-500 mr-4">Tanvir Shakil</p>
          <div className="cursor-pointer h-8 w-8 relative">
            <Image src={user} layout="fill" className="rounded-full" />
          </div>
        </div>
      </div>
      {/* action button */}
      <div className="flex">
        <Link href="/search">
          <div className="uber-card">
            <Image src={UberX} width={80} height={80} />
            <p className="text-lg">Ride</p>
          </div>
        </Link>

        <div className="uber-card">
          <Image src={UberBike} width={80} height={80} />
          <p className="text-lg">Wheels</p>
        </div>
        <div className="uber-card">
          <Image src={UberSchedule} width={80} height={80} />
          <p className="text-lg">Reserve</p>
        </div>
      </div>
      {/* input button */}
      <div className="my-5 px-2">
        <input
          type="text"
          placeholder="Where to?"
          className="text-2xl bg-gray-200 p-4 w-full border-none outline-none"
        />
      </div>
    </div>
  );
};

export default Header;
