/*
Crear la clase Vehiculo:
- Debe tener los atributos: nombre, color
- Debe tener el método: arrancar (muestra "Estoy arrancando")

Crear la clase Automovil que herede de Vehiculo:
- Debe tener los atributos: marca, modelo
- Debe tener el método: arrancar (muestra "Soy un automóvil y estoy arrancando")

Crear la clase Barco que herede de Vehiculo:
- Debe tener los atributos: eslora, manga
- Debe tener el método: arrancar (muestra "Soy un barco y estoy arrancando")

Crear una instancia de Automovil y otra de Barco.
Arrancar ambos.
Preguntar si el automóvil es una instancia de Vehiculo.
Preguntar si el automóvil es una instancia de Automovil.
Preguntar si el barco es una instancia de Vehiculo.
Preguntar si el automóvil es una instancia de Barco.
*/

class Vehiculo {
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }

    arrancar() {
        console.log('Estoy arrancando');
    }
}

class Automovil extends Vehiculo {
    constructor(nombre, color, marca, modelo) {
        super(nombre, color);
        this.marca = marca;
        this.modelo = modelo;
    }

    arrancar() {
        console.log('Soy un automóvil y estoy arrancando');
    }
}

class Barco extends Vehiculo {
    constructor(nombre, color, eslora, manga) {
        super(nombre, color);
        this.eslora = eslora;
        this.manga = manga;
    }

    arrancar() {
        //super.arrancar();//Llamar al método arrancar de la clase padre
        console.log('Soy un barco y estoy arrancando');
    }
}

const automovil = new Automovil('Ferrari', 'Rojo', 'Ferrari', 'F8 Tributo');
const barco = new Barco('Titanic', 'Blanco', 269, 28);

automovil.arrancar();
barco.arrancar();

console.log(automovil instanceof Vehiculo);//true
console.log(automovil instanceof Automovil);//true
console.log(barco instanceof Vehiculo);//true
console.log(barco instanceof Barco);//true
console.log(barco instanceof Automovil);//false