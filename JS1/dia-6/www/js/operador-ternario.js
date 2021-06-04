// El operador ternario se suele utilizar para substituir un else if.




/* const esAdulto = true;

 if (esAdulto) {
    console.log('Es adulto.');
} else {
    console.log('No es adulto.');
} */

// Vamos a convertir este if else en operador ternario:


const esAdulto = true; 
const resultado = (esAdulto) ? 'Es adulto.' : 'No es adulto.'

console.log(resultado);

/* Escribimos la condición "(esAdulto)". Si esto se cumple, devuelve el primer parámetro "Es adulto", 
    si no, devuelve el segundo. 
Los dos puntos (:) funcionan como un else. 
Lo guardamos en una constante y lo imprimimos por consola. */


//Otro ejemplo del operador ternario.

const numA = 2;
const numB = 5;
const option = '-';

const result = (option === '+') ? numA + numB : (option === '-') ? numA - numB : 'Tipo de operación incorrecto';

console.log(result);


//Explicación: 
/* Esto quiere decir: 
Si la condición entre paréntesis se cumple (option === '+'), haz numA + numB.
Si la condición entre paréntesis se cumple (option === '-'), haz numA - numB. 
Si ninguna de estas condiciones se cumple, haz 'Tipo de operación incorrecto.' */




