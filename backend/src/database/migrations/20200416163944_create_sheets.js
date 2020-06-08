
exports.up = function(knex) {
  return knex.schema.createTable('sheets', function (table) {
      table.increments('sheet_id') //chave primária
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('user_id').inTable('users')

      //Geral
      table.string('character_name', 24).notNullable()
      table.string('character_img').notNullable()
      table.string('class', 16).notNullable()
      table.integer('level').unsigned().notNullable()
      table.string('background', 16).notNullable()
      table.string('race', 16).notNullable()
      table.string('alignment', 16).notNullable()
      table.integer('xp_points').unsigned().notNullable()
      
      //Atributos
      table.string('inspiration', 3)
      table.string('proficiency_bonus', 2).notNullable()

      table.integer('strength').unsigned().notNullable()
      table.string('strength_modifier', 3).notNullable()

      table.integer('dexterity').unsigned().notNullable()
      table.string('dexterity_modifier', 3).notNullable()

      table.integer('constitution').unsigned().notNullable()
      table.string('constitution_modifier', 3).notNullable()

      table.integer('intelligence').unsigned().notNullable()
      table.string('intelligence_modifier', 3).notNullable()

      table.integer('wisdom').unsigned().notNullable()
      table.string('wisdom_modifier', 3).notNullable()

      table.integer('charisma').unsigned().notNullable()
      table.string('charisma_modifier', 3).notNullable()

      table.integer('passive_wisdom').notNullable()

      //Saving Throws
      table.string('str_saving_throw', 3).notNullable()
      table.boolean('str_st_is_proficient').notNullable()

      table.string('dex_saving_throw', 3).notNullable()
      table.boolean('dex_st_is_proficient').notNullable()

      table.string('con_saving_throw', 3).notNullable()
      table.boolean('con_st_is_proficient').notNullable()

      table.string('int_saving_throw', 3).notNullable()
      table.boolean('int_st_is_proficient').notNullable()

      table.string('wis_saving_throw', 3).notNullable()
      table.boolean('wis_st_is_proficient').notNullable()

      table.string('cha_saving_throw', 3).notNullable()
      table.boolean('cha_st_is_proficient').notNullable()

      //Skiils
      table.string('acrobatics', 3).notNullable()
      table.boolean('acr_is_proficient').notNullable()
      
      table.string('animal_handling', 3).notNullable()
      table.boolean('anh_is_proficient').notNullable()

      table.string('arcana', 3).notNullable()
      table.boolean('arc_is_proficient').notNullable()

      table.string('athletics', 3).notNullable()
      table.boolean('ath_is_proficient').notNullable()

      table.string('deception', 3).notNullable()
      table.boolean('dec_is_proficient').notNullable()

      table.string('history', 3).notNullable()
      table.boolean('his_is_proficient').notNullable()

      table.string('insight', 3).notNullable()
      table.boolean('ins_is_proficient').notNullable()

      table.string('intimidation', 3).notNullable()
      table.boolean('itm_is_proficient').notNullable()

      table.string('investigation', 3).notNullable()
      table.boolean('inv_is_proficient').notNullable()

      table.string('medicine', 3).notNullable()
      table.boolean('med_is_proficient').notNullable()

      table.string('nature', 3).notNullable()
      table.boolean('nat_is_proficient').notNullable()

      table.string('perception', 3).notNullable()
      table.boolean('perc_is_proficient').notNullable()

      table.string('performance', 3).notNullable()
      table.boolean('perf_is_proficient').notNullable()

      table.string('persuasion', 3).notNullable()
      table.boolean('pers_is_proficient').notNullable()

      table.string('religion', 3).notNullable()
      table.boolean('rel_is_proficient').notNullable()

      table.string('sleight_of_hand', 3).notNullable()
      table.boolean('sle_is_proficient').notNullable()

      table.string('stealth', 3).notNullable()
      table.boolean('ste_is_proficient').notNullable()

      table.string('survival', 3).notNullable()
      table.boolean('sur_is_proficient').notNullable()

      //Informações de combate
      table.integer('armor_class').unsigned().notNullable()
      table.integer('initiative').unsigned().notNullable()
      table.string('speed', 16).notNullable()
      table.integer('hp_max').unsigned().notNullable()
      table.integer('hp_current').unsigned().notNullable()
      table.integer('temporary_hp_current').unsigned()
      table.integer('temporary_hp_max').unsigned()

      table.integer('hp_dice_total').unsigned().notNullable()
      table.string('hp_dice', 16).notNullable()

      table.boolean('death_saves_successes_1').notNullable()
      table.boolean('death_saves_successes_2').notNullable()
      table.boolean('death_saves_successes_3').notNullable()
      table.boolean('death_saves_failures_1').notNullable()
      table.boolean('death_saves_failures_2').notNullable()
      table.boolean('death_saves_failures_3').notNullable()

      //Ataques e magias
      table.string('atk_name_1', 20)
      table.string('atk_bonus_1', 3)
      table.string('atk_damage_and_type_1', 20)

      table.string('atk_name_2', 20)
      table.string('atk_bonus_2', 3)
      table.string('atk_damage_and_type_2', 20)

      table.string('atk_name_3', 20)
      table.string('atk_bonus_3', 3)
      table.string('atk_damage_and_type_3', 20)

      table.text('atk_description')

      //Idiomas e Outras Proficiências
      table.text('languages_and_proficiencies')

      //Equipamentos
      table.integer('cp').unsigned().notNullable()
      table.integer('sp').unsigned().notNullable()
      table.integer('ep').unsigned().notNullable()
      table.integer('gp').unsigned().notNullable()
      table.integer('pp').unsigned().notNullable()
      table.text('equipment')

      //Descrições
      table.text('personality_traits')
      table.text('ideals')
      table.text('bonds')
      table.text('flaws')

      table.text('features_traits')

      //Descrições detalhadas
      table.integer('age').unsigned()
      table.float('height').unsigned()
      table.float('weight').unsigned()
      table.string('eyes', 12)
      table.string('skin', 12)
      table.string('hair', 12)

      table.string('appearance_img')
      table.string('allies_name', 16)
      table.text('allies_description')
      table.string('allies_img')

      table.text('character_backstory')
      table.text('additional_features')
      table.text('treasure')

      //Informações para magos
      table.string('spellcasting_class', 16)
      table.string('spellcasting_ability', 16)
      table.integer('spell_save_dc')
      table.integer('spell_attack_bonus')

      table.integer('lv1_slots_total').unsigned()
      table.integer('lv1_slots_expended').unsigned()

      table.integer('lv2_slots_total').unsigned()
      table.integer('lv2_slots_expended').unsigned()

      table.integer('lv3_slots_total').unsigned()
      table.integer('lv3_slots_expended').unsigned()

      table.integer('lv4_slots_total').unsigned()
      table.integer('lv4_slots_expended').unsigned()

      table.integer('lv5_slots_total').unsigned()
      table.integer('lv5_slots_expended').unsigned()

      table.integer('lv6_slots_total').unsigned()
      table.integer('lv6_slots_expended').unsigned()

      table.integer('lv7_slots_total').unsigned()
      table.integer('lv7_slots_expended').unsigned()

      table.integer('lv8_slots_total').unsigned()
      table.integer('lv8_slots_expended').unsigned()

      table.integer('lv9_slots_total').unsigned()
      table.integer('lv9_slots_expended').unsigned()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('sheets')
};
