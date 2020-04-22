const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
    user() {
        return celebrate({
            [ Segments.BODY ]: Joi.object().keys({
                username: Joi.string().max(16).required(),
                password: Joi.string().max(16).required()
            })
        })
    },

    spell() {
        return celebrate({
            [ Segments.BODY ]: Joi.object().keys({
                spell_level: Joi.number().integer().min(0).max(9).required(),
                spell_name: Joi.string().max(16).required(),
                is_prepared: Joi.boolean().allow(null)
            })
        })
    }
}