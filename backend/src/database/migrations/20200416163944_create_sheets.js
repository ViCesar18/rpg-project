
exports.up = function(knex) {
  return knex.schema.createTable('sheets', function (table) {
      table.increments('sheet_id') //chave primária
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('user_id').inTable('users')

      //Geral
      table.string('character_name', 24).notNullable()
      table.string('class', 16).notNullable()
      table.integer('level').unsigned().notNullable()
      table.string('background', 16).notNullable()
      table.string('race', 16).notNullable()
      table.string('alignment', 16).notNullable()
      table.integer('xp_points').unsigned().notNullable()
      
      //Atributos
      table.string('inspiration', 4)
      table.integer('proficiency_bonus').unsigned().notNullable()

      table.integer('strength').unsigned().notNullable()
      table.integer('strength_modifier').notNullable()

      table.integer('dexterity').unsigned().notNullable()
      table.integer('dexterity_modifier').notNullable()

      table.integer('constitution').unsigned().notNullable()
      table.integer('constitution_modifier').notNullable()

      table.integer('intelligence').unsigned().notNullable()
      table.integer('intelligence_modifier').notNullable()

      table.integer('wisdom').unsigned().notNullable()
      table.integer('wisdom_modifier').notNullable()

      table.integer('charisma').unsigned().notNullable()
      table.integer('charisma_modifier').notNullable()

      table.integer('passive_wisdom').notNullable()

      //Saving Throws
      table.integer('str_saving_throw').notNullable()
      table.boolean('str_st_is_proficient').notNullable()

      table.integer('dex_saving_throw').notNullable()
      table.boolean('dex_st_is_proficient').notNullable()

      table.integer('con_saving_throw').notNullable()
      table.boolean('con_st_is_proficient').notNullable()

      table.integer('int_saving_throw').notNullable()
      table.boolean('int_st_is_proficient').notNullable()

      table.integer('wis_saving_throw').notNullable()
      table.boolean('wis_st_is_proficient').notNullable()

      table.integer('cha_saving_throw').notNullable()
      table.boolean('cha_st_is_proficient').notNullable()

      //Skiils
      table.integer('acrobatics').notNullable()
      table.boolean('acr_is_proficient').notNullable()
      
      table.integer('animal_handling').notNullable()
      table.boolean('anh_is_proficient').notNullable()

      table.integer('arcana').notNullable()
      table.boolean('arc_is_proficient').notNullable()

      table.integer('athletics').notNullable()
      table.boolean('ath_is_proficient').notNullable()

      table.integer('deception').notNullable()
      table.boolean('dec_is_proficient').notNullable()

      table.integer('history').notNullable()
      table.boolean('his_is_proficient').notNullable()

      table.integer('insight').notNullable()
      table.boolean('ins_is_proficient').notNullable()

      table.integer('intimidation').notNullable()
      table.boolean('itm_is_proficient').notNullable()

      table.integer('investigation').notNullable()
      table.boolean('inv_is_proficient').notNullable()

      table.integer('medicine').notNullable()
      table.boolean('med_is_proficient').notNullable()

      table.integer('nature').notNullable()
      table.boolean('nat_is_proficient').notNullable()

      table.integer('perception').notNullable()
      table.boolean('perc_is_proficient').notNullable()

      table.integer('persuasion').notNullable()
      table.boolean('pers_is_proficient').notNullable()

      table.integer('religion').notNullable()
      table.boolean('rel_is_proficient').notNullable()

      table.integer('sleight_of_hand').notNullable()
      table.boolean('sle_is_proficient').notNullable()

      table.integer('stealth').notNullable()
      table.boolean('ste_is_proficient').notNullable()

      table.integer('survival').notNullable()
      table.boolean('sur_is_proficient').notNullable()

      //Informações de combate
      table.integer('armor_class').unsigned().notNullable()
      table.integer('initiative').unsigned().notNullable()
      table.string('speed', 16).notNullable()
      table.integer('hp_max').unsigned().notNullable()
      table.integer('hp_current').unsigned().notNullable()
      table.integer('hp_temporary').unsigned()

      table.integer('hp_dice_total').unsigned().notNullable()
      table.string('hp_dice', 16).notNullable()

      table.integer('successes_death_saves').unsigned()
      table.integer('failures_death_saves').unsigned()

      //Ataques e magias
      table.string('atk_name_1', 20)
      table.integer('atk_bonus_1').unsigned()
      table.string('atk_damage_and_type_1', 20)

      table.string('atk_name_2', 20)
      table.integer('atk_bonus_2').unsigned()
      table.string('atk_damage_and_type_2', 20)

      table.string('atk_name_3', 20)
      table.integer('atk_bonus_3').unsigned()
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
