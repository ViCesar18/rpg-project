const express = require('express')

const Validate = require('./utils/validate')

const UserController = require('./controllers/UserController')
const SessionController = require('./controllers/SessionController')
const SheetController = require('./controllers/SheetController')
const SpellController = require('./controllers/SpellController')

const routes = express.Router()

//Usuários
routes.get('/user/index-users', UserController.index)

routes.post('/user/create-user', Validate.user(), UserController.create)

routes.post('/login', Validate.user(), SessionController.create)

//Fichas
routes.get('/sheet/index-sheets', SheetController.index)

routes.post('/sheet/create-sheet', SheetController.create)

routes.delete('/sheet/delete-sheet/:sheet_id', SheetController.delete)

//Magias
routes.get('/spells/index-spells', SpellController.index)

routes.get('/sheet/:sheet_id/index-spells', SpellController.index_per_sheet)

routes.post('/sheet/:sheet_id/create-spell', Validate.spell(), SpellController.create)

routes.delete('/sheet/:sheet_id/delete-spell/:spell_id', SpellController.delete)

module.exports = routes