"use client";
import { createContext, useState } from "react";

export const CookieContext = createContext();

export function CookieProvider({ children }) {
  const [cookies, setCookies] = useState(0);

  function IncreaseCookies() {
    setCookies(cookies + 1);
  }
  function DecreaseCookies() {
    setCookies(cookies - 1);
  }
  return (
    <CookieContext.Provider
      value={{ cookies, IncreaseCookies, DecreaseCookies }}
    >
      {children}
    </CookieContext.Provider>
  );
}
