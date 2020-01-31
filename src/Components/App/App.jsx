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
<<<<<<< HEAD
import Despesas from "../DashDespesas/DashDespesas"
=======
import { Button } from 'reactstrap';
import DashAcertos from "../DashAcertos/DashAcertos";
>>>>>>> 9890c9639f02c8703e39879dc2d112d57c800279


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/dashboard" component={Dashboard} />
<<<<<<< HEAD
          <Route exact path="/dashboard/despesas" component={Despesas} />
=======
          <Route exact path="/dash-acertos" component={DashAcertos} />
>>>>>>> 9890c9639f02c8703e39879dc2d112d57c800279
        </Switch>

      </div>
    );
  }
}

export default App;

//TODO IMPORTAR bootstrap CSS e JAVASCRIPT
