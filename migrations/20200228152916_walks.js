exports.up = (knex, Promise) => {
  return knex.schema.createTable('walks', function (table) {
    table.increments().primary()
    table.text('title')
    table.float('latitude')
    table.float('longitude')
    table.string('location')
    table.string('mainPhoto')
    table.string('photos')
    table.string('routeImage')
    table.string('distance')
    table.integer('elevationGain')
    table.string('timeTaken')
    table.string('difficulty')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('walks')
}