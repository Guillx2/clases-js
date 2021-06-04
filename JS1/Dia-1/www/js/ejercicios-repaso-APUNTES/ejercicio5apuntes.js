
/* 
EJERCICIO 5

Muestra por consola si un número dado es primo o no. Un número es primo
cuando solo es divisible entre él mismo y el número 1. ¿Cómo podemos saber 
esto? Pongamos como ejemplo el número 7. 
    - Vamos a dividirlo entre todos los números anteriores omitiendo el 1 y al 
      propio nº.
    - En este caso dividiremos el 7 entre 2, 3, 4, 5 y 6.
    - Si al realizar alguna de estas divisiones obtenemos de resto 0, 
      sabremos que el número es primo.
 */

 'use strict';

 const numero = 7;
 let esPrimo = true;

 for (let i = 2; i < numero; i++) {
     console.log(`En esta repetición compruebo el resto de ${numero} / ${i}`)

 if (numero % i === 0) {
     esPrimo = false;
 } 
}
if (esPrimo) {
    console.log(numero);
    console.log('Es primo');
} else {
    console.log(numero);
    console.log('No es primo');
}
