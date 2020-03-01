exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ratingReviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('ratingReviews').insert([
        { id: 1, userId: 1, walkId: 1, rating: 5, review: 'Goldie\'s Bush walk was amazing' },
        { id: 2, userId: 2, walkId: 1, rating: 3, review: 'Western springs walk was amazing' },
        { id: 3, userId: 3, walkId: 1, rating: 2, review: 'Te Henga Walkway was amazing' },
        { id: 4, userId: 3, walkId: 1, rating: 4, review: 'Rangitoto Summit Track was amazing' },
        { id: 5, userId: 3, walkId: 1, rating: 4, review: 'Maungauika/North Head Historic Walk was amazing' },
        { id: 6, userId: 3, walkId: 1, rating: 2, review: 'Motutapu Walkway was amazing' },
        { id: 7, userId: 3, walkId: 1, rating: 5, review: 'One Tree Hill Walk was amazing' }

      ])
    })
}
