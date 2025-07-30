import { useEffect, useState } from "react";
import { GAME_START_DATE } from "./utils/constants";

export default function useTime() {
  function computeGameTime(): Date {
    let elapsedRealSeconds = localStorage.getItem("elapsedRealSeconds");
    if (!elapsedRealSeconds) {
      elapsedRealSeconds = "0";
      localStorage.setItem("elapsedRealSeconds", elapsedRealSeconds);
    }
    const elapsedGameMinutes = Number(elapsedRealSeconds);
    return new Date(GAME_START_DATE.getTime() + elapsedGameMinutes * 60 * 1000);
  }
  const [gameTime, setGameTime] = useState<Date>(computeGameTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setGameTime(computeGameTime());
      const temp = Number(localStorage.getItem("elapsedRealSeconds")) + 1;
      localStorage.setItem("elapsedRealSeconds", temp.toString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return { gameTime };
}
