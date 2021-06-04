/* ################
 * ## Pirámide 3 ##
 * ################
 *
 * Utiliza el bucle "for" para crear las siguiente figura con asteriscos (*). Debe existir una
 * variable que permita modificar la altura de la pirámide. Para el ejemplo expuesto a 
 * continuación se ha tomado como referencia una altura de 4: 
 * 
 * - Figura 3:
 * 
 *        *
 *       ***
 *      *****
 *     *******
*/

'use strict';

// Contenido de la línea.
let piso = '';

// Nº de líneas de la figura.
const altura = 4;

for (let i = 0; i < altura; i++) {

    // Espacios.
    for (let espacio = altura - i - 1; espacio > 0; espacio--) {
        piso += ' ';
    }

    // Asteriscos.
    for (let asterisco = (2 * i) + 1; asterisco > 0; asterisco--) {
        piso += '*';
    }

    console.log(piso);

    piso = '';
}
