function sumar(s1, s2){
    if(typeof(s1)!=='number'){
        throw new Error('s1 no es un número');//Crea y lanza el error
    }
    return s1+s2;
}

try {
    let resultado = sumar('a',2);//Puede generar un error
    console.log(resultado);//Sólo si no ha habido error
} catch (fallo) {
    console.log('Tratando el error...');//Sólo si hay error
    console.log('catch:', fallo);//Sólo si hay error
} finally {
    console.log("Siempre se ejecuta");//Siempre
}
