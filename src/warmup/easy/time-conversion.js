/**
 * Time Conversion
 * https://www.hackerrank.com/challenges/time-conversion/problem
 */
export const timeConversion = (s) => {
  const time = s.split(":");

  let hour = Number(time[0]);
  const minute = time[1];
  const second = time[2].substr(0, 2);
  const ampm = time[2].substr(2);

  if (hour === 12) {
    hour = 0;
  }

  if (ampm === "PM") {
    hour += 12;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  return [hour, minute, second].join(":");
};
