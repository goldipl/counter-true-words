"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  // Increase counter
  const increase = () => {
    console.log("dupa");
    setCounter((count) => count + 1);
  };

  // Decrease counter
  const decrease = () => {
    setCounter((prevCount) => Math.max(prevCount - 1, 0));
  };

  // Reset counter
  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <div className="select-none text-6xl font-semibold flex place-items-center my-6">
        {counter}
      </div>
      <div className="pointer-events-auto text-2xl font-semibold flex place-items-center mt-8">
        <button
          className="flex select-none pointer-events-auto mx-3 pointer rounded-lg border border-transparent px-5 py-4 bg-gray-100 border-gray-300 hover:border-neutral-400 hover:bg-neutral-500/10 dark:bg-zinc-800/30 lg:dark:bg-zinc-800/3"
          onClick={increase}
        >
          +
        </button>
        <button
          className="flex select-none pointer-events-auto mx-3 pointer rounded-lg border border-transparent px-5 py-4 bg-gray-100 border-gray-300 hover:border-neutral-400 hover:bg-neutral-500/10 dark:bg-zinc-800/30 lg:dark:bg-zinc-800/3"
          onClick={decrease}
        >
          -
        </button>
        <button
          className="flex select-none pointer-events-auto mx-3 pointer rounded-lg border border-transparent px-5 py-4 bg-gray-100 border-gray-300 hover:border-neutral-400 hover:bg-neutral-500/10 dark:bg-zinc-800/30 lg:dark:bg-zinc-800/3"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
