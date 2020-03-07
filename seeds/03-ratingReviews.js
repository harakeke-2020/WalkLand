exports.seed = function (knex) {
  return knex('ratingreviews').del()
    .then(function () {
      return knex('ratingreviews').insert([
        {walkId: 1, username: 'Felix', rating: 5, review: 'Goldie\'s Bush walk was amazing' },
        {  walkId: 2, username: 'Doderick', rating: 3, review: 'Western springs walk was amazing' },
        {  walkId: 3, username: 'Mylanta', rating: 5, review: 'Te Henga Walkway was amazing. The entry into the beach, the walk along the cliffside, the ease into Muriwai Beach. It truly showed the best of the beauty that Auckland\'s West Coast has to offer.' },
        {  walkId: 4, username: 'Duodenum', rating: 4, review: 'Rangitoto Summit Track was amazing' },
        {  walkId: 5, username: 'Femur', rating: 4, review: 'Maungauika/North Head Historic Walk was amazing' },
        {  walkId: 6, username: 'themonkey', rating: 2, review: 'Motutapu Walkway was amazing' },
        {  walkId: 7, username: 'dave', rating: 5, review: 'One Tree Hill Walk was amazing' },
        {  walkId: 8, username: 'bob', rating: 5, review: 'Kitekite Falls was amazing' },
        {  walkId: 9, username: 'jimmy', rating: 2, review: 'Orakei Basin Walkway fast and easy!' },
        { walkId: 10, username: 'hamish', rating: 3, review: 'Long bay was awesome' }
      ])
    })
}
