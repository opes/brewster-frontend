import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import './App.css';
import Home from './Home.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import About from './About.js';

export default class App extends Component {

render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) => <Login {...routerProps} />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) => <SignUp {...routerProps} />}
            />
            <Route
              path="/about"
              exact
              render={(routerProps) => <About {...routerProps} />}
            />
            {/* <Route
              path="/citations"
              exact
              render={(routerProps) => <Citations {...routerProps} />}
            /> */}
          </Switch>
        </div>
      </Router>
    );
  }
};

