'use strict';

const numero = 13;
let esPrimo = true;

for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
    esPrimo = false;
} 
}

if (esPrimo){
    console.log(numero);
    console.log('El número es primo');
} else {
    console.log(numero);
    console.log('El número no es primo');
}