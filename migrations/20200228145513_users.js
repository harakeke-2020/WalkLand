exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', function (table) {
    table.increments().primary()
    table.text('username')
    table.text('password')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
