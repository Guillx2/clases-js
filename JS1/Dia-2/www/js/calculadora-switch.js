/* EJERCICIO CALCULADORA SWITCH

Crea una calculadora con "switch" que opere con dos números. La calculadora
utilizará la variable "option" para decidir el tipo de operación a realizar.
Debe poder sumar, restar, multiplicar y dividir. A mayores debe permitir 
elevar el número A a la potencia de B.

    -Bonus point: no se puede dividir entre 0. 
*/

'use strict'

const num_1 = 4;
const num_2 = 0;
const option = 3;

// También se podría hacer con strings de los operadores 
// ('+', '-', '*',...) como en el ejercicio de if...else.

switch (option) {

    case 0:
        console.log(num_1 + num_2);
        break;

    case 1:
        console.log(num_1 - num_2);
        break;

    case 2:
        console.log(num_1 * num_2);
        break;

    case 3:
        if (num_2 === 0){
            console.log('No se puede dividir entre 0');
        } else {
            console.log(num_1 / num_2);
        }
        break;

    case 4: 
        console.log(num_1 ** num_2);
        break;
    
    default:
        console.log('No has introducido un tipo de operador correcto');
        break;

}