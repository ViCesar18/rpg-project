
exports.up = function(knex) {
  return knex.schema.createTable('sheets', function (table) {
      //Geral
      table.string('character_name', 24).notNullable()
      table.string('class', 16).notNullable()
      table.integer('level').unsigned().notNullable()
      table.string('background', 16).notNullable()
      table.string('race', 16).notNullable()
      table.string('alignment', 16).notNullable()
      table.integer('xp_points').unsigned().notNullable()
      
      //Atributos
      table.integer('inspiration').unsigned().notNullable()
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

      table.integer('passive_wisdow').unsigned().notNullable()

      //Saving Throws
      table.integer('str_saving_throw').unsigned()
      table.integer('dex_saving_throw').unsigned()
      table.integer('con_saving_throw').unsigned()
      table.integer('int_saving_throw').unsigned()
      table.integer('wis_saving_throw').unsigned()
      table.integer('cha_saving_throw').unsigned()

      //Skiils
      table.integer('acrobatics').unsigned()
      table.integer('animal_handling').unsigned()
      table.integer('arcana').unsigned()
      table.integer('athletics').unsigned()
      table.integer('deception').unsigned()
      table.integer('history').unsigned()
      table.integer('insight').unsigned()
      table.integer('intimidation').unsigned()
      table.integer('investigation').unsigned()
      table.integer('medicine').unsigned()
      table.integer('nature').unsigned()
      table.integer('perception').unsigned()
      table.integer('persuasion').unsigned()
      table.integer('religion').unsigned()
      table.integer('sleight_of_hand').unsigned()
      table.integer('stealth').unsigned()
      table.integer('survival').unsigned()

      //Informações de combate
      table.integer('armor_class').unsigned().notNullable()
      table.integer('initiative').unsigned().notNullable()
      table.integer('speed').unsigned().notNullable()
      table.integer('hp_max').unsigned().notNullable()
      table.integer('hp_current').unsigned().notNullable()
      table.integer('hp_temporary').unsigned()

      table.integer('hp_dice_total').unsigned().notNullable()
      table.string('hp_dice', 16).notNullable()

      table.integer('successes_death_saves').unsigned()
      table.integer('failures_death_saves').unsigned()

      //Ataques e magias

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
      table.integer('height').unsigned()
      table.integer('weight')
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

      //Informações de feitiços

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('sheets')
};
