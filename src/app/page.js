"use client";
import Button from "@/components/Button";
import StealCookies from "@/components/StealCookies";
import { CookieContext } from "@/content/cookieContext";
import { useContext } from "react";
import { ThemeContext } from "@/content/Theme";

export default function Home() {
  const { cookies } = useContext(CookieContext);
  let { theme, setTheme } = useContext(ThemeContext);

  function handleThemeToggle() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <h1>db in vercel demo</h1>
      <h1> cookies = {cookies}</h1>
      <Button />
      <br />
      <StealCookies />
      <br />
      <h2>Theme: {theme}</h2>
      <button onClick={handleThemeToggle}>Change theme</button>
    </main>
  );
}
