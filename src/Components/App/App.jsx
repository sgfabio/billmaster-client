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


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/dashboard" component={Dashboard} />
        {/* <Link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        /> */}
        </Switch>

      </div>
    );
  }
}

export default App;

//TODO IMPORTAR bootstrap CSS e JAVASCRIPT
