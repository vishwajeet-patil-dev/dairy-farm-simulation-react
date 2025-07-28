import type { Cow } from "../class/cow";

const cows: Cow[] = [];

export function addCow(cow: Cow) {
  cows.push(cow);
}

export function updateCows() {
  cows.forEach((cow) => {
    cow.incrementAge();
    console.log(`${cow.cowName} is now ${cow.cowAge} years old`);
  });
}
