import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Dashboard = props => {
  // const {group} = props.data;
  // {console.log(this.groups)
  return (
    <>
      <Navbar />
      <h1>OLHA ESSE H1</h1>
      <article>EXPLICANDO COMO FAZ</article>



      

      }
      <div className="float-sm d-flex justify-content-center my-2 bg-dark">
        {/* <button type="button" className="btn btn-secondary my-2 mx-1 mb-2">Status</button> */}
        {/* <button type="button" className="btn btn-success my-2 mx-1 mb-2">Success</button> */}
        <button type="button" className="btn btn-warning my-2 mx-1 mb-2"> Editar </button>
        <button type="button" className="btn btn-danger my-2 mx-1 mb-2"> Excluir </button>
      </div>
      {/* <div className="dashContent row py-0 my-2">
          <div className="btn-group btn-group-toggle mx-auto my-0" data-toggle="buttons">

            <NavLink to="/dashboard/pessoas" className="btn btn-outline-dark btn-yellow-dashboard">
              <input type="radio" name="options" id="dashPessoas" />Pessoas</NavLink>

            <NavLink to="/dashboard/despesas"className="btn btn-outline-dark btn-yellow-dashboard">
              <input type="radio" name="options" id="dashDespesas" />Despesas</NavLink>

            <NavLink to="/dashboard/acertos" className="btn btn-outline-dark btn-yellow-dashboard">
              <input type="radio" name="options" id="dashAcertos" />Acertos</NavLink>

          </div>
      </div>
      <hr className="my-2"/> */}
    </>
  );
};

export default Dashboard;
