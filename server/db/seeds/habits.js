exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('habits')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('habits').insert([
        {
          user_id: 1,
          title: 'Picking My Nose',
          description: "I can't keep my finger out of there",
          habit_icon: 'some icon',
          total_goal_count: 0,
          priority: 4,
          goal_count: 5
        },
        {
          user_id: 2,
          title: 'Smoking',
          description: "I know it's bad for me but I enjoy it.",
          habit_icon: 'some icon',
          total_goal_count: 0,
          priority: 1,
          goal_count: 10
        },
        {
          user_id: 2,
          title: 'Picking My Nose',
          description: 'I also enjoy picking my nose',
          habit_icon: 'some icon',
          total_goal_count: 0,
          priority: 1,
          goal_count: 50
        },
        {
          user_id: 1,
          title: 'Running',
          description: 'Running 30 minutes everyday',
          habit_icon: 'some icon',
          total_goal_count: 100,
          priority: 1,
          goal_count: 20
        },
        {
          user_id: 1,
          title: 'Swimming',
          description: 'swimming every second day',
          habit_icon: 'some icon',
          total_goal_count: 50,
          priority: 2,
          goal_count: 35
        },
        {
          user_id: 1,
          title: 'Shooting Hoops',
          description: 'Playing ball with my boyz every Saturday for a year',
          habit_icon: 'some icon',
          total_goal_count: 52,
          priority: 3,
          goal_count: 30
        }
      ])
    })
}
