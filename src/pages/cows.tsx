import { useState } from "react";
import type { Cow } from "../class/cow";
import useCows from "../hooks/use-cows";

export default function Cows() {
  const { cows, addCow } = useCows();
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const handleAddCow = () => {
    addCow(name, age);
    setShowModal(false);
    setName("");
    setAge(0);
  };
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
      >
        Add Cow
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Cow</h2>
            <input
              type="text"
              placeholder="Cow Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mb-3 border rounded-md"
            />
            <input
              type="number"
              placeholder="Cow Age"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full p-2 mb-4 border rounded-md"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCow}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {cows.map((cow: Cow, index: number) => (
          <div key={index} className="p-4 bg-white rounded-xl shadow-md">
            <h3 className="text-lg font-semibold">{cow.cowName}</h3>
            <p className="text-gray-600">Age: {cow.cowAge} years</p>
          </div>
        ))}
      </div>
    </div>
  );
}
