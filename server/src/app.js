require('dotenv').config()
const express = require('express')
const session = require('express-session')
const app = express()
const cors = require('cors')
const PORT = process.env.LISTEN_PORT || 8080

app.use(cors({ origin: 'http://localhost:8081' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  session({
    secret: process.env.COOKIE_CODE,
    resave: true,
    saveUninitialized: true,
  })
)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

app.get('/', (_req, res) => {
  res.json({ message: 'here we go again' })
})

app.post('/', (req, resp) => {
  let username = req.body.username
  let password = req.body.username
  if (username && password) {
  } else {
    resp.send('Must provide username and password.')
  }
})
