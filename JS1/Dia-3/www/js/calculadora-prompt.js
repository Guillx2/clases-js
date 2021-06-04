'use strict';

const numA = parseInt(prompt('Inserte el primer número:'));
const numB = parseInt(prompt('Inserte el segundo número:'));
const operador = prompt('Inserte el tipo de operador:');

if (operador === '+') {
    alert(numA + numB);
} else if (operador === '-') {
    alert(numA - numB);
} else if (operador === '*') {
    alert(numA * numB);
} else if (operador === '/') {
    alert(numA / numB);
} else {
    alert('No existe el operador seleccionado.')
}
