import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/Uber-Logo.wine.svg";
import UberX from "../public/UberX.png";
import UberBike from "../public/bike.png";
import UberSchedule from "../public/uberschedule.png";
import { useRouter } from "next/router";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "../firebase";

const Header = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, []);
  // console.log(user);
  return (
    <div className="flex-1 px-2 md:px-8">
      {/* uber */}
      <div className="flex justify-between">
        <Image src={logo} width={80} height={80} />
        <div className="flex items-center">
          <p className="text-sm  mr-4 cursor-pointer">{user && user.name}</p>
          <p
            onClick={() => signOut(auth)}
            className="text-xs text-gray-500 cursor-pointer"
          >
            Sign Out
          </p>
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

        <Link href="/search">
          <div className="uber-card">
            <Image src={UberBike} width={80} height={80} />
            <p className="text-lg">Wheels</p>
          </div>
        </Link>

        <Link href="/search">
          <div className="uber-card">
            <Image src={UberSchedule} width={80} height={80} />
            <p className="text-lg">Reserve</p>
          </div>
        </Link>
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
