exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ratingReviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('ratingReviews').insert([
        { id: 1, userId: 1, walkId: 1, rating: 1, review: 'yes' },
        { id: 2, userId: 2, walkId: 1, rating: 1, review: 'yes' },
        { id: 3, userId: 3, walkId: 1, rating: 1, review: 'yes' }
      ])
    })
}
