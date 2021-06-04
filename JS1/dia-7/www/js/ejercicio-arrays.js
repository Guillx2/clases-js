'use strict';
/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Dado el array = [1, 3, 9, 14, 17, 22]
 * 
 *  - Iterar por todos los elementos dentro de un array utilizando "while" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for of" y mostrarlos en pantalla.
 *
 *  - Mostrar todos los elementos dentro de un array sumándole uno a cada uno. 
 *
 *  - Generar otro array con todos los elementos del primer array incrementados en 1. ¿Con el método push?
 *
 *  - Calcular el promedio.
 * 
*/

const myArray = [1, 3, 9, 14, 17, 22];
let posicion = 0; // Esto indica la posición (es como poner "i")

//Utilizando while:
while (posicion < myArray.length) {
    console.log(myArray[posicion]);
    posicion++; // Esto tiene que ir después del console, si no omite el 1
}

console.log('-----');


//Utilizando for:
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log('-----');


//Utilizando for...of:
for (let value of myArray) {
    console.log(value);
}

console.log('-----');

//Sumándole 1:
for (let value of myArray) {
    console.log(value + 1);
}

console.log('-----');

//Sumándole 1 y asignándolos a otro array:

const nuevoArray = []; //Primero creamos un array vacio

for (const value of myArray) {
    nuevoArray.push(value + 1); // Con push asignamos el array con el +1 al array vacio que hemos creado.
}
console.log(nuevoArray);


console.log('-----');

//Calcular promedio:

let suma = 0;

//Primero sumamos todos los números:
for (let i = 0; i < myArray.length; i++) {
    suma += myArray[i];
}


console.log(suma);
// Con esto dividimos el total de la suma de los números y los dividimos entre el
//total de números que hay en el array (6) y obtenemos la media: 
console.log(suma/myArray.length); 
