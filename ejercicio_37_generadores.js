function* generadorAleatorios(magnitud){
    while(true){
        yield parseInt(Math.random()*magnitud);
    }
}

let generador = generadorAleatorios(100);
let valor;
while (valor = generador.next()){
    console.log(valor.value);
    if (valor.value==13) break;
}
