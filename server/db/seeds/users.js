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
          userImage:
            'https://images.theconversation.com/files/144359/original/image-20161103-25349-1jdv0b3.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
          totalXp: 0
        },
        {
          firstName: 'Alison',
          lastName: 'Wonderland',
          userImage:
            'https://media.resources.festicket.com/image/300x300/center/top/filters:quality(70)/www/artists/AlisonWonderland_ExM9EOI.jpg',
          totalXp: 0
        },
        {
          firstName: 'Mark',
          lastName: 'Wahlberg',
          userImage:
            'https://media1.popsugar-assets.com/files/thumbor/4T31x_uQWTNOnbp5viE4zdFpLJA/308x75:2409x2176/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/28/883/n/1922398/57c69d725e597435264e15.39233225_/i/Mark-Wahlberg.jpg',
          totalXp: 0
        }
      ])
    })
}
