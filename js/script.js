(function startClock() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes() + sec / 60;
  const hour = (now.getHours() % 12) + min / 60;
  const secAngle = sec * 6;
  const minAngle = min * 6;
  const hourAngle = hour * 30;
  const secHand = document.querySelector(".clock__second-hand");
  const minHand = document.querySelector(".clock__minute-hand");
  const hourHand = document.querySelector(".clock__hour-hand");
  secHand.setAttribute("transform", `rotate(${secAngle},50,50)`);
  minHand.setAttribute("transform", `rotate(${minAngle},50,50)`);
  hourHand.setAttribute("transform", `rotate(${hourAngle},50,50)`);
  setTimeout(startClock, 1000);
})();
