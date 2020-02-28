
exports.up = function(knex) {
  return knex.schema.createTable('teams', tbl => {
      tbl.increments()
      tbl.string('team name', 256)
      .notNullable()
      .index()
      .unsigned()

      tbl.string('city', 256)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('teams')
};
