'use strict'; 

//Vamos a transformar el ejercicio de los infectados en una función:


const infectados = [true, false, false, false, true, false, false, false, true];

const covid19 = (arrayDeInfectados) => {

    const copiaInfectados = [...arrayDeInfectados];

for (let i = 0; i < arrayDeInfectados.length; i++) {
    //Si el paciente está infectado...
    if (arrayDeInfectados[i]) {
        //Nos aseguramos de no insertar elementos a la izquierda del primer elemento del array:
        //Si i es mayor que 0..
        if (i > 0) {
            //Si la condición se cumple, infecto al paciente de su izquierda: 
            copiaInfectados[i - 1] = true;
        }
        //Nos aseguramos de no insertar elementos a la derecha del último elemento del array:
        //Si i es menor que la longitud del array -1...
        if (i < arrayDeInfectados.length - 1) {
            copiaInfectados[i + 1] = true;
        }
    }
}
    return copiaInfectados;

}
console.log(covid19(infectados));