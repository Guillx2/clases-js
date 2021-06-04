/* EJERCICIO PIRÁMIDE 2

Utiliza el bucle "for" para crear la siguiente figura con asteriscos. Debe existir una 
variable que permita modificar la altura de la pirámide. Para  el ejemplo expuesto a 
continuación se ha tomado como referencia una altura de 4:

    Figura 2:

    *
   **
  ***
 ****  

 */ 

 'use strict'

 // Contenido de la línea
 let floor = '';

 // Número de líneas de la figura 
 const height = 4; 

 for (let i = 0; i < height; i++) {
        // Espacios
        for (let spaces = height - i - 1; spaces > 0; spaces--) {
            floor += ' ';
        }

        // Asteriscos 
        for (let asterisk = i + 1; asterisk > 0; asterisk--) {
            floor += '*';
        }

        console.log(floor);
        floor = '';
 }
 