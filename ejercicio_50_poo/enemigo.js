class Enemigo {
    constructor(x, y, velocidad, salud) {
        this.x = x;
        this.y = y;
        this.velocidad = velocidad;
        this.salud = salud;
    }

    atacar() {
        console.log("Atacando como un enemigo");
    }
}

class EnemigoMovil extends Enemigo {
    constructor(x, y, velocidad, salud, direccion) {
        super(x, y, velocidad, salud);
        this.direccion = direccion;
    }

    mover() {
        console.log("Moviendo como un enemigo movil");
    }
}

let enemigoMovil = new EnemigoMovil(10, 20, 5, 100, "derecha");