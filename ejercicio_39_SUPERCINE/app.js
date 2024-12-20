let URL = 'http://www.omdbapi.com/?apikey=';

let peliculas = [];
let peliculasFiltradas  = [];

function processMovie(data) {
    peliculas = data.Search;
    peliculasFiltradas = Array.from(peliculas);
    generarDesplegableTipo(peliculas);
    peliculas.forEach(pelicula => {
        generateCard(pelicula);
    });
}

/**
 * Recoge el retorno de la primera llamada, calcula el número de páginas
 * y hace tantas llamadas como páginas (-1, la primera que ya está leída)
 * @param {} data 
 */
function processMovies(data) {
    clearCards();
    let totalResults = data.totalResults;
    let totalPages = Math.ceil(totalResults/10);
    peliculas = data.Search;
    peliculasFiltradas = Array.from(peliculas);
    for (let i=2;i<totalPages;i++){
        let tituloBuscado = document.querySelector("#t-titulo-omdb").value;
        let apikey = document.querySelector("#t-apikey").value;
        let nuevaURL = `${URL}${apikey}&s=${tituloBuscado}&page=${i}`;
        doGetRequest(nuevaURL, appendMovies);
    }
}

/**
 * ¡Muy poco eficiente!
 * Cuando una búsqueda tiene múltiples páginas, cada página se trata en
 * esta función.
 * Para cada página limpia las tarjetas del documento, y crea de nuevo
 * todas las tarjetas, las que ya estaban y las nuevas.
 * 
 * @param {} data 
 */
function appendMovies(data){
    clearCards();
    peliculas = peliculas.concat(data.Search);
    peliculasFiltradas = Array.from(peliculas);
    generarDesplegableTipo(peliculas);
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

function generarDesplegableTipo(peliculas){
    //Extraemos los tipos del fichero json 
    let setTipos = new Set();
    peliculas.forEach(pelicula=>{
        setTipos.add(pelicula.Type);
    });
    //<option value="drama">Drama</option>
    let arrayTipos = Array.from(setTipos);
    arrayTipos.sort().forEach(tipo=>{
        let tipoOption = document.createElement("option");
        tipoOption.setAttribute("value",tipo.toLowerCase());
        //tipoOption.textContent=tipo;
        tipoOption.textContent=tipo.charAt(0).toUpperCase() + tipo.slice(1)
        document.querySelector("#s-tipo").appendChild(tipoOption);
    });
}

function clearCards(){
    //document.querySelector("#container").innerHTML="";//Chapuza
    document.querySelectorAll(".card").forEach(card=>card.remove());//Elegante
}

