/* 
EJERCICIO 2

Muestra 4 mensajes distintos por consola en función del valor de la variable edad:
    - Si edad es menor que 16: "La persona tiene menos de 16 años."
    - Si edad es entre 16 y 25 años: "La persona tiene entre 16 y 25 años."
    - Si edad es entre 26 y 45 años: "La persona tiene entre 26 y 45 años."
    - Si edad es mayor de 45 años: "La persona tiene más de 45 años." */

'use strict';

let edad = 45;

if (edad < 16) {
    console.log('La persona tiene menos de 16 años.');
} else if (edad >= 16 && edad < 26) {
    console.log('La persona tiene entre 16 y 25 años.')
} else if (edad >= 26 && edad <= 45) {
    console.log('La persona tiene entre 26 y 45 años.');
} else if (edad > 45) {
    console.log('La persona tiene más de 45 años.');
} else {
    console.log('No se reconoce el valor añadido.');
}