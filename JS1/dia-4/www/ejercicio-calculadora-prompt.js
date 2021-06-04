'use strict'

const num_1 = parseInt(prompt('Inserte el primer número:'));
const num_2 = parseInt(prompt('Inserte el segundo número:'));
const option = prompt('Inserte el tipo de operación: sumar (+), restar (-), dividir (/), multiplicar (*), elevar (**).');

if (option === '+') {
    console.log(`${num_1} + ${num_2} = ${num_1 + num_2}`);
} else if (option === '-') {
    console.log(`${num_1} - ${num_2} = ${num_1 - num_2}`);
} else if (option === '*') {
    console.log(`${num_1} * ${num_2} = ${num_1 * num_2}`);
} else if (option === '/') {
    if (num_2 === 0) {
        console.log('No es posible dividir entre 0.');
    } else {
    console.log(`${num_1} / ${num_2} = ${num_1 / num_2}`);
    }
} else if (option === '**') {
    console.log(`${num_1} ** ${num_2} = ${num_1 ** num_2}`);
} else {
    console.log('No se ha introducido un valor correcto.');
}