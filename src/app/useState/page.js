"use client";
import React from "react";
import { useState } from "react";

export default function UseStatePage() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="flex min-h-screen flex-col items-center gap-3 ">
      <h1>useStatePage</h1>
      <h1>{count}</h1>

      <button
        className="bg-white text-black hover:bg-green-600 hover:text-white"
        onClick={increase}
      >
        Up
      </button>
      <button
        onClick={decrease}
        className="flex bg-red-600 rounded text-white items-center text-center
             w-fit justify-center p-1 text-xs hover:bg-red-200 hover:text-red-600"
      >
        Down
      </button>
    </div>
  );
}
