
import React, { Component } from 'react';
import {Auth} from '../../util/api';
import { Link } from 'react-router-dom';

export class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange() and handleSubmit() will be added here
  handleFormSubmit(event) {
    event.preventDefault();
    Auth.login(this.state.username,this.state.password)
    .then( userObj => {
      console.log('userObj',userObj);
        this.setState({
            username: "", 
            password: "",
        });
        this.props.getUser(userObj)
    })
    .catch( error => console.log(error) )
  }
  
  // Populate this.state.username and this.state.password
  handleChange(event) {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          
          <label>Password:</label>
          <input name="password" value={this.state.password} onChange={this.handleChange} />
          
          <input type="submit" value="Login" />
        </form>
  
        <p>Don't have account? 
            <Link to={"/signup"}> Sign Up</Link>
        </p>
  
      </div>
    )
  }
}

export default Login 

