/* ################
 * ## Pirámide 4 ##
 * ################
 *
 * Utiliza el bucle "for" para crear las siguiente figura con asteriscos (*). Debe existir una
 * variable que permita modificar la altura de la pirámide. Para el ejemplo expuesto a 
 * continuación se ha tomado como referencia una altura de 4: 
 * 
 * - Figura 4:
 * 
 *        *
 *       ***
 *      *****
 *     *******
 *      *****
 *       ***
 *        *
*/

'use strict';

// Nº de líneas de la figura.
const height = 6;

// Primera parte.
for (let i = 0; i < height; i++) {

    let floor = '';

    // Espacios.
    for (let spaces = height - i - 1; spaces > 0; spaces--) {
        floor += ' ';
    }

    // Asteriscos.
    for (let asterisk = (2 * i) + 1; asterisk > 0; asterisk--) {
        floor += '*';
    }

    console.log(floor);

}

// Segunda parte.
for (let i = height - 1; i > 0; i--) {

    let floor = '';

    // Espacios.
    for (let spaces = i ; spaces < height; spaces++) {
        floor += ' ';
    }

    // Asteriscos.
    for (let asterisk = (2 * i) - 1; asterisk > 0; asterisk--) {
        floor += '*';
    }

    console.log(floor);

}
