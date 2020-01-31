import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
// import logo from './logo.svg';
import Index from "../Index/Index"
import Dashboard from "../Dashboard/Dashboard"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
          
      </div>
    );
  }
}

export default App;


//TODO IMPORTAR bootstrap CSS e JAVASCRIPT