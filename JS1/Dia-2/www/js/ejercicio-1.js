/* EJERCICIO 3

Dada una variable que almacene la edad de una persona:

    -Si edad es "menor" que 18 muestra por consola un mensaje indicando 
    que la persona tiene menos de 18 años.

    -Si la edad es "igual o mayor" que 18 y "menor" que 45 muestra por 
    consola un mensaje indicando que la persona tiene entre 18 y 44 años.

    -Si edad es "igual o mayor" que 45 muestra por consola un mensaje
    indicando que la persona tiene 45 años o más.
*/

'use strict'

let edad = 18;

if (edad < 18) {
    console.log('Tienes menos de 18 años.');
} else if (edad >= 18 && edad < 45) {
    console.log('Tienes entre 18 y 44 años.');
} else if (edad >= 45) {
    console.log('Tienes más de 45 años.');
} else {
    console.log('No has introducido un valor numérico')
}


