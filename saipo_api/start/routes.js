'use strict'

// /** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Task = use('App/Models/Task')

Route.on('/').render('welcome')

Route.get('/tasks', async () => {
    return await Task.all()
})

Route.post('/task', async ({ request }) => {
    const newTask = request.body

    const task = await Task.create(newTask)

    return task
})
