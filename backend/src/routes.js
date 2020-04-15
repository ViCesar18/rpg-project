const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const UserController = require('./controllers/UserController')

const routes = express.Router()

routes.get('/index-users', UserController.index)

routes.post('/create-user', celebrate({
    [Segments.BODY]: Joi.object().keys({
        username: Joi.string().required().max(16),
        password: Joi.string().required().max(16)
    })
}), UserController.create)

module.exports = routes