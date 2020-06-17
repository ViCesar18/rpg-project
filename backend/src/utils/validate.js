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

    createSheet() {
        return celebrate({
            [ Segments.BODY ]: Joi.object().keys({
                //Geral
                character_name: Joi.string().max(24).required(),
                character_img: Joi.string().required(),
                class: Joi.string().max(16).required(),
                level: Joi.number().integer().positive().required(),
                background: Joi.string().max(16).required(),
                race: Joi.string().max(16).required(),
                alignment: Joi.string().max(16).required(),
                xp_points: Joi.number().integer().min(0).required(),

                //Atributos
                inspiration: Joi.string().max(3).allow(null),
                proficiency_bonus: Joi.string().max(2).required(),

                strength: Joi.number().integer().positive().required(),
                strength_modifier: Joi.string().max(3).required(),

                dexterity: Joi.number().integer().positive().required(),
                dexterity_modifier: Joi.string().max(3).required(),

                constitution: Joi.number().integer().positive().required(),
                constitution_modifier: Joi.string().max(3).required(),

                intelligence: Joi.number().integer().positive().required(),
                intelligence_modifier: Joi.string().max(3).required(),

                wisdom: Joi.number().integer().positive().required(),
                wisdom_modifier: Joi.string().max(3).required(),

                charisma: Joi.number().integer().positive().required(),
                charisma_modifier:Joi.string().max(3).required(),

                passive_wisdom: Joi.number().integer().required(),

                //Saving Throws
                str_saving_throw: Joi.string().max(3).required(),
                str_st_is_proficient: Joi.boolean().required(),

                dex_saving_throw: Joi.string().max(3).required(),
                dex_st_is_proficient: Joi.boolean().required(),

                con_saving_throw: Joi.string().max(3).required(),
                con_st_is_proficient: Joi.boolean().required(),

                int_saving_throw: Joi.string().max(3).required(),
                int_st_is_proficient: Joi.boolean().required(),

                wis_saving_throw: Joi.string().max(3).required(),
                wis_st_is_proficient: Joi.boolean().required(),
                
                cha_saving_throw: Joi.string().max(3).required(),
                cha_st_is_proficient: Joi.boolean().required(),

                //Skiils
                acrobatics: Joi.string().max(3).required(),
                acr_is_proficient: Joi.boolean().required(),

                animal_handling: Joi.string().max(3).required(),
                anh_is_proficient: Joi.boolean().required(),

                arcana: Joi.string().max(3).required(),
                arc_is_proficient: Joi.boolean().required(),

                athletics: Joi.string().max(3).required(),
                ath_is_proficient: Joi.boolean().required(),

                deception: Joi.string().max(3).required(),
                dec_is_proficient: Joi.boolean().required(),

                history: Joi.string().max(3).required(),
                his_is_proficient: Joi.boolean().required(),

                insight: Joi.string().max(3).required(),
                ins_is_proficient: Joi.boolean().required(),

                intimidation: Joi.string().max(3).required(),
                itm_is_proficient: Joi.boolean().required(),

                investigation: Joi.string().max(3).required(),
                inv_is_proficient: Joi.boolean().required(),

                medicine: Joi.string().max(3).required(),
                med_is_proficient: Joi.boolean().required(),

                nature: Joi.string().max(3).required(),
                nat_is_proficient: Joi.boolean().required(),

                perception: Joi.string().max(3).required(),
                perc_is_proficient: Joi.boolean().required(),

                performance: Joi.string().max(3).required(),
                perf_is_proficient: Joi.boolean().required(),

                persuasion: Joi.string().max(3).required(),
                pers_is_proficient: Joi.boolean().required(),

                religion: Joi.string().max(3).required(),
                rel_is_proficient: Joi.boolean().required(),

                sleight_of_hand: Joi.string().max(3).required(),
                sle_is_proficient: Joi.boolean().required(),

                stealth: Joi.string().max(3).required(),
                ste_is_proficient: Joi.boolean().required(),

                survival: Joi.string().max(3).required(),
                sur_is_proficient: Joi.boolean().required(),

                //Informações de combate
                armor_class: Joi.number().integer().min(0).required(),
                initiative: Joi.number().integer().min(0).required(),
                speed: Joi.string().max(16).required(),
                hp_max: Joi.number().integer().min(0).required(),
                hp_current: Joi.number().integer().min(0).required(),
                temporary_hp_current: Joi.number().integer().min(0).allow(null),
                temporary_hp_max: Joi.number().integer().min(0).allow(null),

                hp_dice_total: Joi.number().integer().min(0).required(),
                hp_dice: Joi.string().max(16).required(),

                death_saves_successes_1: Joi.boolean().required(),
                death_saves_successes_2: Joi.boolean().required(),
                death_saves_successes_3: Joi.boolean().required(),
                death_saves_failures_1: Joi.boolean().required(),
                death_saves_failures_2: Joi.boolean().required(),
                death_saves_failures_3: Joi.boolean().required(),

                //Ataques e magias
                atk_name_1: Joi.string().max(20).allow(null),
                atk_bonus_1: Joi.string().max(3).allow(null),
                atk_damage_and_type_1: Joi.string().max(20).allow(null),

                atk_name_2: Joi.string().max(20).allow(null),
                atk_bonus_2: Joi.string().max(3).allow(null),
                atk_damage_and_type_2: Joi.string().max(20).allow(null),

                atk_name_3: Joi.string().max(20).allow(null),
                atk_bonus_3: Joi.string().max(3).allow(null),
                atk_damage_and_type_3: Joi.string().max(20).allow(null),

                atk_description: Joi.string().allow(null),

                //Idiomas e Outras Proficiências
                languages_and_proficiencies: Joi.string().allow(null),

                //Equipamentos
                cp: Joi.number().integer().min(0).required(),
                sp: Joi.number().integer().min(0).required(),
                ep: Joi.number().integer().min(0).required(),
                gp: Joi.number().integer().min(0).required(),
                pp: Joi.number().integer().min(0).required(),
                equipment: Joi.string(),

                //Descrições
                personality_traits: Joi.string(),
                ideals: Joi.string(),
                bonds: Joi.string(),
                flaws: Joi.string(),

                features_traits: Joi.string(),

                //Descrições detalhadas
                age: Joi.number().integer().min(0).allow(null),
                height: Joi.string().max(6).allow(null),
                weight: Joi.string().max(6).allow(null),
                eyes: Joi.string().max(12).allow(null),
                skin: Joi.string().max(20).allow(null),
                hair: Joi.string().max(12).allow(null),

                allies_name: Joi.string().max(16).allow(null),
                allies_description: Joi.string().allow(null),

                character_backstory: Joi.string().allow(null),
                additional_features: Joi.string().allow(null),
                treasure: Joi.string().allow(null),

                //Informações para magos
                spellcasting_class: Joi.string().max(16).allow(null),
                spellcasting_ability: Joi.string().max(16).allow(null),
                spell_save_dc: Joi.number().integer().allow(null),
                spell_attack_bonus: Joi.number().integer().allow(null),

                lv1_slots_total: Joi.number().integer().allow(null),
                lv1_slots_expended: Joi.number().integer().allow(null),

                lv2_slots_total: Joi.number().integer().allow(null),
                lv2_slots_expended: Joi.number().integer().allow(null),

                lv3_slots_total: Joi.number().integer().allow(null),
                lv3_slots_expended: Joi.number().integer().allow(null),

                lv4_slots_total: Joi.number().integer().allow(null),
                lv4_slots_expended: Joi.number().integer().allow(null),

                lv5_slots_total: Joi.number().integer().allow(null),
                lv5_slots_expended: Joi.number().integer().allow(null),

                lv6_slots_total: Joi.number().integer().allow(null),
                lv6_slots_expended: Joi.number().integer().allow(null),

                lv7_slots_total: Joi.number().integer().allow(null),
                lv7_slots_expended: Joi.number().integer().allow(null),

                lv8_slots_total: Joi.number().integer().allow(null),
                lv8_slots_expended: Joi.number().integer().allow(null),

                lv9_slots_total: Joi.number().integer().allow(null),
                lv9_slots_expended: Joi.number().integer().allow(null),
            }),
            [ Segments.HEADERS ]: Joi.object({
                authorization: Joi.number().positive().required()
            }).unknown()
        })
    },

    indexSheets() {
        return celebrate({
            [ Segments.HEADERS ]: Joi.object({
                authorization: Joi.number().positive().required()
            }).unknown()
        })
    },

    deleteSheet(){ 
        return celebrate({
            [ Segments.PARAMS ]: Joi.object().keys({
                sheet_id: Joi.number().positive().required()
            }),
            [ Segments.HEADERS ]: Joi.object({
                authorization: Joi.number().positive().required()
            }).unknown()
        })
    },

    createSpell() {
        return celebrate({
            [ Segments.BODY ]: Joi.object().keys({
                spell_level: Joi.number().integer().min(0).max(9).required(),
                spell_name: Joi.string().max(16).required(),
                is_prepared: Joi.boolean().allow(null)
            }),
            [ Segments.PARAMS ]: Joi.object().keys({
                sheet_id: Joi.number().positive().required()
            })
        })
    },

    indexSpells() {
        return celebrate({
            [ Segments.PARAMS ]: Joi.object().keys({
                sheet_id: Joi.number().positive().required()
            })
        })
    },

    deleteSpell() {
        return celebrate({
            [ Segments.PARAMS ]: Joi.object().keys({
                sheet_id: Joi.number().positive().required(),
                spell_id: Joi.number().positive().required()
            }),
            [ Segments.HEADERS ]: Joi.object({
                authorization: Joi.number().positive().required()
            }).unknown()
        })
    }
}