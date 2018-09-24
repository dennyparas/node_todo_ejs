const express = require('express')
const router = express.Router()

const moment = require('moment')
const Todo = require('./../models/todo')

// Index route
router.get('/', async (req, res) => {
  const todos = await Todo.find({})
  if (!todos) {
    return res.sendStatus(200).send('Error retrieving todos')
  }
  const incompleteTodos = todos.filter((todo) => {
    return todo.completed === false
  })
  const completedTodos = todos.filter((todo) => {
    return todo.completed === true
  })

  res.render('index', { incompleteTodos, completedTodos, moment })
})

module.exports = router
