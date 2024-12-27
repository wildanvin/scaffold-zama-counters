"use client";

import { useState } from "react";
import type { NextPage } from "next";

const Ecounter2: NextPage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    alert(`Submitted: ${inputValue}`);
  };

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5">
        <h1 className="text-center">
          <span className="block text-4xl font-bold">Ecounter 2</span>
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 space-y-4 w-full px-8">
        <input
          type="text"
          placeholder="Enter something..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Ecounter2;
