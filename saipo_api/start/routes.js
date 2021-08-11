'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Task = use('App/Models/Task')

Route.on('/').render('welcome')

Route.get('/tasks', async () => {
    return await Task.all()
})
