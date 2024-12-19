import React, { useCallback, useEffect, useState } from "react";

const AntiCounter = () => {
  const [time, setTime] = useState("");

  const timerFunc = useCallback(() => {
    const now = new Date();
    const tomorrowUTC = new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1)
    );
    const diff = Math.floor((tomorrowUTC - now) / 1000);
    const hours = String(Math.floor(diff / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((diff % 3600) / 60)).padStart(2, "0");
    const seconds = String(diff % 60).padStart(2, "0");
    setTime(`${hours}:${minutes}:${seconds}`);
  }, []);

  useEffect(() => {
    const timer = setInterval(timerFunc, 1000);
    timerFunc();
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timerFunc]);

  return <>{time}</>;
};

export default AntiCounter;
