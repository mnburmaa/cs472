/* This is clock.js */

const date = new Date();
document.getElementById('year').innerText = date.getFullYear();
document.getElementById('month').innerText = date.getMonth() + 1;
document.getElementById('day').innerText = date.getDate();
document.getElementById('hour').innerText = date.getHours();
document.getElementById('minute').innerText = date.getMinutes();
document.getElementById('second').innerText = date.getSeconds();
function addHour() {
  let hour = document.getElementById('hour');
  let currentHour = hour.innerText;
  let minute = document.getElementById('minute');
  let currentMin = minute.innerText;
  if (currentHour == 23 && currentMin == 59) {
    hour.innerText = '00';
  } else {
    const hourValue = parseInt(currentHour) + 1;
    if (hourValue < 10) {
      hour.innerText = '0' + hourValue;
    } else {
      hour.innerText = hourValue;
    }
  }
}

function addMinute() {
  let minute = document.getElementById('minute');
  let currentMin = minute.innerText;

  if (currentMin == 59) {
    addHour();
    minute.innerText = 57;
  } else {
    const minuteValue = parseInt(currentMin) + 1;
    if (minuteValue < 10) {
      minute.innerText = '0' + minuteValue;
    } else {
      minute.innerText = minuteValue;
    }
  }
}

function addSecond() {
  let sec = document.getElementById('second');
  let current = sec.innerText;
  if (current == 59) {
    addMinute();
    sec.innerText = '00';
  } else {
    const secValue = parseInt(current) + 1;
    if (secValue < 10) {
      sec.innerText = '0' + secValue;
    } else {
      sec.innerText = secValue;
    }
  }
}
setInterval(addSecond, 1000);
