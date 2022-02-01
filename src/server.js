const express = require('express')
const cors = require('cors')
const { join } = require('path')
const os = require('os')

const app = express()
const PORT = process.env.PORT || 4004
const host = os.networkInterfaces().en0[1].address || 'localhost'

app.use( cors() )
app.use( express.json() )
app.use( '/images', express.static( join( process.cwd( ), 'src', 'images' ) ) )



app.listen( PORT, console.log( 'http://' + host + ':' + PORT ))
// app.listen( PORT, console.log( 'http://' + 'localhost' + ':' + PORT ))