const connection = require('../database/connection')
const { update } = require('../database/connection')

module.exports = {
    async create(request, response) {
        const user_id = request.headers.authorization
        const body = request.body

        const [ sheet_id ] = await connection('sheets').insert({
            user_id,

            //Geral
            character_name: body.character_name,
            character_img: body.character_img,
            class: body.class,
            level: body.level,
            background: body.background,
            race: body.race,
            alignment: body.alignment,
            xp_points: body.xp_points,

            //Atributos
            inspiration: body.inspiration,
            proficiency_bonus: body.proficiency_bonus,

            strength: body.strength,
            strength_modifier: body.strength_modifier,

            dexterity: body.dexterity,
            dexterity_modifier: body.dexterity_modifier,

            constitution: body.constitution,
            constitution_modifier: body.constitution_modifier,

            intelligence: body.intelligence,
            intelligence_modifier: body.intelligence_modifier,

            wisdom: body.wisdom,
            wisdom_modifier: body.wisdom_modifier,

            charisma: body.charisma,
            charisma_modifier: body.charisma_modifier,

            passive_wisdom: body.passive_wisdom,

            //Saving Throws
            str_saving_throw: body.str_saving_throw,
            str_st_is_proficient: body.str_st_is_proficient,

            dex_saving_throw: body.dex_saving_throw,
            dex_st_is_proficient: body.dex_st_is_proficient,

            con_saving_throw: body.con_saving_throw,
            con_st_is_proficient: body.con_st_is_proficient,

            int_saving_throw: body.int_saving_throw,
            int_st_is_proficient: body.int_st_is_proficient,

            wis_saving_throw: body.wis_saving_throw,
            wis_st_is_proficient: body.wis_st_is_proficient,

            cha_saving_throw: body.cha_saving_throw,
            cha_st_is_proficient: body.cha_st_is_proficient,

            //Skiils
            acrobatics: body.acrobatics,
            acr_is_proficient: body.acr_is_proficient,

            animal_handling: body.animal_handling,
            anh_is_proficient: body.anh_is_proficient,

            arcana: body.arcana,
            arc_is_proficient: body.arc_is_proficient,

            athletics: body.athletics,
            ath_is_proficient: body.ath_is_proficient,

            deception: body.deception,
            dec_is_proficient: body.dec_is_proficient,

            history: body.history,
            his_is_proficient: body.his_is_proficient,

            insight: body.insight,
            ins_is_proficient: body.ins_is_proficient,

            intimidation: body.intimidation,
            itm_is_proficient: body.itm_is_proficient,

            investigation: body.investigation,
            inv_is_proficient: body.inv_is_proficient,

            medicine: body.medicine,
            med_is_proficient: body.med_is_proficient,

            nature: body.nature,
            nat_is_proficient: body.nat_is_proficient,

            perception: body.perception,
            perc_is_proficient: body.perc_is_proficient,

            performance: body.perception,
            perf_is_proficient: body.perc_is_proficient,

            persuasion: body.persuasion,
            pers_is_proficient: body.pers_is_proficient,

            religion: body.religion,
            rel_is_proficient: body.rel_is_proficient,

            sleight_of_hand: body.sleight_of_hand,
            sle_is_proficient: body.sle_is_proficient,

            stealth: body.stealth,
            ste_is_proficient: body.ste_is_proficient,

            survival: body.survival,
            sur_is_proficient: body.sur_is_proficient,

            //Informações de combate
            armor_class: body.armor_class,
            initiative: body.initiative,
            speed: body.speed,
            hp_max: body.hp_max,
            hp_current: body.hp_current,
            temporary_hp_current: body.temporary_hp_current,
            temporary_hp_max: body.temporary_hp_current,

            hp_dice_total: body.hp_dice_total,
            hp_dice: body.hp_dice,

            death_saves_successes_1: body.death_saves_successes_1,
            death_saves_successes_2: body.death_saves_successes_2,
            death_saves_successes_3: body.death_saves_successes_3,
            death_saves_failures_1: body.death_saves_failures_1,
            death_saves_failures_2: body.death_saves_failures_2,
            death_saves_failures_3: body.death_saves_failures_3,

            //Ataques e magias
            atk_name_1: body.atk_name_1,
            atk_bonus_1: body.atk_bonus_1,
            atk_damage_and_type_1: body.atk_damage_and_type_1,

            atk_name_2: body.atk_name_2,
            atk_bonus_2: body.atk_bonus_2,
            atk_damage_and_type_2: body.atk_damage_and_type_2,

            atk_name_3: body.atk_name_3,
            atk_bonus_3: body.atk_bonus_3,
            atk_damage_and_type_3: body.atk_damage_and_type_3,

            atk_description: body.atk_description,

            //Idiomas e Outras Proficiências
            languages_and_proficiencies: body.languages_and_proficiencies,

            //Equipamentos
            cp: body.cp,
            sp: body.sp,
            ep: body.ep,
            gp: body.gp,
            pp: body.pp,
            equipment: body.equipment,

            //Descrições
            personality_traits: body.personality_traits,
            ideals: body.ideals,
            bonds: body.bonds,
            flaws: body.flaws,

            features_traits: body.features_traits,

            //Descrições detalhadas
            age: body.age,
            height: body.height,
            weight: body.weight,
            eyes: body.eyes,
            skin: body.skin,
            hair: body.hair,

            allies_name: body.allies_name,
            allies_description: body.allies_description,

            character_backstory: body.character_backstory,
            additional_features: body.additional_features,
            treasure: body.treasure,

            //Informações para magos
            spellcasting_class: body.spellcasting_class,
            spellcasting_ability: body.spellcasting_ability,
            spell_save_dc: body.spell_save_dc,
            spell_attack_bonus: body.spell_attack_bonus,

            lv1_slots_total: body.lv1_slots_total,
            lv1_slots_expended: body.lv1_slots_expended,

            lv2_slots_total: body.lv2_slots_total,
            lv2_slots_expended: body.lv2_slots_expended,

            lv3_slots_total: body.lv3_slots_total,
            lv3_slots_expended: body.lv3_slots_expended,

            lv4_slots_total: body.lv4_slots_total,
            lv4_slots_expended: body.lv4_slots_expended,

            lv5_slots_total: body.lv5_slots_total,
            lv5_slots_expended: body.lv5_slots_expended,

            lv6_slots_total: body.lv6_slots_total,
            lv6_slots_expended: body.lv6_slots_expended,

            lv7_slots_total: body.lv7_slots_total,
            lv7_slots_expended: body.lv7_slots_expended,

            lv8_slots_total: body.lv8_slots_total,
            lv8_slots_expended: body.lv8_slots_expended,

            lv9_slots_total: body.lv9_slots_total,
            lv9_slots_expended: body.lv9_slots_expended,
        })

        return response.json(sheet_id)
    },

    async index(request, response) {
        const sheets = await connection('sheets').select('*')

        return response.json(sheets)
    },

    async index_per_user(request, response) {
        const { page = 1 } = request.query
        
        const user_id = request.headers.authorization

        const [ count ] = await connection('sheets').where('user_id', user_id).count()
        //const [ count ] = await connection('sheets').count(`user_id as ${user_id}`)

        const sheets = await connection('sheets')
         .where('user_id', user_id)
         .limit(5)
         .offset((page - 1) * 5)
         .select('*')

        response.header('X-Total-Count', count['count(*)'])

        return response.json(sheets)
    },

    async delete(request, response) {
        const user_id = request.headers.authorization
        const { sheet_id } = request.params

        const sheet = await connection('sheets')
         .where('sheet_id', sheet_id)
         .select('user_id')
         .first()

        if(sheet.user_id != user_id){
            return response.status(401).json({ error: 'Operação não permitida.' })
        }

        await connection('spells').where('sheet_id', sheet_id).delete()
        await connection('sheets').where('sheet_id', sheet_id).delete()

        return response.status(204).send()
    },

    async update(request, response) {
        const user_id = request.headers.authorization
        const { sheet_id, ...updated_fields} = request.body

        const sheet = await connection('sheets')
         .where({ sheet_id })
         .select('user_id')
         .first()

        if(sheet === undefined){
            return response.status(400).json({ error: 'Ficha não encontrada!' })
        }

        if(sheet.user_id != user_id){
            return response.status(401).json({ error: 'Operação não permitida.' })
        }

        await connection('sheets')
         .where({ sheet_id })
         .update(updated_fields)

        return response.status(204).send()
    }
}