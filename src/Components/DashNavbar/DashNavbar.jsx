import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

class DashNavbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      ID: this.props.ID,
      groupName: this.props.groupName,
      description: this.props.description
    }
  }
  render(){
    return(

      <>
        <Navbar />
    <h2>Grupo: {this.props.groupName}</h2>    {console.log(this.props.groupName)}
      
        <div className="dashContent row py-0 my-2">
          <div
            className="btn-group btn-group-toggle mx-auto my-0"
            data-toggle="buttons"
          >
            <NavLink
              to="/dashboard/pessoas"
              className="btn btn-outline-secondary btn-yellow-dashboard"
            >
              <input type="radio" name="options" id="dashPessoas" />
              Pessoas
            </NavLink>
  
            <NavLink
              to="/dashboard/despesas"
              className="btn btn-outline-secondary btn-yellow-dashboard"
            >
              <input type="radio" name="options" id="dashDespesas" />
              Despesas
            </NavLink>
  
            <NavLink
              to="/dashboard/acertos"
              className="btn btn-outline-secondary btn-yellow-dashboard"
            >
              <input type="radio" name="options" id="dashAcertos" />
              Acertos
            </NavLink>
          </div>
        </div>
        <hr className="my-2" />
      </>
    );
  };
}

export default DashNavbar;
