let fs = require('node:fs/promises');
const path = require('node:path');
let pc = require('picocolors')

let folder = process.argv[2] ?? '.'

async function ls(folder) {
    let files;

    try {
        files = await fs.readdir(folder)
    } catch (error) {
        console.error(pc.red(`❌ No se pudo leer el directorio: ${folder}`));
        process.exit(1);
    }



    let filePromises = files.map(async file => {
        let filePath = path.join(folder, file);
        let stats;
        try {
            stats = await fs.stat(filePath) // Status - informacion del archivo
        } catch (error) {
            console.error(`No se pudo leer el directorio: ${filePath}`);
            process.exit(1);
        }

        let isDirectory = stats.isDirectory();
        let fileType = isDirectory ? 'd' : 'f';  // Tipo de archivo
        let fileSize = stats.size; // Tamano el archivo
        let fileModified = stats.mtime.toLocaleString(); // Cuando se modifico el archivo

        return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.toString().padStart(10))} ${pc.yellow(fileModified)}`
    })


    let filesInfo = await Promise.all(filePromises);

    filesInfo.forEach(filesInfo => console.log(filesInfo));
}

ls(folder);

