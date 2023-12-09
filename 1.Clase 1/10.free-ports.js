let net = require('node:net');

function findAvaiblePort(desirePort) {
    return new Promise((resolve, reject) => {
        let server = net.createServer();

        server.listen(desirePort, () => {
            let { port } = server.address();
            server.close(() => {
                resolve(port);
            })
        })
        server.on('error', (error) => {
            if (error.code === 'EADDRINUSE') {
                findAvaiblePort(0)
                    .then(port => resolve(port))
            } else {
                reject(error)
            }
        })
    })
}


module.exports = { findAvaiblePort }