module.exports = function (app, db) {
  app.post('/posts', (req, res) => {
    console.log(req.body)
    res.send('Hello')
  })
}
