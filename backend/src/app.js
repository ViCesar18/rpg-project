const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const { errors } = require('celebrate')

const app = express()

app.use(express.json())
app.use('/api', routes)
app.use(cors()) //Segurança e acesso
app.use(errors())

module.exports = app