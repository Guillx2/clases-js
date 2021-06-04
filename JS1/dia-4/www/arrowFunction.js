'use strict';

//Declaración de función:

function calculate_1 (firstNum, secondNum) {
    return firstNum + secondNum;
}

console.log(calculate_1(6, 2));

//Expresión de función:

const calculate_2 = function (firstNum, secondNum) {
    return firstNum + secondNum;
}

console.log(calculate_2(10, 5));

//Arrow function (función flecha) SIN return implícito:

const calculate_3 = (firstNum, secondNum) => {
    return firstNum + secondNum;
}
console.log(calculate_3(7, 3));

//Arrow function CON return implícito:

const calculate_4 = (firstNum, secondNum) => firstNum + secondNum;
console.log(calculate_4(10,7));



/* Para el ARROW FUNCTION:
 Declaramos la función igual que la expresión de función, pero en lugar de poner "function (parámetros)", 
ponemos los parámetros directamente y cambiamos la palabra reservada "function" por una flecha ( => )
después de los parámetros.  */

/* 
"Sin return implícito": se usa cuando se necesita poner varias líneas de código dentro de la función. 
(se usan las llaves "{}").

"Con return impícito": se utiliza cuando se puede resolver la función en una sola línea de código. 
No es necesario usar el "return". */