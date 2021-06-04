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
 * Ahora haz este ejercicio utilizando las 3 formas que hemos aprendido
 *  -Declaración de función (ya está hecha)
 *  -Expresión de función
 *  -Arrow Function
*/


//Ejercicio con Declaración de función:
function showInfo_1(name, secondName, age) {
    return `Hola, eres ${name} ${secondName} y tienes ${age} años.`;
}
console.log(showInfo_1('Guille', 'Gil', 25));



//Ejercicio con Expresión de función:
const showInfo_2 = function (name, secondName, age) {
    return `Hola, eres ${name} ${secondName} y tienes ${age} años.`;
}
console.log(showInfo_2('Adrián', 'Lago', 27));



//Ejercicio con Arrow Function sin return implícito
const showInfo_3 = (name, secondName, age) => {
    return `Hola, eres ${name} ${secondName} y tienes ${age} años.`
}
console.log(showInfo_3('Rigoberto', 'Maldini', 78));



//Ejercicio con Arrow Function con return implícito:
const showInfo_4 = (name, secondName, age) => `Hola, eres ${name} ${secondName} y tienes ${age} años.`;
console.log(showInfo_4('Eustaquio', 'Mourinho', 45));