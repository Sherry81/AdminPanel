import React, { Component } from 'react';
import './App.css';
import Home from './components/Navbar/NavigationLinks/Home';
import About from './components/Navbar/NavigationLinks/About';
import Contact from './components/Navbar/NavigationLinks/Contact';
import SingleUser from './components/SingleUser';
import Users from './components/Users';
import Posts from './components/Posts';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {

render(){
  return (
    <div className="App">
      <Router>
        <Switch>     
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route exact path="/users/:id" render={(props) => <SingleUser  {...props} />}></Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />  
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
}

export default App;
