export function formatDateTime(date: Date, formatStr: string): string {
  const day = date.getDate();
  const month = date.getMonth(); // 0-11
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const dayStr = day < 10 ? `0${day}` : `${day}`;
  const monthStr = month + 1 < 10 ? `0${month + 1}` : `${month + 1}`;
  const yearStr = `${year}`;
  const yearShortStr = `${year}`.slice(-2);

  const hourStr = hours < 10 ? `0${hours}` : `${hours}`;
  const hour12 = hours % 12 || 12;
  const hour12Str = hour12 < 10 ? `0${hour12}` : `${hour12}`;

  const minuteStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

  const ampm = hours >= 12 ? "PM" : "AM";

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthShortNames = monthNames.map((name) => name.slice(0, 3));

  // Replace tokens in order of longest to shortest to avoid partial replacements
  return formatStr
    .replace(/DD/, dayStr)
    .replace(/D/, `${day}`)
    .replace(/MMMM/, monthNames[month])
    .replace(/MMM/, monthShortNames[month])
    .replace(/MM/, monthStr)
    .replace(/M/, `${month + 1}`)
    .replace(/YYYY/, yearStr)
    .replace(/YY/, yearShortStr)
    .replace(/HH/, hourStr)
    .replace(/H/, `${hours}`)
    .replace(/hh/, hour12Str)
    .replace(/h/, `${hour12}`)
    .replace(/mm/, minuteStr)
    .replace(/m/, `${minutes}`)
    .replace(/ss/, secondStr)
    .replace(/s/, `${seconds}`)
    .replace(/A/, ampm);
}
