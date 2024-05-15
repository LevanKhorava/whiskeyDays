import React, { useEffect, useState } from "react";

const Clock = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div className="bg-rose-950 p-[50px]">
      <h1 className="text-center text-[25px] md:text-[40px] text-white  font-bold mb-[40px]">
        ფესტივალის დაწყებამდე დარჩა!
      </h1>
      <div className="flex flex-col text-white   items-start w-[280px] m-auto mt-[40px] ">
        <div className=" font-bold text-[25px] md:text-[50px]">
          {leading0(days)} Days
        </div>
        <div className="font-bold text-white text-[25px] md:text-[50px]">
          {leading0(hours)} Hours
        </div>
        <div className="font-bold text-white text-[25px] md:text-[50px]">
          {leading0(minutes)} Minutes
        </div>
        <div className="font-bold text-white text-[25px] md:text-[50px]">
          {leading0(seconds)} Seconds
        </div>
      </div>
    </div>
  );
};

export default Clock;
