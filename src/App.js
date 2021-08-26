import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import Team from './pages/Team.js';
import Resources from './pages/Resources.js';
import About from './pages/About.js';
import Landing from './pages/Landing.js';
import EndPoint from "./pages/EndPoints.js";
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
              path="/team"
              exact
              render={(routerProps) => <Team {...routerProps} />}
            />
            <Route
              path="/resources"
              exact
              render={(routerProps) => <Resources {...routerProps} />}
            />
              <Route
              path="/about"
              exact
              render={(routerProps) => <About {...routerProps} />}
            />
            <Route
            path="/landing"
            exact
            render={(routerProps) => <Landing {...routerProps} />}
          />
            <Route
            path="/endPoints"
            exact
            render={(routerProps) => <EndPoint {...routerProps} />}
          />
          </Switch>
        </div>
      </Router>
    );
  }
};

