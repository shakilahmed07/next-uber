import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../public/Uber-Logo.wine.svg";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);
  return (
    <div className="flex flex-col p-4 md:w-80 md:mx-auto bg-gray-100 h-screen w-screen">
      <div>
        <Image src={logo} width={100} height={100} objectFit="contain" />

        <img
          src="https://blogapi.uber.com/wp-content/uploads/2020/10/blog-header-new-1024x512.png"
          alt=""
          className="w-full object-contain"
        />

        <p className="text-3xl text-gray-500 pt-4">
          Login into Access your account
        </p>
      </div>
      <button
        onClick={() => signInWithPopup(auth, provider)}
        className="bg-gray-900 text-white self-center w-full py-2 mt-8"
      >
        Sign in Google
      </button>
    </div>
  );
};

export default Login;
