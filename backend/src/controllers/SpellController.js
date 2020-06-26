const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const user_id = request.headers.authorization
        const { sheet_id } = request.params
        const { spell_level, spell_name, is_prepared } = request.body

        const sheet = await connection('sheets')
         .where('sheet_id', sheet_id)
         .select('user_id')
         .first()

        if(sheet.user_id != user_id){
            return response.status(401).json({ error: 'Operação não permitida.' })
        }

        const [ spell_id ] = await connection('spells').insert({
            sheet_id,
            spell_level,
            spell_name,
            is_prepared
        })

        return response.json(spell_id)
    },

    async index_per_sheet(request, response) {
        const { sheet_id } = request.params

        const spells = await connection('spells').where({
            sheet_id
        }).select()

        return response.json(spells)
    },

    async index(request, response) {
        const spells = await connection('spells').select('*')

        return response.json(spells)
    },

    async delete(request, response) {
        const user_id = request.headers.authorization
        const { sheet_id, spell_id } = request.params

        const sheet = await connection('sheets')
         .where('sheet_id', sheet_id)
         .select('user_id')
         .first()

        const spell = await connection('spells')
         .where('spell_id', spell_id)
         .select('sheet_id')
         .first()

        if(sheet.user_id != user_id || spell.sheet_id != sheet_id){
            return response.status(401).json({ error: 'Operação não permitida.' })
        }

        await connection('spells').where('spell_id', spell_id).delete()

        return response.status(204).send()
    },

    async update(request, response) {
        const user_id = request.headers.authorization
        const { sheet_id } = request.params
        const { spell_id, ...updated_fields} = request.body

        const sheet = await connection('sheets')
         .where('sheet_id', sheet_id)
         .select('user_id')
         .first()

        const spell = await connection('spells')
         .where({ spell_id })
         .select('sheet_id')
         .first()

        if(spell === undefined){
            return response.status(400).json({ error: 'Magia não encontrada!' })
        }

        if(sheet.user_id != user_id || spell.sheet_id != sheet_id){
            return response.status(401).json({ error: 'Operação não permitida.' })
        }

        await connection('spells')
         .where({ spell_id })
         .update(updated_fields)

        return response.status(204).send()
    }
}