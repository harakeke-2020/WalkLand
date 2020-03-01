exports.up = (knex, Promise) => {
  return knex.schema.createTable('ratingReviews', function (table) {
    table.increments().primary()
    table.integer('userId')
    table.integer('walkId')
    table.integer('rating')
    table.text('review')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('ratingReviews')
}