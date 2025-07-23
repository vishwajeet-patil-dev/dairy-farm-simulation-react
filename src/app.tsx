import { useEffect } from "react";
import { Cow } from "./classes/cow";
import { CowColorPattern } from "./classes/enums";
import type { CowBody, Nutrition } from "./classes/interface";
import CowCard from "./components/cow";
import { startGameLoop } from "./engines/time-engine";

const body: CowBody = {
  color: CowColorPattern.BLACK_WHITE,
  hasHorns: false,
  hasTail: true,
  teatCount: 4,
};

const nutrition: Nutrition = {
  energy: 1.2, // Mcal/kg
  protein: 14.5, // %
  calcium: 0.45, // %
  phosphorus: 0.35, // %
  fiber: 30, // %
  vitamins: {
    A: 15000, // IU/day
    D: 4500,
    E: 300,
  },
};

export default function App() {
  const sampleCow = new Cow(
    "cow_001", // id
    860, // age: ~2.3 years
    body, // body: CowBody
    15, // milkCapacity (ltr/day max)
    nutrition, // nutrition
    60, // stomachFill (%)
    70, // waterFill (%)
    null, // isPregnant
    new Date("2024-12-01"), // lastDelivery
    [
      // milkingHistory
      new Date("2025-07-20T08:00:00"),
      new Date("2025-07-19T08:10:00"),
      new Date("2025-07-18T08:05:00"),
      new Date("2025-07-17T07:55:00"),
      new Date("2025-07-16T08:02:00"),
    ]
  );

  console.log("The sample cow is", sampleCow);

  useEffect(() => {
    startGameLoop(); // Yeh sirf ek baar chalega
  }, []);
  return (
    <div className="">
      {[sampleCow].map((cow) => (
        <CowCard cow={cow} key={cow.id} />
      ))}
    </div>
  );
}
