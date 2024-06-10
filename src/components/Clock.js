import React, { useEffect, useState } from "react";

const Clock = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const leading0 = (num) => (num < 10 ? "0" + num : num);

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      setTimeLeft({
        days: Math.floor(time / (1000 * 60 * 60 * 24)),
        hours: Math.floor((time / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((time / 1000 / 60) % 60),
        seconds: Math.floor((time / 1000) % 60),
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => getTimeUntil(deadline), 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="w-[100%]   md:p-[40px]">
      <div className="bg-gradient-to-r from-gray-800 via-slate-500 to-slate-950 p-10 md:rounded-xl shadow-2xl max-w-lg mx-auto   text-center">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-10 animate-pulse">
          ფესტივალის დაწყებამდე დარჩა!
        </h1>
        <div className="grid grid-cols-2 gap-4 text-white">
          <div className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 shadow-lg">
            <div className="text-5xl md:text-7xl font-extrabold">
              {leading0(timeLeft.days)}
            </div>
            <div className="text-xl md:text-2xl">Days</div>
          </div>
          <div className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 shadow-lg">
            <div className="text-5xl md:text-7xl font-extrabold">
              {leading0(timeLeft.hours)}
            </div>
            <div className="text-xl md:text-2xl">Hours</div>
          </div>
          <div className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 shadow-lg">
            <div className="text-5xl md:text-7xl font-extrabold">
              {leading0(timeLeft.minutes)}
            </div>
            <div className="text-xl md:text-2xl">Minutes</div>
          </div>
          <div className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 shadow-lg">
            <div className="text-5xl md:text-7xl font-extrabold">
              {leading0(timeLeft.seconds)}
            </div>
            <div className="text-xl md:text-2xl">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
