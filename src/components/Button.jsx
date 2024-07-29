"use client";
import { CookieContext } from "@/content/cookieContext";
import { useContext } from "react";

export default function Button() {
  const { cookies, IncreaseCookies } = useContext(CookieContext);
  return (
    <>
      <button
        onClick={IncreaseCookies}
        className="bg-white text-black hover:bg-green-600 hover:text-white"
      >
        More Cookies
      </button>
    </>
  );
}
