/* EJERCICIO CALCULADORA IF

    Crea una calculadora con "if" que opere con dos números. La calculadora 
    utilizará la variable "option" para decidir el tipo de operación a realizar.
    Debe poder sumar, restar, multiplicar y dividir. Como bonus, debe permitir
    elevar el número A a la potencia de B.

        -Bonus point: no se puede dividir entre 0. 
*/

'use strict';






// En este caso vamos a usar strings con el tipo de operador ('+', '-', '*', ...)
let num1 = 3;
let num2 = 0;
let option = '/';

if (option === '+') {
    console.log(num1 + num2);
} 
else if (option === '-') {
    console.log(num1 - num2);
} 
else if (option === '*') {
    console.log(num1 * num2);
} 
else if (option === '/') {
    // Con este if...else anidado dentro de otro if...else indicamos que no se puede dividir entre 0.
    if (num2 === 0) {
        console.log('No se puede dividir entre 0.'); // En lugar de "console.log()", podríamos usar "throw new Error", console.error, console.warn, para que nos lance un error con el mensaje si intentamos dividir entre 0.
    } else {
        console.log(num1 / num2);
    }
} 
else if (option === '**') {
    console.log(num1 ** num2);
}
else {
    console.log('No existe'); 
}  
  

  

/******** OTRA SOLUCIÓN (más apropiada) USANDO NÚMEROS COMO OPERADORES: *********
Utilizamos números para asignar el tipo de operador.
    0 = +
    1 = -
    2 = *
    ... */
   

/* let num1 = 4;
let num2 = 0;
let option = 3;


if (option === 0) {
    console.log(num1 + num2);
} 
else if (option === 1) {
    console.log(num1 - num2);
} 
else if (option === 2) {
    console.log(num1 * num2);
} 
else if (option === 3) {
    if (num2 === 0) {
        console.log('Non se pode dividir entre 0.')
    } else {
    console.log(num1 / num2);
    }
} 
else if (option === 4) {
    console.log(num1 ** num2);
} 
else {
    console.log('No existe');
}

 */