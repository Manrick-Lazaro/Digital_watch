const Hour = document.getElementById('hour');
const Minute = document.getElementById('minute');
const Second = document.getElementById('second');

const Clock = setInterval(() => {
  const dateNow = new Date();

  let hours = dateNow.getHours();
  let minutes = dateNow.getMinutes();
  let seconds = dateNow.getSeconds();

  Hour.textContent = hours < 10 ? '0' + hours : hours
  Minute.textContent = minutes < 10 ? '0' + minutes : minutes
  Second.textContent = seconds < 10 ? '0' + seconds : seconds
}, 1000)