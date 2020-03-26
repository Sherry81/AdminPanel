import React, {Component} from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';
import './NavigationBar.css';

class NavigationBar extends Component {
  render(){
    return (
      <div className="App">
        <Navbar className="nav" bg="dark" variant="dark" expand="lg">
        <Sidebar />
        <Navbar.Brand as={Link} to ="/">Admin Panel</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav>
                <Nav.Link className="navLink" as={Link} to="/">Home</Nav.Link>
                <Nav.Link className="navLink" as={Link} to="/about">About</Nav.Link>
                <Nav.Link className="navLink" as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>   
      </div>
    );
  }
}
export default NavigationBar;
