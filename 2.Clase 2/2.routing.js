const http = require('node:http')

const processRequest = () => {

}

const server = http.createServer(processRequest)

server.listen(1234, () => {
    console.log('server listening on port http://localhost:1234');
})