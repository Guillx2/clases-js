/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Dados el siguiente array: [true, false, false, false, true, false, false, false, true]
 * 
 *  - Los valores positivos son infectados.
 * 
 *  - Los infectados transmiten su enfermedad a los no infectados que tienen a los lados.
 * 
 * En este caso el resultado debería ser: [true, true, false, true, true, true, false, true, true];
 * 
 */

'use strict;'

const infectados = [true, false, false, false, true, false, false, false, true];

const copiaInfectados = [...infectados];

for (let i = 0; i < infectados.length; i++) {
    //Si el paciente está infectado...
    if (infectados[i]) {
        //Nos aseguramos de no insertar elementos a la izquierda del primer elemento del array:
        //Si i es mayor que 0..
        if (i > 0) {
            //Si la condición se cumple, infecto al paciente de su izquierda: 
            copiaInfectados[i - 1] = true;
        }
        //Nos aseguramos de no insertar elementos a la derecha del último elemento del array:
        //Si i es menor que la longitud del array -1...
        if (i < infectados.length - 1) {
            copiaInfectados[i + 1] = true;
        }
    }

}
console.log(copiaInfectados);