import React from 'react';
import './App.css';
import Home from './components/Navbar/NavigationLinks/Home';
import About from './components/Navbar/NavigationLinks/About';
import Contact from './components/Navbar/NavigationLinks/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
