import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";
// import logo from './logo.svg';
import Index from "../Index/Index";
import Dashboard from "../Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from 'jquery'; ----SE DER PAU usar $(document).ready()
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Pessoas from "../DashPessoas/DashPessoas"
import Despesas from "../DashDespesas/DashDespesas"
import Acertos from "../DashAcertos/DashAcertos"


const fakeGroups = [
  {},
  {}
]

class App extends Component {
   // stateful..
  
   // esse componente guarda no state uma lista de grupos do usuário logado

  //  createGroup(newGroup) {
    //  this.setState(lista de grupos)
  //  }
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index} />
          {/* <Routue exact path="/dashboard" component={Dashboard} /> */}
          <Route exact path="/" render={(props) => {
            return (
            <Dashboard
            // data={this.state.data} manda a lista de grupos para esse componente
            {...props} />
              )
          }} />

          <Route exact path="/dashboard/pessoas" component={Pessoas} />
          <Route exact path="/dashboard/despesas" component={Despesas} />
          <Route exact path="/dashboard/acertos" component={Acertos} />
        </Switch>

      </div>
    );
  }
}

export default App;

