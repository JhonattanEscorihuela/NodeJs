let fs = require('node:fs');

fs.readdir('.', (error, files) => {
    if (error) {
        console.error('Error al leer el comentario:', error);
        return;
    }

    files.forEach(file => {
        console.log(file);
    })
})