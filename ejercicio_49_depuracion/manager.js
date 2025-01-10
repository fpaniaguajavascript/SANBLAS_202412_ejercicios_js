function sumarNumeros(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    try {
        let resultado = sumar(num1, num2);
        document.getElementById('resultado').innerHTML = resultado;
    } catch (error) {
        document.getElementById('resultado').innerHTML = error;
    }
    
}
function restarNumeros(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let resultado = restar(num1, num2);
    document.getElementById('resultado').innerHTML = resultado;
}