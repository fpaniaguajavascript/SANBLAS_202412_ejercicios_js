function enredar() {
    console.log('Enredando...');
    for(let i = 0; i < 1000; i++) {
        console.log('Enredando...');
    }
}

let inicio = Date.now();
enredar();
let fin = Date.now();
let tiempo = fin - inicio;
console.log('Inicio:', inicio);
console.log('Fin:', fin);
console.log('Tiempo de enredado:', tiempo);


const date = new Date();
const options = { timeZone: "Europe/Lisbon" };
console.log(date.toLocaleString("es", options));
console.log(date.toLocaleDateString("es", options));
console.log(date.toLocaleTimeString("es", options));