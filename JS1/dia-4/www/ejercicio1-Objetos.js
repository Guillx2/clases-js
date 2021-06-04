/* #################
*  ## Ejercicio 1 ##
*  #################
*
* - Crea el objeto coche y asígnale las propiedades modelo, marca y color.
* 
* - Muestra el objeto por medio de un "console.log".
* 
* - Modifica el valor de la propiedad color y agrega la propiedad año de 
*   matriculación.
* 
* - Utiliza un "confirm" para mostrar por consola las propiedades, o los
*   valores. Si la persona acepta el "confirm" se mostrarán las propiedades,
*   de lo contrario, se mostrarán los valores.
* 
*/

'use strict';

let Coche = {
    marca: 'Opel',
    modelo: 'Corsa',
    color: 'azul'
}

console.log(Coche);

// Cambiamos el color 
Coche.color = 'gris';
// Añadimos la propiedad Año de Matriculación
Coche.añoMatriculacion = '2003';

console.log(Coche);

// Ahora usamos un if...else para la última parte del ejercicio.
if (confirm('Para mostrar las propiedades, acepta, de lo contrario se mostrarán los valores.')) {
    console.log(Object.keys(Coche))
} else {
    console.log(Object.values(Coche));
}