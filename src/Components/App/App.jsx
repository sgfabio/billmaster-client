import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import Index from "../Index/Index"
import RandomBeer from "./components/Random-beer"
import NewBeer from "./components/New-beer"
import Main from "./components/Main"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/all-beers" component={Beers}/>
        </Switch>
          
      </div>
    );
  }
}

export default App;


//TODO IMPORTAR bootstrap CSS e JAVASCRIPT