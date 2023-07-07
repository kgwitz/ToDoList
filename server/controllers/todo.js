const express = require('express')
const router = express.Router()

const ToDoModel = require('../models/todo')

//Get all tasks
router.get('/Task/All', async (req, res) => {
    try {
        const tasks = await ToDoModel.find({})
        res.send(tasks)
    } catch (err) {
        console.log(err)
        res.status(500)
    }
})

//Create a task
router.post('/Task', async (req, res) => {
    try {
        console.log(req)
        const input = req.body
        if (!input || input === '') {res.status(400).send('Invalid input'); return}

        const task = new ToDoModel(input)
        const result = await task.save()
        if (!result) {res.status(400).send('Could not save task'); return}

        res.send(result)
    } catch (err) {
        console.log(err)
        res.status(500)
    }
})

//Modify a task
router.put('/Task', async (req, res) => {
    try {
        const input = req.body
        if (!input || input === '' || !input?._id) {res.status(400).send('Invalid input'); return}

        const task = await ToDoModel.findById({_id: input._id})
        if (!task || task === {}) {res.status(400).send('Could not find task'); return}

        task.done = input.done
        const result = await task.save()
        if (!result) {res.status(400).send('Could not save task'); return}

        res.send(result)
    } catch (err) {
        console.log(err)
        res.status(500)
    }
})

//Delete all tasks
router.delete('/Task/All', async (req, res) => {
    try {
        await ToDoModel.deleteMany({})
        res.send()
    } catch (err) {
        console.log(err)
        res.status(500)
    }
})

//Delete one task
router.delete('/Task', async (req, res) => {
    try {
        const taskId = req.query.id
        if (!taskId || taskId === '') {res.status(400).send('Invalid task'); return}

        const task = await ToDoModel.findByIdAndRemove({_id: taskId})
        if (!task) {res.status(400).send('Could not find task to remove'); return}

        res.send()
    } catch (err) {
        console.log(err)
        res.status(500)
    }
})


module.exports = router