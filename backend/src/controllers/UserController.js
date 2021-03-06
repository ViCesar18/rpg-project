const connection = require('../database/connection')
const sha256 = require('crypto-js/sha256')

module.exports = {
    async create(request, response) {
        const { username, password } = request.body

        const hPassword = sha256(password).toString()

        const [ user_id ] = await connection('users').insert({
            username,
            password: hPassword
        })

        return response.json({ user_id })
    },

    async index(request, response) {
        const users = await connection('users').select('*')

        return response.json(users)
    }
}