/* EJERCICIO 1.

Crea una variable que almacene tu nombre y otra variable que 
almacene tu número favorito.
    -Muestra ambos valores por consola.
    -Cambia tu número favorito por cualquier otro número.
    -Muestra por consola el resultado del cambio.
    -Muestra por consola el tipo de las variables definidas.
*/

'use strict';

const myName = 'Guille';
let favoriteNumber = 7;

console.log(myName, favoriteNumber);

favoriteNumber = 5;

console.log(favoriteNumber);

console.log(typeof(myName));
console.log(typeof(favoriteNumber));