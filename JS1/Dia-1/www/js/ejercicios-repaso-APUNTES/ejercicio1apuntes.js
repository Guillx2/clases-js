/*
EJERCICIO 1.
Modifica el valor de la variable esAdulto en función del contenido de la variable edad.
 Muestra por consola el mensaje true o false según corresponda. 
 Tomaremos como referencia la mayoría de edad en España: 18 años. 
 */
'use strict'; 

let esAdulto = true;
let edad = 19; 

 if (edad >= 18) {
     esAdulto = true;
 } else {
     esAdulto = false;
 }
 console.log(esAdulto);
