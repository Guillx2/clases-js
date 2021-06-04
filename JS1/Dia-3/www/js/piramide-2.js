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
// EXPLICACIÓN EN LA GRABACIÓN DEL 26/10/2020. MINUTO 1:08:00 

 'use strict'

 // Contenido de la línea.
 let piso = '';

 // Número de líneas de la figura.
 let altura = 4;


// Esto indica que ponga una línea hasta que i sea menor que 4.
for (let i = 0; i < altura; i++) {

    
    // Esto indica que, en la primera repetición i es = a 0. 4 - 0 = 4, 
    // pero no tenemos 4 espacios en la primera línea, tenemos 3. Por eso ponemos -1.
    /* Primera repetición del bucle: espacios = 4-0-1=3. Espacios = 3 
       Segunda repetición: espacios = 4-1-1=2. Espacios=2
       Tercera repetición: espacios = 4-2-1=1. Espacios=1
       Cuarta repetición: espacios = 4-3-1=0. Espacios=0
    */
        for (let espacios = altura - i - 1; espacios > 0; espacios--) {
            piso += ' '; // esto indica que se sume un espacio en cada rvariable piso
            }
        
        for (let asterisco = i + 1; asterisco > 0; asterisco--)  {
            piso += '*';
        } 
    

        console.log(piso);
        piso = '';
    }


  /*   EXPLICACIÓN:

    Primer "for": entramos en el primer bucle. i vale 0. Mientras i sea menos que
    4, sumamos 1 a i.
        -Primera repetición: i=0 (es menor que 4). Sumamos 1. 
        -Segunda repetición: i=1 (sigue siendo menor que 4). Sumamos 1 
        -Tercera repetición: i=2 (sigue siendo menor que 4). Sumamos 1 
        -Cuarta repetición: i=3 (sigue siendo menor que 4 pero el siguiente 
            sería 4 y 4 no es menor que cuatro). Fin del bucle. 
            Con esto hemos indicado los cuatro "pisos" de la figura.
            
    Segundo "for": entramos en el segundo bucle. Espacios es igual a 4-0-1. Mientras 
    espacios sea mayor que 0, restamos un espacio.
            -Primera repetición: espacios=4-0-1 (3). Añadimos tres espacios en la primera línea.
            -Segunda repetición: espacios=4-1-1 (2). Añadimos 2 espacios en la segunda línea.
            -Tercera repetición: espacios=4-2-1 (1). Añadimos 1 espacio en la tercera línea.
            -Cuarta repetición: espacios=4-3-1 (0). Añadimos 0 espacios en la cuarta línea. Fin del bucle.
    
    Tercer "for": entramos en el tercer bucle. Asterisco es igual a 0+1. Mientras asterico sea mayor
    que 0, restamos 1.
            -Primera repetición: asterisco=0+1 (1). Esto se suma a los espacios de la primera línea (3)
                3 espacios + 1 asterisco
            -Segunda repetición: asterisco=1+1 (2). Se suma a los espacios de la segunda línea (2)
                2 espacios + 2 asterisco
            -Tercera repetición: asterisco=2+1 (3). Se suma a los espacios de la tercera línea (1)
                1 espacio + 3 asteriscos
            -Cuarta repetición: asterisco=3+1 (4). Se suma a los espacios de la cuarta línea (0)
                0 espacios + 4 asteriscos
            */

/* 
Con el primer bucle indicamos el número de líneas que ocupa la figura (4) y con "piso" indicamos 
el contenido inicial de las líneas (vacías, de momento) (pero hay que indicar algun contenido).
Para llenar de contenido las líneas usamos los otros bucles:
-Bucle espacios:
    Entramos en el bucle. Espacios es igual a altura - i - 1 (4-0-1=3). Añade 3 espacios. Después 
-Bucle asterisco:
    Entramos en la segunda parte del bucle. Asterisco es igual a i + 1 (0+1=1). Añade 1 asterisco.
    Ya tenemos 3 espacios y un asterisco en la primera línea. 

    El console.log imprime esta primera línea y el último "piso=''" limpia el bucle para volver a iniciarlo.
    Repetimos el proceso hasta que se cumpla el criterio del bucle (i < altura, espacios > 0 etc.) 
*/


/* Otra solución con el método "repeat":

// Declaramos la variable altura (número de líneas):
    const altura = 4;

for (let i = 0; i < altura; i++) {
    const spaces = altura - i - 1;
    const asterisco = i + 1;
    
    const floor =' '.repeat(spaces) + '*'.repeat(asterisco);

    console.log(floor);
} */