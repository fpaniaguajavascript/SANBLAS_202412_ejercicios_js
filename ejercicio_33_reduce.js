let ingrediente1 = {
    nombre: 'Patata',
    cantidad: 200
}
let ingrediente2 = {
    nombre: 'Cebolla',
    cantidad: 150
}
let ingrediente3 = {
    nombre: 'Huevo',
    cantidad: 100
}
let ingredientes = [ingrediente1, ingrediente2, ingrediente3];

let total = ingredientes.reduce((cantidades, ingredienteActual) =>
    cantidades + ingredienteActual.cantidad, 0);
console.log(total);

let totalString = ingredientes.reduce((texto, ingredienteActual) =>
    texto += ingredienteActual.nombre, "");
console.log(totalString);


let arrayIngredientes = ingredientes.reduce((losIngredientes, ingredienteActual) => {
    losIngredientes.push(ingredienteActual.nombre);
    return losIngredientes;
}, new Array());
console.log(arrayIngredientes);