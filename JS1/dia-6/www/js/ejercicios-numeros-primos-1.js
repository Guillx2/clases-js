/*
1. Define una función a la que le pases como parámetro un número y nos 
   diga si es primo (true) o no (false).
   
2. Crea una segunda función a la que le pases como parámetro un número 
   máximo y nos muestre por consola los números primos del 2 al número
   que hemos pasado como parámetro (pista: esta función no tendrá return)
*/

'use strict';



// Primera parte del ejercicio (1.)
function esPrimo(num) {
   for (let i = 2; i < num; i++) {
      if (num % i === 0) {
         return false;
      }
   }
   return true;
}

console.log(esPrimo(83));
/* Esta función lo que hace es decirnos si un número en concreto es primo o no. El número (en este caso)
se lo pasamos en el console.log.  */


console.log('---------');



// Segunda parte del ejercicio (2.)

function numerosPrimos(maxNum) {
   for (let i = 2; i <= maxNum; i++) {
      if (esPrimo(i)) {
         console.log(`El número ${i} es primo.`);
      }
      // Este else es un extra para que muestre en rojo los números que no son primos
      else {
         console.error(`El número ${i} no es primo.`)
      }
   }
}
//Llamamos a la función (no es necesario console.log porque ya esta en la línea 38).
numerosPrimos(50);

/* Con esto lo que hacemos es poner un número máximo (por ejemplo 50) en el llamado a la función.
La función hace un bucle pasando por todos los números del 2 al 50 y los manda a la primera función.
La primera función (esPrimo) devuelve true o false según si el número es primo o no y si es primo, seimprime
 en el console.log de la línea 38. De este modo, se van a imprimir los números primos del 2 al 50.  */