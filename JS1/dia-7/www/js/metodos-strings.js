'use strict';

const myText = 'Hola, me llamo Jose';

let myWord = 'Mandarina';

myText.toLowerCase(); // "hola, me llamo ramón"

myText.toUpperCase(); // "HOLA, ME LLAMO RAMÓN"

myText.indexOf('o'); // 1

myText.indexOf('$'); // -1 

myText.lastIndexOf('o') // 16

myText.lastIndexOf('Ramón') // -1

myWord.repeat(3); // "MandarinaMandarinaMandarina"

myText.replace('o', 'i'); // "Hila, me llamo Jose"

myText.replaceAll('o', 'i'); // "Hila, me llami Jise"

myWord.split(''); // ["M", "a", "n", "d", "a", "r", "i", "n", "a"]

myText.split(' '); // ["Hola,", "me", "llamo", "Jose"]

const time = '12:30:59';

const timeArray = time.split(':'); // ["12", "30", "59"]

const hour = parseInt(timeArray[0]);
const minuts = parseInt(timeArray[1]);
const seconds = parseInt(timeArray[2]);

myWord.charAt(0) = 'P'; // "M"

myWord.substring(2); // "ndarina"

myWord.substring(2, 4); // "nd" ¡Ojo cuidao! Que no devuelve la posición 4.

myWord.slice(2, 4); // "nd"

myWord.slice(-3); // "ina" En este caso empieza a contar de derecha a izquierda.

myWord.replace(myWord.charAt(0), 'P');  // "Pandarina"

