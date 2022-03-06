const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

const app = express()
const listenPort = 8080
app.use(bodyParser.urlencoded({ extended: true }))
require('./app/routes')(app, {})
app.listen(listenPort, () => console.log(`We are live on ${listenPort}.`))
