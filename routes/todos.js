const express = require('express')
const router = express.Router()

const Todo = require('./../models/todo')

router.post('/', async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    body: req.body.body
  })

  await todo.save()
  res.redirect('/')
})

module.exports = router
