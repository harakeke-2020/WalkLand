exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          { id: 1, username: 'testUserName1', email: 'testEmail1.com', password: 'test1' },
          { id: 2, username: 'testUserName2', email: 'testEmail2.com', password: 'test2' },
          { id: 3, username: 'testUserName3', email: 'testEmail3.com', password: 'test3' }
        ])
      })
  }
  
  // on register
  // bio
  // user profile