import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Dashboard = props => {
  return (
    <>
      <Navbar />
      <div className="dashContent row py-0 my-2">
          <div className="btn-group btn-group-toggle mx-auto my-0" data-toggle="buttons">

            <NavLink to="/dashboard/pessoas" className="btn btn-outline-dark btn-yellow-dashboard">
              <input type="radio" name="options" id="dashPessoas" />Pessoas</NavLink>

            <NavLink to="/dashboard/despesas"className="btn btn-outline-dark btn-yellow-dashboard">
              <input type="radio" name="options" id="dashDespesas" />Despesas</NavLink>

            <NavLink to="/dashboard/acertos" className="btn btn-outline-dark btn-yellow-dashboard">
              <input type="radio" name="options" id="dashAcertos" />Acertos</NavLink>

          </div>
      </div>
      <hr className="my-2"/>
    </>
  );
};

export default Dashboard;
