"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ClockSection() {
  const targetDate = new Date("2025-10-19T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-background">
      <div className="group relative m-auto max-w-5xl px-6">
        {/* Hover link */}
        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
          <Link
            href="/"
            className="block text-sm duration-150 hover:opacity-75"
          >
            <span>Get tickets now!</span>
            <ChevronRight className="ml-1 inline-block size-5" />
          </Link>
        </div>

        {/* Countdown Clock Grid */}
        <div className="group-hover:blur-xs mx-auto mt-6 mb-6 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-6 transition-all duration-500 group-hover:opacity-50  sm:gap-y-5  md:grid-cols-4 md:gap-x-4 md:gap-y-8">
          <div className="p-4 bg-gray-50 rounded-2xl shadow-lg text-center text-black">
            <p className="text-3xl sm:text-4xl md:text-1xl">
              {timeLeft.days}
            </p>
            <span className="block text-sm sm:text-base md:text-lg mt-2">Days</span>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl shadow-lg text-center text-black">
            <p className="text-3xl sm:text-4xl md:text-1xl">
              {timeLeft.hours}
            </p>
            <span className="block text-sm sm:text-base md:text-lg mt-2">Hours</span>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl shadow-lg text-center text-black">
            <p className="text-3xl sm:text-4xl md:text-1xl">
              {timeLeft.minutes}
            </p>
            <span className="block text-sm sm:text-base md:text-lg mt-2">Minutes</span>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl shadow-lg text-center text-black">
            <p className="text-3xl sm:text-4xl md:text-1xl">
              {timeLeft.seconds}
            </p>
            <span className="block text-sm sm:text-base md:text-lg mt-2">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}
