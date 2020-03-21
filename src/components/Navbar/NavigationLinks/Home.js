import React, { Component } from 'react';
import NavigationBar from '../NavigationBar';
import Users from '../../Users';

class Home extends Component {
    render(){
        return (
            <div>
              <NavigationBar />
              <Users />
            </div>
          );
    }
  
}

export default Home;
