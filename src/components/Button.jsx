"use client";
import { CookieContext } from "@/content/cookieContext";
import { useContext } from "react";

export default function Button() {
  const { cookies, IncreaseCookies } = useContext(CookieContext);
  return (
    <>
      <button onClick={IncreaseCookies}>More Cookies</button>
    </>
  );
}
