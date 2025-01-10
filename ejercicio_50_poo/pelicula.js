class Pelicula {
    constructor(id, titulo, director, anio, genero, calificacion) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.genero = genero;
        this.calificacion = calificacion;
    }
    mostrar(){
        console.log(`ID: ${this.id}`);
    }
}

let pelicula1 = new Pelicula(1, "Titanic", "James Cameron", 1997, "Romance", 10);
pelicula1.genero = "Drama";
pelicula1.mostrar();