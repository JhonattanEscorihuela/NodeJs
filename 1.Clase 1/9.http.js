let http = require('node:http');
let { findAvaiblePort } = require('./10.free-ports');


let desirePort = process.env.PORT ?? 3000

let server = http.createServer((req, res) => {
    console.log('request received');
    res.end('Hola Mundo!')
})

findAvaiblePort(desirePort)
    .then(port => {
        server.listen(port, () => {
            console.log(`server listening on port http://localhost:${port}`);
        })
    })

