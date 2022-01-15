/*
 * app.js - a simple node-express webserver
 */

// for req.body
const bodyParser = require('body-parser')

// load express with a logger and the routes config
const express = require('express')
const logger = require('morgan')
const router = require('./router')

// configure express to read x-www-urlformencoded and json data
const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// serve static resources
app.use(express.static('public'))

// express router config in separate file
app.use('/', router)

// determine host and port and listen for requests
const addr = '0.0.0.0', port = 3000
app.listen(port, addr, () => {
    console.log(`Running dev server:`)
    console.log(`Listening on ${addr}:${port}`)
})
