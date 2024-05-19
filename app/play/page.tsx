"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { RiVoiceprintFill } from "react-icons/ri";

export default function Play() {

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
        {/* <TypewriterEffect className="text-4xl" words={title} /> */}
        <button className="px-20 py-4 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          <RiVoiceprintFill />
        </button>
        <div className="h-15" />
        <input
          type="text"
          className="bg-transparent focus:outline-none font-bold text-2xl text-center text-slate-50"
          placeholder="Type your guess here ..."
        />
        <div className="" />
      </div>
    </>
  );
}
