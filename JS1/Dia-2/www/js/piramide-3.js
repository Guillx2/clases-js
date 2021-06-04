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
let floor = '';

// Nº de líneas de la figura.
const height = 3;

for (let i = 0; i < height; i++) {

    // Espacios.
    for (let spaces = height - i - 1; spaces > 0; spaces--) {
        floor += ' ';
    }

    // Asteriscos.
    for (let asterisk = (2 * i) + 1; asterisk > 0; asterisk--) {
        floor += '*';
    }

    console.log(floor);

    floor = '';
}
