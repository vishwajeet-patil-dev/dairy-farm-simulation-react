import type { Cow } from "../classes/cow";

interface Props {
  cow: Cow;
}

export default function CowCard({ cow }: Props) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Cow ID: {cow.id}</h2>
        <span className="text-sm text-gray-500">Age: {cow.age} days</span>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p>
            <strong>Color:</strong> {cow.body.color}
          </p>
          <p>
            <strong>Has Horns:</strong> {cow.body.hasHorns ? "Yes" : "No"}
          </p>
          <p>
            <strong>Has Tail:</strong> {cow.body.hasTail ? "Yes" : "No"}
          </p>
          <p>
            <strong>Teats:</strong> {cow.body.teatCount}
          </p>
          <p>
            <strong>Working Udder:</strong>{" "}
            {cow.body.workingUdder ? "Yes" : "No"}
          </p>
        </div>

        <div>
          <p>
            <strong>Milk Capacity:</strong> {cow.milkCapacity} L/day
          </p>
          <p>
            <strong>Current Milk:</strong> {cow.currentMilk} L
          </p>
          <p>
            <strong>Health:</strong> {cow.health} %
          </p>
          <p>
            <strong>Mood:</strong> {cow.mood}
          </p>
          <p>
            <strong>Stomach Fill:</strong> {cow.stomachFill} %
          </p>
          <p>
            <strong>Water Fill:</strong> {cow.waterFill} %
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p>
          <strong>Pregnant:</strong>{" "}
          {cow.isPregnant
            ? `Yes (Since ${cow.isPregnant.since.toDateString()})`
            : "No"}
        </p>
        <p>
          <strong>Last Delivery:</strong>{" "}
          {cow.lastDelivery ? cow.lastDelivery.toDateString() : "N/A"}
        </p>
        <p>
          <strong>Is Sick:</strong>{" "}
          {cow.isSick ? `Yes (Since ${cow.isSick.since.toDateString()})` : "No"}
        </p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Nutrition</h3>
        <ul className="text-sm list-disc list-inside">
          <li>Energy: {cow.nutrition.energy}</li>
          <li>Protein: {cow.nutrition.protein}%</li>
          <li>Calcium: {cow.nutrition.calcium}%</li>
          <li>Phosphorus: {cow.nutrition.phosphorus}%</li>
          <li>Fiber: {cow.nutrition.fiber}%</li>
          <li>Vitamin A: {cow.nutrition.vitamins.A}</li>
          <li>Vitamin D: {cow.nutrition.vitamins.D}</li>
          <li>Vitamin E: {cow.nutrition.vitamins.E}</li>
        </ul>
      </div>
    </div>
  );
}
