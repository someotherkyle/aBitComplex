var ObjectID = require('mongodb').ObjectID
module.exports = function (app, db) {
  app.post('/posts', (req, res) => {
    const post = {
      text: req.body.body,
      title: req.body.title,
    }
    db.collection('posts')
      .insertOne(post)
      .then((resp) => res.send({ ...req, resp }))
      .catch((err) => res.send({ ...req, error: err }))
  })

  app.get('/posts/:id', (req, res) => {
    const details = {
      _id: new ObjectID(req.params.id),
    }
    db.collection('posts')
      .findOne(details)
      .then((resp) => res.send(resp))
      .catch((err) => res.send(err))
  })

  app.delete('/posts/:id', (req, res) => {
    const details = {
      _id: new ObjectID(req.params.id),
    }
    db.collection('posts')
      .remove(details)
      .then((resp) => res.send(resp))
      .catch((err) => res.send(err))
  })

  app.put('/posts/:id', (req, res) => {
    const details = {
      _id: new ObjectID(req.params.id),
    }
    const post = {
      title: req.params.title,
      body: req.params.body,
    }
    db.collection('posts')
      .update(details, post)
      .then((resp) => res.send(resp))
      .catch((err) => res.send(err))
  })
}
