
exports.up = function(knex) {
  return knex.schema.createTable('spells', function (table) {
      table.integer('sheet_id').unsigned().primary()    //chave primária (que também é chave estrangeira)
      table.foreign('sheet_id').references('sheet_id').inTable('sheets')

      table.integer('spell_level').unsigned().notNullable()
      table.string('spell_name', 16).notNullable()
      table.boolean('is_prepared')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('spells')
};
