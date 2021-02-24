exports.up = function (knex) {
  return knex.schema.createTable('habits', table => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('title')
    table.string('description')
    table.string('habit_icon')
    table.integer('total_goal_count')
    table.integer('priority')
    table.integer('goal_count')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('habits')
}
