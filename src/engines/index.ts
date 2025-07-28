import { updateCows } from "./cow";

export default function mainEngine() {
  console.log("main engine is running");
  updateCows();
}
setInterval(() => {
  mainEngine();
}, 1000);
