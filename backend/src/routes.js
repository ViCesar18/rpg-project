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

routes.get('/sheet/user-sheets', Validate.indexSheets(), SheetController.index_per_user)

routes.post('/sheet/create-sheet', Validate.createSheet(), SheetController.create)

routes.delete('/sheet/delete-sheet/:sheet_id', Validate.deleteSheet(), SheetController.delete)

routes.put('/sheet/update-sheet', SheetController.update)

//Magias
routes.get('/spell/index-spells', SpellController.index)

routes.get('/sheet/:sheet_id/index-spells', Validate.indexSpells(), SpellController.index_per_sheet)

routes.post('/sheet/:sheet_id/create-spell', Validate.createSpell(), SpellController.create)

routes.delete('/sheet/:sheet_id/delete-spell/:spell_id', Validate.deleteSpell(), SpellController.delete)

routes.put('/sheet/:sheet_id/update-spell', SpellController.update)

module.exports = routes