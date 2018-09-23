const express = require('express')
const router = express.Router()

const Todo = require('./../models/todo')

// Index route
router.get('/', async (req, res) => {
  const todos = await Todo.find({})
  res.render('index', { todos })
})

module.exports = router
