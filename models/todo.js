const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date_added: {
    type: Number,
    default: new Date().getTime()
  },
  completed: {
    type: Boolean,
    default: false
  },
  completed_at: {
    type: Number,
    default: null
  }
})

module.exports = mongoose.model('Todo', todoSchema)
