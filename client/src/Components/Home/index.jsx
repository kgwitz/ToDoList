import React from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { useState } from "react";
import './index.css'


const Home = (props) => {

    const [newTask, setNewTask] = useState('')
    const [searchTask, setSearchTask] = useState('')

    return (
        <div className="" style={{ paddingTop: '4rem', height: '100vh' }}>
            <div className="container d-flex flex-row align-items-center justify-content-center" style={{ maxWidth: '800px' }}>
                <Card className="px-4 pb-4 w-100" style={{ maxWidth: '800px' }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                        <div className="row fw-bold fs-5 w-100 my-0 my-sm-4">
                            <div className="col-sm d-flex flex-row justify-content-start">ToDo List.</div>
                            <div className="col-sm-3">
                                <Button variant="outline-danger" className="col-sm-2 mt-3 mt-sm-0 w-100">Delete All</Button>
                            </div>
                        </div>
                        <div className="row w-100">
                            <div className="col-sm-6 d-flex flex-row justify-content-start">
                                <Form.Control className="me-3 ms-0 mt-3 mt-sm-0" type='text' placeholder="Add New Task..." value={newTask} onChange={(e) => setNewTask(e.target.text)}></Form.Control>
                                <Button variant="outline-primary mt-3 mt-sm-0">Add</Button>
                            </div>
                            <div className="col-2" />
                            <div className="col-sm d-flex flex-row justify-content-end">
                                <Form.Control className="ps-3 mt-3 mt-sm-0" type='text' placeholder="Search..." value={searchTask} onChange={(e) => setSearchTask(e.target.text)}></Form.Control>
                            </div>
                        </div>

                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Home;