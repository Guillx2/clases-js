'use strict'


 // Función que genera un número aleatorio entero (sin decimales) entre 1 y 9:
function generarNumAleatorio (maxNum = 10) {
    return Math.ceil(Math.random() * maxNum);
}
//Llamamos a la función anterior y almacenamos un número aleatorio:
const password = generarNumAleatorio(10);

//Función que da "x" intentos al usuario para desactivar la bomba.
//Esta función recibe como parámetros el número de intentos que queremos dar al usuario (5)
//y la contraseña de la bomba (número aleatorio generado en la función del principio):
function desactivarBomba(intentos, password) {
    for(let i = 0; i < intentos; i++) {

            const numeroInsertado = parseInt(prompt(`Intento ${i+1}. Inserte un número:`));
                if (numeroInsertado === password) {
                    return true;
                }   
            
         }
         return false;
    }

    //Llamamos a la función anterior y le digo que quiero 5 intentos y le paso la contraseña de la bomba:
    const result = desactivarBomba (5, password);

    if (result) {
        alert('Vives un día más.');
    } else {
        alert('¡¡¡¡¡BOOOOOOOOOOOOOM!!!!!');
    }

   
