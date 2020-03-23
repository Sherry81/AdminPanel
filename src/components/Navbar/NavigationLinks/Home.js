import React, { Component } from 'react';
import NavigationBar from '../NavigationBar';
import { Link } from "react-router-dom";
import '../NavigationLinks/Home.css';

class Home extends Component {
    render(){
        return (
            <div> 
                <NavigationBar/>
                <div className="allUsers">
                    <h2><Link to="/users">- See all users</Link></h2>
                </div>
                <div className="allPosts">
                    <h2><Link to="/posts">- See all posts</Link></h2>   
                </div>
            </div>
        );
    }
}

export default Home;
