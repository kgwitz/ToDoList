import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { BsListCheck } from 'react-icons/bs';
import { BsList } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { CreateTask, GetTasks, UpdateTask, DeleteTask, DeleteTasks } from '../../Utilities/ApiRequests'
import './index.css'


const Home = (props) => {

    const [newTask, setNewTask] = useState('')
    const [searchTask, setSearchTask] = useState('')
    const [tasks, setTasks] = useState([])
    const [showModal, setShowModal] = useState(false)

    const filteredTasks = tasks.filter((task) =>
        task.name.toLowerCase().startsWith(searchTask.toLowerCase())
    );

    const getTasks = async () => {
        const res = await GetTasks()
        if (!res || !res?.data) { return }

        const sorted = res.data.sort((a, b) => a.name.localeCompare(b.name));
        setTasks(res.data)
    }

    const handleAddTask = async () => {
        const data = {
            name: newTask,
            done: false,
        }

        const res = await CreateTask(data)
        if (!res) {
            console.log('could not create task')
            return
        }

        getTasks()
        setNewTask('')
    }

    const handleDeleteAllTasks = async () => {
        const res = await DeleteTasks()
        await getTasks()
        setShowModal(false)
    }

    const handleDoneTask = async (task) => {
        task.done = !task.done;
        setTasks([...tasks])

        await UpdateTask(task)
        await getTasks()
    }

    useEffect(() => {
        getTasks()
    }, [])

    const renderToDos = (task, index) => {
        return (
            <div key={`${index}`}>
                {
                    !task.done &&

                    <Card className="mt-2 bg-dark border-white text-white">
                        <Card.Body>
                            <div className="d-flex flex-row justify-content-between">
                                <Form.Check
                                    type="checkbox"
                                    id={`index-${index}`}
                                    onChange={() => handleDoneTask(task)}
                                    checked={task.done}
                                />
                                <div className="">{task.name}</div>
                            </div>
                        </Card.Body>
                    </Card>
                }
            </div>
        )
    }

    const renderDone = (task, index) => {
        return (
            <div key={`${index}`}>
                {task.done &&
                    < Card className="mt-2 bg-dark border-white text-white" >
                        <Card.Body>
                            <div className="d-flex flex-row justify-content-between">
                                <Form.Check
                                    type="checkbox"
                                    id={`index-${index}`}
                                    onChange={() => handleDoneTask(task)}
                                    checked={task.done}
                                />
                                <div className="">{task.name}</div>
                            </div>
                        </Card.Body>
                    </Card >
                }
            </div>
        )
    }

    return (
        <div className="bg-dark py-5" style={{ minHeight: '100vh' }}>
            <div className="container d-flex flex-row align-items-center justify-content-center" style={{ maxWidth: '800px' }}>
                <Card className="px-4 pb-4 w-100 bg-dark border-white text-white" style={{ maxWidth: '800px' }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                        <div className="row fw-bold fs-5 w-100 my-0 my-sm-4">
                            <div className="col-sm d-flex flex-row justify-content-start">ToDo List.</div>
                            <div className="col-sm-3">
                                <Button variant="danger" className="col-sm-2 mt-3 mt-sm-0 w-100" onClick={() => setShowModal(true)}>Delete All</Button>
                            </div>
                        </div>

                        <div className="row w-100">
                            
                                <Form className="col-sm-6 d-flex flex-row justify-content-start">
                                    <Form.Control className="me-3 ms-0 mt-3 mt-sm-0 bg-dark border-white text-white" type='text' placeholder="Add New Task..." value={newTask} onChange={(e) => { setNewTask(e.target.value) }}></Form.Control>
                                    <Button variant="primary mt-3 mt-sm-0" type='submit' onClick={() => handleAddTask()}>Add</Button>
                                </Form>
                            
                            <div className="col-2" />
                            <div className="col-sm d-flex flex-row justify-content-end">
                                <Form.Control className="ps-3 mt-3 mt-sm-0 bg-dark border-white text-white" type='text' placeholder="Search..." value={searchTask} onChange={(e) => setSearchTask(e.target.value)}></Form.Control>
                            </div>
                        </div>


                        <div className="row w-100 mt-4" >
                            <div className="col-md-6">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className=""> <BsList className="me-2"></BsList>To Do:</Accordion.Header>
                                        <Accordion.Body className="bg-dark text-white">
                                            {Array.isArray(filteredTasks) && filteredTasks.map(renderToDos)}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="col-md-6">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header> <BsListCheck className="me-2"></BsListCheck>Done:</Accordion.Header>
                                        <Accordion.Body className="bg-dark">
                                            {Array.isArray(filteredTasks) && filteredTasks.filter(task => task.done === true).slice(0, 10).map(renderDone)}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>

                    </Card.Body>
                </Card>
            </div>

            <Modal className="" show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton className="bg-dark text-white border-white">
                    <Modal.Title> <AiOutlineDelete className="me-2 mb-1"></AiOutlineDelete>Delete All Tasks</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-white border-white">Are you sure you want to delete all tasks?</Modal.Body>
                <Modal.Footer className="bg-dark text-white border-white">
                    <Button variant="outline-secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDeleteAllTasks}>
                        Delete All
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default Home;