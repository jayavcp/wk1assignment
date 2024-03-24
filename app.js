console.log("hello universe");
console.dir(document);
//selecting the elements by id
const music1 = document.getElementById("music1");
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const pauseBtn = document.getElementById("pauseBtn");
const backBtn = document.getElementById("backBtn");
const fwBtn = document.getElementById("fwBtn");

playBtn.addEventListener("click", function () {
  music1.play();
});

stopBtn.addEventListener("click", function () {
  music1.pause();
  music1.currentTime = 0;
});

pauseBtn.addEventListener("click", function () {
  music1.pause();
});

backBtn.addEventListener("click", function () {
  music1.currentTime = music1.currentTime - 10;
});

fwBtn.addEventListener("click", function () {
  music1.currentTime = music1.currentTime + 10;
});

// change color button
const bgcolorButton = document.getElementById("color");
let colorcount = 0;
bgcolorButton.addEventListener("click", function () {
  colorcount += 1;
  if (colorcount % 7 == 1) {
    document.body.style.backgroundColor = "red";
  }
  if (colorcount % 7 == 2) {
    document.body.style.backgroundColor = "orange";
  }
  if (colorcount % 7 == 3) {
    document.body.style.backgroundColor = "yellow";
  }
  if (colorcount % 7 == 4) {
    document.body.style.backgroundColor = "green";
  }
  if (colorcount % 7 == 5) {
    document.body.style.backgroundColor = "blue";
  }
  if (colorcount % 7 == 6) {
    document.body.style.backgroundColor = "indigo";
  }
  if (colorcount % 7 == 0) {
    document.body.style.backgroundColor = "purple";
  }
});
