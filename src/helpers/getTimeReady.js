import isNull from "./isNull";

function getTimeReady(orderTotal) {
  if (!isNull(orderTotal.time)) {
    const time = Number(orderTotal.time.split(" ")[0]);
    let hourNow = new Date().getHours();
    let minutesNow = new Date().getMinutes();
    let hourReady = hourNow;
    let minutesReady = minutesNow;

    if (time + minutesNow >= 60) {
      hourReady += 1;
      minutesReady = time + minutesNow - 60;

      if (hourReady >= 24) {
        hourReady = 0;
      }
    } else {
      minutesReady += time;
    }
    return `${("000" + hourReady).slice(-2)}:${("000" + minutesReady).slice(
      -2
    )}`;
  }
  return 0;
}

export default getTimeReady;
