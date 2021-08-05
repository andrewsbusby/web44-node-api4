const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.get('/', (req, res, next) => {{
    res.send(`<h1>Welcome to my simple api</h1>`)
}})

server.use('*', (req, res, next) => {
    res.json({
        message: 'This is my simple api'
    })
})


module.exports = server;