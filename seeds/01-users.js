exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'misterRicJon', email: '1234@mail.com', password: '1111' },
        { id: 2, username: 'jankyJames', email: 'abcd@mail.com', password: '2222' },
        { id: 3, username: 'JaredFromSubway', email: '9999@mail.com', password: '3333' },
        { id: 4, username: 'kreepyKevin', email: '6666@mail.com', password: '4444' },
        { id: 5, username: 'silentTom', email: '2452@mail.com', password: '5555' },
        { id: 6, username: 'emiree', email: '1010@mail.com', password: '6666' },
        { id: 7, username: 'hummus', email: '6632@mail.com', password: '7777' },
        { id: 8, username: 'jam', email: '2222@mail.com', password: '8888' }
      ])
    })
}

// on register
// bio
// user profile