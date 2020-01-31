import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";
// import logo from './logo.svg';
import Index from "../Index/Index";
import Dashboard from "../Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Button } from 'reactstrap';
import DashAcertos from "../DashAcertos/DashAcertos";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dash-acertos" component={DashAcertos} />
        </Switch>

      </div>
    );
  }
}

export default App;

//TODO IMPORTAR bootstrap CSS e JAVASCRIPT
