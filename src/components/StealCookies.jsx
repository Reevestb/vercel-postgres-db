"use client";

import { CookieContext } from "@/content/cookieContext";
import { useContext } from "react";

export default function StealCookies() {
  const { DecreaseCookies } = useContext(CookieContext);

  return (
    <button
      onClick={DecreaseCookies}
      className="bg-white text-red-600 hover:bg-red-600 hover:text-white"
    >
      Steal a cookie
    </button>
  );
}
