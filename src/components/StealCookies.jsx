"use client";

import { CookieContext } from "@/content/cookieContext";
import { useContext } from "react";

export default function StealCookies() {
  const { DecreaseCookies } = useContext(CookieContext);
  return <button onClick={DecreaseCookies}>Steal a cookie</button>;
}
