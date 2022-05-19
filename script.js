"use strict";
let time = 1209600;
console.log(time / 86400);
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

let second = 60;
let day = 14;
let hour = 23;
let minute = 59;
seconds.textContent = second;
minutes.textContent = minute;
hours.textContent = hour;
days.textContent = day;
const test = new Date(time);
console.log(test);
const functionality = () => {
  if (second === 0) {
    second = 60;
    if (minute === 0) {
      console.log(true);
      minute = 60;
      if (hour === 0) {
        console.log(true);
        hour = 24;
        if (day === 0) return;
        day--;
        days.textContent = String(day).padStart(2, 0);
      }
      hour--;
      hours.textContent = String(hour).padStart(2, 0);
    }
    minute--;
    minutes.textContent = String(minute).padStart(2, 0);
  }
  second--;
  seconds.textContent = String(second).padStart(2, 0);
};

const flip = () => {
  // document.querySelector(".click").style.transform = `rotateX(-0.2turn)`;
  // document.querySelector(".click").style.transform = `rotate(360deg)`;
};

setInterval(functionality, 1000);
setInterval(flip, 1000);
