const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const db = require('./config/db')

const app = express()
const listenPort = 8080

app.use(bodyParser.urlencoded({ extended: true }))
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  const deebs = database.db('aBitComplex')
  require('./app/routes')(app, deebs)
})
app.listen(listenPort, () => console.log(`We are live on ${listenPort}.`))
