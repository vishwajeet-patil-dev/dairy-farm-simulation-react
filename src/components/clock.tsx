import useTime from "../time";
import { formatDateTime } from "../utils/format-date-time";

export default function Clock() {
  const { gameTime } = useTime();
  return (
    <div className="w-fit px-3 py-1 text-center border border-5 rounded-sm bg-[#C0C0C0] text-[#333333]">
      <p className="font-[digital] text-[10px] leading-none tracking-none">
        {formatDateTime(gameTime, "DD-MM-YYYY")}
      </p>
      <p className="font-[digital] text-[20px] tracking-[2px] leading-none font-bold">
        {formatDateTime(gameTime, "HH:mm")}
      </p>
    </div>
  );
}
