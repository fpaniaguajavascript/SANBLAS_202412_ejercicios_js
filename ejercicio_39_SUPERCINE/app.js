//const URL='https://fpaniaguajavascript.github.io/movies-250.json';
let URL = 'http://www.omdbapi.com/?apikey=';

let peliculas;
let peliculasFiltradas;

function processMovie(data) {
    peliculas = data.Search;
    peliculasFiltradas = Array.from(peliculas);//Crea un nuevo array
    //generarDesplegableGenero(peliculas);
    peliculas.forEach(pelicula => {
        generateCard(pelicula);
    });
}

function generateCard(pelicula){
    //0. Cambiamos el contador
    document.querySelector("#contador").textContent=peliculasFiltradas.length;

    //1. Crear la tarjeta
    const nuevaCard = document.createElement("div");//Crea un elemento de tipo div
    nuevaCard.setAttribute("class","card");
    
    //2. Crear la imagen
    const nuevaImg = document.createElement("img");
    nuevaImg.setAttribute("src", pelicula.Poster);
    nuevaImg.setAttribute("alt", `Póster de la película ${pelicula.Title}`);
    nuevaCard.appendChild(nuevaImg);
    
    //3. Crear el contenido de la tarjeta
    const nuevoContenido = document.createElement("div");
    nuevoContenido.setAttribute("class","card-content");
    nuevaCard.appendChild(nuevoContenido);
    
    //4. Crear el h3 del título <h3>El Padrino</h3>
    const nuevoTitulo = document.createElement("h3");
    nuevoTitulo.textContent = pelicula.Title;
    nuevoContenido.appendChild(nuevoTitulo);
    
    //5. Año
    //<p><strong>Año:</strong> 1972</p>
    const nuevoParrafoAnyo = document.createElement("p");
    const nuevaNegritaAnyo = document.createElement("strong");
    nuevoParrafoAnyo.appendChild(nuevaNegritaAnyo);
    nuevaNegritaAnyo.textContent = "Año: ";
    nuevoContenido.appendChild(nuevoParrafoAnyo);
    const textoAnyo = document.createTextNode(pelicula.Year)
    nuevoParrafoAnyo.appendChild(textoAnyo);
    
    /*
    //6. Género
    //<p><span class="genre">Género:</span> Drama, Crimen</p>
    const nuevoParrafoGenero = document.createElement("p");
    const nuevoSpanGenero = document.createElement("span");
    nuevoSpanGenero.setAttribute("class","genre");
    nuevoSpanGenero.textContent = "Género: ";
    nuevoParrafoGenero.appendChild(nuevoSpanGenero);
    nuevoParrafoGenero.appendChild(document.createTextNode(pelicula.Genre));
    nuevoContenido.appendChild(nuevoParrafoGenero);
    */
    //Último paso: Agregar al contenedor la ficha recién creada
    document.querySelector("#container").appendChild(nuevaCard);//Agregamos el div al contenedor
}

function generarDesplegableGenero(peliculas){
    //Extraemos los géneros del fichero json 
    let setGeneros = new Set();
    peliculas.forEach(pelicula=>{
        let generos = pelicula.Genre.split(',').map(genero=>genero.trim());
        generos.forEach(genero=>setGeneros.add(genero));
    });
    //<option value="drama">Drama</option>
    let arrayGeneros = Array.from(setGeneros);
    arrayGeneros.sort().forEach(genero=>{
        let generoOption = document.createElement("option");
        generoOption.setAttribute("value",genero.toLowerCase());
        generoOption.textContent=genero;
        document.querySelector("#s-genero").appendChild(generoOption);
    });
}

function clearCards(){
    //document.querySelector("#container").innerHTML="";//Chapuza
    document.querySelectorAll(".card").forEach(card=>card.remove());//Elegante
}

