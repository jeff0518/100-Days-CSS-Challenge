const dateElement = document.querySelector(".date");
const hourElement = document.querySelector(".hour");
const beatElement = document.querySelector(".beat");
const circle2 = document.getElementsByClassName("circle-2")[0];
const svgCircle = document.querySelector("svg circle");

for (let i = 1; i < 16; i++) {
  const point = document.createElement("div");
  point.className = "point point-" + i;
  circle2.appendChild(point);
  for (let j = 1; j < 5; j++) {
    const pointChild = document.createElement("div");
    pointChild.className = "point-set point-set-" + j;
    point.appendChild(pointChild);
  }
}

function updateClock() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = days[now.getDay()];

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = now.getSeconds();

  const offset = 270 - (seconds * 270) / 60;
  svgCircle.style.strokeDashoffset = offset;

  dateElement.textContent = `${year}/${month}/${day} ${dayName}`;
  hourElement.textContent = `${hours}:${minutes}`;
}

function updateHeartRate() {
  const beat = Math.floor(Math.random() * 20 + 70);
  beatElement.textContent = beat;
}

updateClock();
setInterval(updateClock, 1000);
setInterval(updateHeartRate, 3000);
