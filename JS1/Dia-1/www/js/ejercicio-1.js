/* EJERCICIO 1.

Crea una variable que almacene tu nombre y otra variable que 
almacene tu número favorito.
    -Muestra ambos valores por consola.
    -Cambia tu número favorito por cualquier otro número.
    -Muestra por consola el resultado del cambio.
    -Muestra por consola el tipo de las variables definidas.
*/

'use strict';

const name = 'Guille';
let favoriteNum = 7; 
/* Normalmente un número favorito sería una constante, 
porque no cambia, pero en este caso lo vamos a cambiar asi que usamos let */

console.log(name);
console.log(favoriteNum);   
/* Esto también se puede hacer en una línea:
    console.log(name, favoriteNum) */

favoriteNum = 5; /* Con esto cambiamos el número */

console.log(favoriteNum);


console.log(typeof name, typeof favoriteNum);

// con esto mostramos por consola el tipo de las variables definidas.

