import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import {Auth} from '../../util/api'

class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.getTheUser = this.getTheUser.bind(this);
  }

  getTheUser(userObj) {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {

    //TESTAR O MÉTODO AQUI PRIMEIRO:
    // console.log(Auth.signup('fabio6','12345678'))
    
    return (
      <div className="App">
        <Switch>
          <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
          <Route exact path='/' render={() => <Login getUser={this.getTheUser}/>}/>
        </Switch>
      </div>
    );
  }
  // console.log("this.state:", this.state)
}

export default App;