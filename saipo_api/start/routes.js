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

Route.put("/task", async ({ request }) => {
    const updateTask = request.body

    const task = await Task.find(updateTask.id)

    if (updateTask.pendingCount == 0) {
        return task
    }

    task.pendingCount -= 1
    task.complete = updateTask.complete
    task.save()

    return task
})