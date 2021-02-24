exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('habits')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('habits').insert([
        {
          user_id: 1,
          title: 'picking my nose',
          description: "I can't keep my finger out of there",
          habit_icon: 'some icon',
          total_goal_count: '0',
          priority: 1,
          goal_count: 0
        },
        {
          user_id: 2,
          title: 'smoking',
          description: "I know it's bad for me but I enjoy it.",
          habit_icon: 'some icon',
          total_goal_count: '0',
          priority: 1,
          goal_count: 0
        },
        {
          user_id: 2,
          title: 'picking my nose',
          description: 'I also enjoy picking my nose',
          habit_icon: 'some icon',
          total_goal_count: '0',
          priority: 1,
          goal_count: 0
        }
      ])
    })
}
