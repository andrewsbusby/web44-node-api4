require('dotenv').config();

const server = require('./server');
const {PORT} = require('./config');



server.listen(PORT, () => {
    console.log(`server running PORT: ${PORT}`)
})