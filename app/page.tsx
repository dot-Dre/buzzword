"use client";
import Link from "next/link";
import { TypewriterEffect } from "../components/ui/typewriter-effect";

export default function Home() {
  const title = "Buzzword".split("").map((char) => ({ text: char }));

  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
      <TypewriterEffect className="text-4xl" words={title} />
      <button className="px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        <Link href="/play">Play</Link>
      </button>
    </div>
  );
}
