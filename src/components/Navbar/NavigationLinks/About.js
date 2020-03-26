import React, { Component } from 'react';
import NavigationBar from '../NavigationBar';
import Footer from '../../Footer/Footer';
import './About.css'

class About extends Component {
    render(){
        return (
            <div>
            <NavigationBar/>
            <div className="aboutApp">
                <h2 className="about">About the app</h2>
                <p>
                    - You can view all your users and their posts by navigating from the sidebar
                </p>
                <p>
                    - You can view every individual user details
                </p>
            </div>
            <Footer/>
            </div>
        );
    }
}

export default About;
