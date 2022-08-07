const express = require('express')
const cors = require('cors')

const upload = require('./upload')

const server = express()
const port = 8100;

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

server.use(cors(corsOptions))

server.post('/upload', upload)

server.get('/entities/', (req, res) => {
    res.json([
        {
          "id": "123",
          "name": "entity 123",
          "code": "entity-123",
          "size": "small"
        }
      ])
})

server.post('/entity/', (req, res) => {
    console.log('req: ', req);
    console.log('req.body: ', req.body);
    console.log('req.query: ', req.query);
    console.log('req.params: ', req.params);
    res.json({})
})
server.listen(port, () => {
    console.log(`Server started at port http://localhost:${port}`)
})