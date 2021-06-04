/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * - Crea una función "showInfo()" a la que le pases como parámetros un nombre y una edad y nos devuelva 
 *   ambos parámetros. Muestra lo que devuelva la función por consola. Aplica lo aprendido sobre "template 
 *   strings" (template literals).
 * 
 * - Llama a la función tres veces con parámetros distintos.
 * 
 * 
*/


 'use strict';
//Declaración de función:
function showInfo(name, secondName, age) {
   return `Hola, eres ${name} ${secondName} y tienes ${age} años.`
}
//Llamado a la función (3 veces en este caso, porque así lo pide el ejercicio)
console.log(showInfo('Sonia', 'Perez', 34));
console.log(showInfo('Manolo', 'Rodriguez', 68));
console.log(showInfo('Guille', 'Gil', 25));

// Otra forma de hacer el llamado a la función sería asignándola a una variable:
const info = showInfo('Roberto', 'Vázquez', 15);
   console.log(info);


/* 
function showInfo(name, age){
   return `Eres ${name} y tienes ${age} años.`;
}

console.log(showInfo('Manolo', 937));
console.log(showInfo('Sergio', 34));
console.log(showInfo('Jordi', 37));

const info = showInfo('Sara', 70);
console.log(info);



// Expresión de función
const showInfo_2 = function (name, age) {
   return `Eres ${name} y tienes ${age} años.`;
}

showInfo_2('Manolo')


//Arrow function con return implícito
const showInfo_3 = (name, age) => `Eres ${name} y tienes ${age} años`
   return `Eres ${name} y tienes ${age} años.`;

   const result_3 = showInfo_3 ('Lucía, 13')

 */