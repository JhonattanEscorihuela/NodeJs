let fs = require('node:fs');

let stats = fs.statSync('./archivo.txt');


console.log(
    stats.isFile(), // si es un fichero,
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbolico
    stats.size, // tamano en bytes
);