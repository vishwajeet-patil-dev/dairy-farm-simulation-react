import Clock from "./components/clock";
import Cows from "./pages/cows";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="fixed top-2 right-2">
        <Clock />
      </div>
      <Cows />
    </div>
  );
}
