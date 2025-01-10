function sumar(numero1, numero2) {
    //Verificación de tipos
    console.log(numero1);
    const noEsNumber = typeof numero1 !== 'number' || typeof numero2 !== 'number';
    const esNaN = isNaN(numero1) || isNaN(numero2);
    if (noEsNumber || esNaN) {
        throw new Error('Ambos parámetros deben ser números');
    }
    const resultado = numero1 + numero2;
    return resultado;
}

function restar(numero1, numero2) {
    const resultado = numero1 - numero2;
    return resultado;
}