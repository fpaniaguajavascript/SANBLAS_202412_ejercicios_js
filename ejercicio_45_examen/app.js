const TIEMPO_RESPUESTA = 5;
const TIEMPO_PASO = 1000;
const NUMERO_PREGUNTAS = 3;
let preguntaActual = 1;
let bComenzar = document.getElementById('b-comenzar');

bComenzar.addEventListener('click', function() {
    //document.getElementById('div-portada').style.display = 'none';
    document.getElementById('div-portada').style.left = '-100%';
    document.getElementById('div-pregunta-1').style.display = 'block';
    iniciarCronometro();
});


function mostrarPregunta(numero) {
    document.getElementById('div-pregunta-'+numero).style.display = 'none';
    document.getElementById('div-pregunta-'+(numero+1)).style.display = 'block';
    iniciarCronometro();
    preguntaActual++;
}

function iniciarCronometro() {
    let tiempo = TIEMPO_RESPUESTA;
    let cronometro = setInterval(function() {
        tiempo--;
        document.getElementById('s-tiempo').innerText = tiempo;
        if (tiempo==0){
            clearInterval(cronometro);
            if (preguntaActual<NUMERO_PREGUNTAS) {
                mostrarPregunta(preguntaActual);
            } else {
                console.error('FIN de juego');
            }
        }
    }, TIEMPO_PASO);
}