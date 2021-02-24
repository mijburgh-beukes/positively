exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          firstName: 'Bob',
          lastName: 'Marley',
          userImage: 'Image goes here',
          totalXp: 0,
          pw: 'abc123'
        },
        {
          firstName: 'Allyson',
          lastName: 'Wonderland',
          userImage: 'Image goes here',
          totalXp: 0,
          pw: 'abc123'
        },
        {
          firstName: 'Mark',
          lastName: 'Wahlberg',
          userImage: 'Image goes here',
          totalXp: 0,
          pw: 'abc123'
        }
      ])
    })
}
