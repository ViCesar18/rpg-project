const connection = require('../database/connection')
const sha256 = require('crypto-js/sha256')

module.exports = {
    async create(request, response) {
        const { username, password } = request.body

        const hPassword = sha256(password).toString()

        const user_id = await connection('users').where({
            username,
            password: hPassword
        }).select('user_id').first()

        if(!user_id){
            return response.status(400).json({ error: 'Usuário ou senha incorretos.' })
        }

        return response.json(user_id)
    }
}