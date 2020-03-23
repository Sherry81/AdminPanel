import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import Axios from 'axios';
import { Link } from "react-router-dom";
import NavigationBar from './Navbar/NavigationBar';
import '../Users.css'


class Users extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
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
            <div>
                <NavigationBar />
                <h2 className="heading">Users</h2>
                {!this.state.users[0] ? <div className="loading">Loading...</div> : (
                    <div><Table striped bordered hover>
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
                                        <td><Button as={Link} to={`/users/${user.id}`} className="btn-success">VIEW</Button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <div className="addUserBtn">
                    <Button className="justify-content-between">Add user</Button>
                    </div>
                    </div>
                    ) 
                }
            </div>
        );
    }
  
}

export default Users;
