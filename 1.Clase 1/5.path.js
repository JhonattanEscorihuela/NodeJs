let path = require('node:path')

// unir rutas con path

// barra separadora de carpeta segun SO
console.log('Mi path:', path.sep);

// unir rutas con path.join
let filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);


let base = path.basename('/tmp/midu-secret-files/password.txt');
console.log(base);

let fileName = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(fileName);

let extension = path.extname('image.jpg');
console.log(extension);

