import { useEffect, useState } from "react";

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft as { hours: number, minutes: number, seconds: number };
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
      <div className="bg-white px-2 py-1 rounded-sm shadow-sm border border-gray-200 min-w-[32px] text-center">
        {String(timeLeft.hours || 0).padStart(2, '0')}h
      </div>
      <span>:</span>
      <div className="bg-white px-2 py-1 rounded-sm shadow-sm border border-gray-200 min-w-[32px] text-center">
        {String(timeLeft.minutes || 0).padStart(2, '0')}m
      </div>
      <span>:</span>
      <div className="bg-white px-2 py-1 rounded-sm shadow-sm border border-gray-200 min-w-[32px] text-center">
        {String(timeLeft.seconds || 0).padStart(2, '0')}s
      </div>
    </div>
  );
}
