const express = require('express')
const app = express()

const PORT = process.PORT ?? 1234

// Este es el MidlleWare
app.use((req, res, next) => {
    console.log('Mi primer middleware')
    // trackear la request a la base de datos
    // revisar si el usuario tiene cookies
    next()
})

app.get('/', (req, res) => {
    res.status(201).send('<h1>Mi pagina Web</h1>')
})

app.post('/pokemon', (req, res) => {
    let body = ''

    //escuchar el evento data

})
// la ultima a la que va a llegar
app.use((req, res) => {
    res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
})