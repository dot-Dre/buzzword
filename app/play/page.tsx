"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { RiVoiceprintFill } from "react-icons/ri";
import { FaRegPaperPlane } from "react-icons/fa6";
import Confetti from "react-confetti";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Play() {
  const [data, setData] = useState("");
  const [guess, setGuess] = useState("");
  const [correct, setCorrect] = useState(false);
  const load = "buzzzzzzzzzzzzzzzz".split("").map((char) => ({ text: char }));

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://random-word-api.p.rapidapi.com/get_word",
        headers: {
          "X-RapidAPI-Key":
            process.env.NEXT_PUBLIC_API_KEY,
          "X-RapidAPI-Host": "random-word-api.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data.word);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const speak = (text: string | undefined) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1.5;
    utterance.rate = 0.7;
    utterance.voice = window.speechSynthesis.getVoices()[0];
    window.speechSynthesis.speak(utterance);
    console.log(text);
  };

  const handleChange = (event: any) => {
    setGuess(event.target.value);
    setCorrect(event.target.value === data.toLowerCase())
  };

  return (
    <>
      {correct ? <Confetti width={window.innerWidth} /> : <></>}
      <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
        {data ? (
          <>
            <button
              onClick={() => speak(data)}
              className="px-20 py-4 bg-transparent border-2 border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
            >
              <RiVoiceprintFill />
            </button>
            <div className="h-15" />
            <input
              type="text"
              className="bg-transparent focus:outline-none font-bold text-2xl text-center text-slate-50"
              placeholder="Type your guess here ... 🐝"
              value={guess}
              onChange={handleChange}
              disabled={correct}
            />
            {correct ? (
              <>
                <h1>🐝 Nice job! 🐝</h1>
                <button
                  onClick={() => window.location.reload()}
                  className="fixed bottom-4 px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
                >
                  Play Again
                </button>
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            <TypewriterEffect className="text-4xl" words={load} />
          </>
        )}
      </div>
    </>
  );
}
