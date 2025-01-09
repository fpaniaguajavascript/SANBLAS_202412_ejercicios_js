const TIEMPO_RESPUESTA = 10;
const TIEMPO_PASO = 1000;
const NUMERO_PREGUNTAS = 3;
let preguntaActual = 1;
let numeroAciertos = 0;
let bComenzar = document.getElementById('b-comenzar');
let cronometro; //Contiene el temporizador

bComenzar.addEventListener('click', function() {
    //document.getElementById('div-portada').style.display = 'none';
    document.getElementById('div-portada').style.left = '-100%';
    document.getElementById('div-pregunta-1').style.display = 'block';
    iniciarCronometro();
});

function mostrarResultados(){
    document.querySelector("#div-info").style.display = 'none';
    document.getElementById('div-pregunta-'+preguntaActual).style.display = 'none';
    document.getElementById('div-resultados').style.display = 'block';
    document.getElementById('aciertos').innerText = numeroAciertos;
    document.querySelector('#fallos').innerHTML = NUMERO_PREGUNTAS - numeroAciertos;
}

function mostrarPregunta(numero) {
    let respuestas = document.getElementsByName('pregunta-'+numero);
    respuestas.forEach(respuesta => {
        if ((respuesta.checked) && (respuesta.value=='true')) {
            numeroAciertos++;
        }
    });

    if (numero==NUMERO_PREGUNTAS) {
        mostrarResultados();
    } else {
        document.getElementById('div-pregunta-'+numero).style.display = 'none';
        document.getElementById('div-pregunta-'+(numero+1)).style.display = 'block';
        iniciarCronometro();
        preguntaActual++;
    }
}

function iniciarCronometro() {
    let tiempo = TIEMPO_RESPUESTA;
    document.getElementById('s-tiempo').innerText = tiempo;
    cronometro = setInterval(function() {
        tiempo--;
        document.getElementById('s-tiempo').innerText = tiempo;
        if (tiempo==0){
            clearInterval(cronometro);
            if (preguntaActual<NUMERO_PREGUNTAS) {
                mostrarPregunta(preguntaActual);
            } else {
                mostrarResultados();
            }
        }
    }, TIEMPO_PASO);
}

//Asignar evento click a todos los botones
let botones = Array.from(document.getElementsByClassName('boton-siguiente'));
botones.forEach(boton => boton.addEventListener('click', ()=>{
    clearInterval(cronometro);
    mostrarPregunta(preguntaActual);
}));