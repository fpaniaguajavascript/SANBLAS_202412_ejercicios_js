//IF
let edad = 45;
if (edad<18) {
    //Código
} else if (edad>50) { //opcional
    //Código
} else { //opcional
    //Código si no se cumple ninguna condición
}

//FOR
for (let i=0;i<10;i++) {
    //let i=0 -> Antes de entrar al bucle
    //i<10 -> Condición que se tiene que cumplir para hacer la siguiente iteracción
    //i++ -> Acción posterior a la iteracción

    //Código
}

//WHILE
const limite = 100;
let actual = 0;
while (actual<limite){//Mientras se cumple la condición, se ejecuta el bloque de código
    actual+=10;
    console.log(actual);//10,20,30,40,50,60,70,80,90,100
}

//DO-WHILE
actual = 0;
do {
    actual+=10;
    console.log(actual);//10,20,30...,80,90,100
} while (actual<limite);

//SWITCH
let opcion = 0;
switch (opcion) {
    case 0:
        console.log(0);
        break;//Necesario para que no se meta por case 1
    case 1:
        console.log(1);
        break;//Necesario para que no se meta por case 2
    case 2:
        console.log(2);
        break;//Necesario para que no se meta por default
    default://Opcional
        console.log("No sé");
}

//BREAK
let personas = [{nombre:'P1',edad:15},{nombre:'P2',edad:44},{nombre:'P3',edad:55}];
for (let persona of personas) {
    console.log("Evaluando",persona.nombre);
    if (persona.edad>18){
        console.log("Encontrado");
        break;//Finaliza el bucle
    }
}

//CONTINUE (es mayor de 18 y tiene un 3 en el nombre)
for (let persona of personas) {
    console.log("Evaluando",persona.nombre);
    if (persona.edad>18){
        console.log("Tiene la edad correcta");
    } else {
        console.log("No tiene la edad correcta");
        continue;//Aborta la iteracción actual y pasa a la siguiente
    }
    if (persona.nombre.includes('3')) {
        console.log("Tiene el nombre correcto");
    } else {
        console.log("No tiene el nombre correcto");
    }
}