exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'misterricjon', password: '1111' },
        { id: 2, username: 'jankyjames', password: '2222' },
        { id: 3, username: 'JaredFromSubway', password: '3333' },
        { id: 4, username: 'kreepykevin', password: '4444' },
        { id: 5, username: 'silenttom', password: '5555' },
        { id: 6, username: 'emiree', password: '6666' },
        { id: 7, username: 'hummus', password: '7777' },
        { id: 8, username: 'jam', password: '8888' },
        { id: 9, username: 'lammy', password: '9999' },
        { id: 10, username: 'jeff', password: '9929' }
      ])
    })
}

// on register
// bio
// user profile