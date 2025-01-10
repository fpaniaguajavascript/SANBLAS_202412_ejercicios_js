class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Rectangulo {
    constructor(base, altura, posicion) {
        this.base = base;
        this.altura = altura;
        this.posicion = posicion;
    }

    calcularArea() {
        return this.base * this.altura;
    }

}

let punto1 = new Punto(2, 3);
let rectangulo1 = new Rectangulo(10, 5, punto1);
console.log(rectangulo1.calcularArea());