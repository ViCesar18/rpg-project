
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
      table.increments('userId')
      table.string('username', 16).notNullable()
      table.string('password', 64).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
