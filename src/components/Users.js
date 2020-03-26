import React, { Component } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import Axios from 'axios';
import { Link } from "react-router-dom";
import NavigationBar from './Navbar/NavigationBar';
import Sidebar from './Navbar/Sidebar';
import '../Users.css'
import Footer from './Footer';

class Users extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            show: false,
            setShow: false
        }
    }

    handleShow = () =>{
        this.setState({show: true})
    }
    handleClose = () =>{
        this.setState({show: false})
    }

    getUsers(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(json =>
        this.setState({users: json.data}))
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getUsers();
    }

    render(){
        var i = 0;
        return (
            <div className="usersComponent">
                
                <NavigationBar />
                <Sidebar/>
                <div className="users">
                {!this.state.users[0] ? null : (
                <div className="addUser">
                    <h1 className="usersHead">Users</h1>
                    <span>
                    <Button onClick={this.handleShow} className="justify-content-end">Add user</Button>
                    </span>
                </div>)}
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Add a user</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form>
                            <Form.Group controlId="name">
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>

                            <Form.Group controlId="username">
                                <Form.Control type="text" placeholder="Enter username" />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="phone">
                                <Form.Control type="number" placeholder="Enter phone number" />
                            </Form.Group>
                            <Form.Group controlId="companyName">
                                <Form.Control type="text" placeholder="Enter company name" />
                            </Form.Group>
                            <Form.Group controlId="address">
                                <Form.Control type="email" placeholder="Enter address" />
                            </Form.Group>
                        </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                {!this.state.users[0] ? <div className="loading">Loading...</div> : (
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>UserID</th>
                                <th>Name</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.map(user=> {
                                    i++;
                                    return (
                                        <tr key={user.id}>
                                            <td>{i}</td>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td><Button as={Link} to={`/users/${user.id}`} className="btn-success viewBtn">VIEW</Button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>) }
                </div>
            {this.state.users[0] ? <Footer/> : null}
            </div>
        );
    }
  
}
export default Users;
