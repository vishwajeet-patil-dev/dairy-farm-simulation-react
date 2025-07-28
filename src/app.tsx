import { Cow } from "./class/cow";
import Clock from "./components/clock";
import { addCow } from "./engines/cow";

export default function App() {
  addCow(new Cow("Bessie"));
  addCow(new Cow("MooMoo", 5));
  return (
    <div className="">
      <div className="fixed top-2 right-2">
        <Clock />
      </div>
    </div>
  );
}
