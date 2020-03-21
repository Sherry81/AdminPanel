import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Admin panel</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>   
    </div>
  );
}





export default NavigationBar;
