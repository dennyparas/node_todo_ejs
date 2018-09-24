const express = require('express')
const router = express.Router()

const Todo = require('./../models/todo')
const ObjectID = require('mongodb').ObjectID

// Delete todo route
router.delete('/:id', async (req, res) => {
  const query = { _id: ObjectID(req.params.id) }
  const todo = await Todo.findOneAndDelete(query)
  if (!todo) {
    return res.sendStatus(404).send('the todo with a given ID is not found')
  }
  console.log(`Todo ID ${query._id} is remove`)
  res.sendStatus(200)
})

// todo route by id
router.get('/:id', async (req, res) => {
  const query = { _id: ObjectID(req.params.id) }
  const todo = await Todo.findOne(query)
  if (!todo) {
    return res.sendStatus(404).send('the todo with a given ID is not found')
  }
  res.render('todo_single', { todo })
})

// todo update route
router.post('/:id', async (req, res) => {
  if (req.body.title === '') {
    return res.send('Please add a  todo title')
  }

  const query = { _id: ObjectID(req.params.id) }
  const todo = await Todo.findOneAndUpdate(query, {
    $set: {
      title: req.body.title,
      body: req.body.body,
      completed: !!req.body.completed,
      completed_at: req.body.completed ? new Date().getTime() : null
    }
  },
  { new: true }
  )
  if (!todo) {
    return res.sendStatus(404).send('the todo with a given ID is not found')
  }
  res.redirect('/')
})

// Post todo route
router.post('/', async (req, res) => {
  if (req.body.title === '') {
    return res.send('Please add a  todo title')
  }
  const todo = new Todo({
    title: req.body.title,
    body: req.body.body
  })

  await todo.save()
  res.redirect('/')
})

module.exports = router
