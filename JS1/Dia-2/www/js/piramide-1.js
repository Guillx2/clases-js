/* EJERCICIO PIRÁMIDE

    Utiliza el bucle "for" para crear las siguientes figuras con asteriscos (*). Debe esxistir una
    variable que permita modificar la altura (número de líneas) de la pirámide. Para el ejemplo expuesto a 
    continuación se ha tomado como referencia una altura de 4:

        -Figura 1:

        *
        **
        ***
        ****
*/

// Explicación de esto en la grabación del 24/10/2020 minuto 3:55:00.

// myText += '*' es igual a myText = myText + '*' 

            // Hay que hacer esto pero con un bucle "for":

/* let myText = '';

myText = myText + '*';

console.log(myText);

myText = myText + '*';

console.log(myText);

myText = myText + '*'

console.log(myText);

myText = myText + '*'

console.log(myText);  */


/* let piso = '';

let altura = 4;

for (let i = 0; i < altura; i++) {
    piso += '*';
    console.log(piso);
}
 */



//Solución de David

//Declaramos un string vacío
let floor = '';

//Altura de la pirámide
let height = 4;

//Bucle for que se repetirá tantas veces como el valor que le pase a height.
// Este bucle se encarga de imprimir cada línea de la pirámide (floor)
// Indicamos que i se incremente en 1 hasta que llegue a (en este caso) 4. 
for (let i = 0; i < height; i++){
    
    // Introducimos un asterisco en la variable "floor"

    /*  1 asterisco por cada repetición del bucle. Como el bucle termina cuando llegue
      a menos de 4 (3) y empieza en 0, se repetirá 4 veces (0, 1, 2, 3) y añadirá 
      un asterisco en cada repetición: */
      floor += '*'; // esto añade un asterisco a floor mientras dura el bucle.

    //Imprimimos el contenido de la variable "floor"
    console.log(floor);
}


/* El funcionamiento es el siguiente:
El bucle (i = 0) crea una línea de código y la imprime con un asterisco
que le indicamos con el "floor += *",
Cuando acaba, reinicia el bucle (i = 1) e imprime otra línea con otro asterisco (**)
Se repite hasta que i sea menor que 4 y va acumulando un asterisco de cada vez
hasta que llegue a 4 y se acabe el bucle. */