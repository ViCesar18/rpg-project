const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors()) //Segurança e acesso

module.exports = app