const {app, io, server} = require('./app')
const dotenv = require('dotenv');

//Config
dotenv.config({path: 'config/config.env'})

require('./sockets/socket');

const server1 = server.listen(process.env.PORT, ()=>{
    console.log(`Server inicia en el PUERTO: ${process.env.PORT} en ${process.env.NODE_ENV} mode.`)
})