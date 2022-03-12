require('dotenv').config({ path: '../.env' })
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

const app = express()
const listenPort = 8080

app.use(bodyParser.urlencoded({ extended: true }))
MongoClient.connect(process.env.MONGO_URL, (err, database) => {
  if (err) return console.error(err)
  const db = database.db('aBitComplex')
  require('./app/routes')(app, db)
})
app.listen(listenPort, () => console.log(`We are live on ${listenPort}.`))
