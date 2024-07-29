"use client";
import Button from "@/components/Button";
import StealCookies from "@/components/StealCookies";
import { CookieContext } from "@/content/cookieContext";
import { useContext } from "react";

export default function Home() {
  const { cookies } = useContext(CookieContext);
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <h1>db in vercel demo</h1>
      <h1> cookies = {cookies}</h1>
      <Button />
      <StealCookies />
    </main>
  );
}
