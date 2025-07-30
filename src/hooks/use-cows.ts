import { useEffect, useState } from "react";
import { Cow } from "../class/cow";

export default function useCows() {
  const [cows, setCows] = useState<Cow[]>([]);

  function addCow(name: string, age: number) {
    const cow = new Cow(name, age);
    setCows((prev) => [...prev, cow]);
  }

  function cowsHourlyActivity() {
    // Make a new array with updated cow ages
    setCows((prevCows) =>
      prevCows.map((cow) => {
        const updatedCow = new Cow(cow.cowName, cow.cowAge);
        updatedCow.incrementAge();
        return updatedCow;
      })
    );
  }

  useEffect(() => {
    setInterval(() => {
      cowsHourlyActivity();
    }, 1000);
  }, []);

  return { cows, addCow, cowsHourlyActivity };
}
