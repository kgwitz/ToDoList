import Axios from 'axios'

const URL = process.env.REACT_APP_BACK_END_URL

//Create Task
const CreateTask = async (data) => {
    try {
        const res = await Axios.post(`${URL}/Task`, data)

        if (res) {
            return res 
        } else {
            console.log('Could not create task')
            return null
        }
    } catch (error) {
        console.log(error)
        return null
    }
}

//Get All Tasks
const GetTasks = async () => {
    try {
        const res = await Axios.get(`${URL}/Task/All`)

        if (res) {
            return res 
        } else {
            console.log('Could not get tasks')
            return null
        }
    } catch (error) {
        console.log(error)
        return null
    }
}

//Modify Task
const UpdateTask = async (data) => {
    try {
        const res = await Axios.put(`${URL}/Task`, data)

        if (res) {
            return res 
        } else {
            console.log('Could not update task')
            return null
        }
    } catch (error) {
        console.log(error)
        return null
    }
}

//Delete Task
const DeleteTask = async (id) => {
    try {
        const res = await Axios.delete(`${URL}/Task`, {params: {id: id}})

        if (res) {
            return res 
        } else {
            console.log('Could not delete task')
            return null
        }
    } catch (error) {
        console.log(error)
        return null
    }
}

//Delete All Tasks
const DeleteTasks = async () => {
    try {
        const res = await Axios.delete(`${URL}/Task/All`)
        
        if (res) {
            return res 
        } else {
            console.log('Could not delete all tasks')
            return null
        }
    } catch (error) {
        console.log(error)
        return null
    }
}


export {
    CreateTask,
    GetTasks,
    UpdateTask,
    DeleteTask,
    DeleteTasks
}