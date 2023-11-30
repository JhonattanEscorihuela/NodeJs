let fs = require('node:fs');

let text = fs.readFileSync('./archivo.txt', 'utf-8');

console.log(text);