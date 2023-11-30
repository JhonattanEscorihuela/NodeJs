let fs = require('node:fs/promises');


console.log('Leyendo el primer archivo...');
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('primer text:', text);
    })

console.log('----> Hacer cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('segundo text:', text);
    })