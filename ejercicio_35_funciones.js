function sumar(s1, s2=4) {//Los que tienen valor por defecto, al final
    const resultado = s1 + s2;
    return resultado;
}

let r = sumar(8);
console.log(r);//12

//PARAMETROS REST
function multiplicar(...numeros){//rest params. numeros es un array
    let valor = numeros.reduce((total, numero)=> total*numero, 1);
    return valor;
}

let m = multiplicar(3, 4, 8, 10);
console.log(m);//960

//SINTAXIS SPREED
function sumar3(s1, s2, s3){
    return s1+s2+s3;
}

let sumandos = [1, 8, 10];
let resultadoSuma = sumar3(...sumandos);//...sumandos 'extiende' el array como una sucesión de elementos separados por coma
console.log(resultadoSuma);