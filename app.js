const express = require('express')
require('express-async-errors')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.Promise = Promise

mongoose.connect(process.env.MONGODB_ACCOUNT)
let db = mongoose.connection

// Check connection
db.once('open', () => {
  console.log('Connected to Database')
})

// Check DB for errors
db.on('error', (err) => {
  console.log(err)
})

// Init app
const app = express()

const indexRoute = require('./routes/index')
const todosRoute = require('./routes/todos')

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// View setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', indexRoute)
app.use('/todos', todosRoute)

// Init server
const port = 3000
app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
