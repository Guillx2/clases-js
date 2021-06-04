/* #################
*  ## Ejercicio 1 ##
*  #################
*
* Ordena el siguiente array numérico de - a +: [4, 10, 7, 1, 2] 
*
* ¡No se puede usar el método sort()!
* 
*/

'use strict';

const numeros = [4, 10, 7, 1, 2];

let menor;

for (let i = 0; i < (numeros.length - 1); i++) {
    for (let j = (i+1); j < numeros.length; j++) {
        if (numeros[j] < numeros[i]) {
            menor = numeros[j];
            numeros[j] = numeros[i];
            numeros[i] = menor;
        }
    }
    console.log(menor);
}