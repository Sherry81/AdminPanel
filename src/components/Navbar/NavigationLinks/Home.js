import React, { Component } from 'react';
import NavigationBar from '../NavigationBar';
import { Link } from "react-router-dom";
import '../NavigationLinks/Home.css';
import Footer from '../../Footer/Footer';
import { Button, Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
    render(){
        return (
            <div className="homeComponent"> 
                <NavigationBar />
                <div class="homeContainer">
                    <div className="welcome">
                        <h2 className="welcomeHead">Welcome to the app</h2>
                    </div>
                    <div className="aboutAppInfo">
                        <h2 className="about">About the app</h2>
                        <p style={{'marginBottom': '0px'}}>
                            - You can view all your users and their posts by navigating from the sidebar
                        </p>
                        <p style={{'paddingTop': '0px', 'marginTop': '0px'}}>
                            - You can view every individual user details
                        </p>
                        <Container className="btnContainer">
                            <Row>
                                <Col className="viewBtn">
                                    <Button as={Link} to="/users" className="viewUsers">View users</Button>
                                </Col>
                                <Col className="viewBtn">
                                    <Button as={Link} to="/posts" className="viewPosts">View posts</Button>
                                </Col>
                            </Row>    
                        </Container>  
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;
