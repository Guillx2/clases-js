/* ########################
 * ## Desactiva la bomba ##
 * ########################
 *
 * 
 * Llegó el momento de poner en práctica todo lo aprendido hasta ahora para...
 * ¡¡DESACTIVAR UNA BOMBA!! Tranquilos, no tenemos que ser expertos en explosivos.
 * Se trata de crear un juego en el que damos al usuario 5 intentos para tratar de
 * desactivar la bomba. 
 * 
 * Estos son los pasos que debes seguir para tratar de conseguir el objetivo:
 * 
 *  - Generar un nº aleatorio del 1 al 10. Existe una función en JavaScript que 
 *    nos permite generar un nº al azar, ¿por qué no investigas un poco?
 * 
 *  - Una vez hayamos generado el nº de desactivación daremos al usuario un total
 *    de 5 intentos para tratar de averiguar en nº en cuestión. 
 * 
 *  - Si acierta detenemos el bucle (con un break) y mostramos un mensaje que indica 
 *    que la bomba ha sido desactivada. De lo contrario indicamos que la bomba ha explotado.
*/

'use strict';

// Generamos un número aleatorio del 0 coma algo al 9 coma algo.
let password = Math.random() * 10;

// Redondeamos ese número al alza.
password = Math.ceil(password);

// Damos al usuario 5 intentos.
for (let i = 0; i < 5; i++) {

    
    //Permitimos al usuario introducir un número. Mostramos el número de intentos que llevamos.
    const userNum = parseInt(prompt(`Intento ${i + 1}. Inserte un número entre 1 y 9:`));

    // Comprobamos si el número del usuario es igual a la contraseña.
    if (userNum === password) {
        alert('Vives un día más');
        break;
    }
    if (i === 4){
        alert('¡BOOOOOOM!');
    }
}

