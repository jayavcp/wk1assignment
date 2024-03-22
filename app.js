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
