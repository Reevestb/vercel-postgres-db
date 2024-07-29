"use client";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.payload };
    case "decrease":
      return { ...state, count: state.count - action.payload };
  }
}

export default function useReducerPage() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="flex min-h-screen flex-col items-center gap-3 ">
      <h1>useReducer Page</h1>
      <p>Count: {state.count}</p>
      <button
        className="bg-white text-black hover:bg-green-600 hover:text-white"
        onClick={() => dispatch({ type: "increase", payload: 1 })}
      >
        up
      </button>
      <button
        className="bg-white text-black hover:bg-green-600 hover:text-white"
        onClick={() => dispatch({ type: "increase", payload: 10 })}
      >
        up + 10
      </button>
      <button
        className="bg-white text-red-600 hover:bg-red-600 hover:text-white"
        onClick={() => dispatch({ type: "decrease", payload: 1 })}
      >
        down
      </button>
      <button
        className="bg-white text-red-600 hover:bg-red-600 hover:text-white"
        onClick={() => dispatch({ type: "decrease", payload: 10 })}
      >
        down -10
      </button>
    </div>
  );
}
