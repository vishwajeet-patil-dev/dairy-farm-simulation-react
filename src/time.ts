import { useEffect, useState } from "react";
import { GAME_START_DATE } from "./utils/constants";

export default function useTime() {
  function computeGameTime(): Date {
    let startRealTimestamp = localStorage.getItem("startRealTimestamp");
    if (!startRealTimestamp) {
      startRealTimestamp = Date.now().toString();
      localStorage.setItem("startRealTimestamp", startRealTimestamp);
    }
    const now = Date.now();
    const elapsedRealSeconds = Math.floor(
      (now - Number(startRealTimestamp)) / 1000
    );
    const elapsedGameMinutes = elapsedRealSeconds;
    return new Date(GAME_START_DATE.getTime() + elapsedGameMinutes * 60 * 1000);
  }
  const [gameTime, setGameTime] = useState<Date>(computeGameTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setGameTime(computeGameTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { gameTime };
}
