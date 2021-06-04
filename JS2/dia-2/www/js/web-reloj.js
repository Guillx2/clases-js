'use strict';

// Selecciono los elementos html que quiero cambiar
const time = document.querySelector("h1#time");
const day = document.querySelector("h2#date");

const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function padNumber(n) {
  const number = Number(n);

  if (number < 10) return `0${number}`;

  return number;
}

function setClock() {
  const now = new Date();

  const hour = padNumber(now.getHours());
  const minutes = padNumber(now.getMinutes());
  const seconds = padNumber(now.getSeconds());

  const separator = seconds % 2 === 0 ? ":" : " ";

  const dayOfMonth = now.getDate();
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();

  time.innerText = `${hour}${separator}${minutes}${separator}${seconds}`;
  day.innerText = `${dayOfMonth} - ${month} - ${year}`;
}

setInterval(setClock, 1000);
setClock();
