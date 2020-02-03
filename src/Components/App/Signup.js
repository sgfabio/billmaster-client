
import React, { Component } from 'react';
import {Auth} from '../../util/api';
import { Link } from 'react-router-dom';

export class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange() and handleSubmit() will be added here
  handleFormSubmit(event) {
    event.preventDefault();
    Auth.signup(this.state.username,this.state.password)
    .then( userObj => {
      console.log(userObj);
        this.setState({
            username: "", 
            password: "",
        });
        this.props.getUser(userObj)
    })
    .catch( error => console.log(error) )
  }
  
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
          
          <input type="submit" value="Signup" />
        </form>
  
        <p>Already have account? 
            <Link to={"/"}> Login</Link>
        </p>
  
      </div>
    )
  }
}

export default Signup 

