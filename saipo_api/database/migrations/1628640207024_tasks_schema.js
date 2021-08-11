'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TasksSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.string('description', 2000).notNullable()
      table.string('owner', 50).notNullable()
      table.string('mail', 255).notNullable()
      table.boolean('complete').defaultTo(false)
      table.integer('pendingCount').defaultTo(2)
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')  
  }
}

module.exports = TasksSchema
