import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css"

const Dashboard = props => {
  // const {group} = props.data;
  // {console.log(this.groups)
  return (
    <>
      <Navbar />
      <h1>OLHA ESSE H1</h1>
      <article>Estes são os seus grupos:</article><br/>

      <hr/>
      <div className="row m-1 d-flex justify-content-center">
        <div class="col-md-7 d-flex flex-column mt-1">
          <button class="btn btn-outline-secondary ">Botão com o nome do grupo</button>
        </div>
        <div class="col-md-4 p-0 ml-1 d-flex flex-row justify-content-center mt-1">
          <button class="btn btn-secondary mr-1">Relatório</button>
          <button class="btn btn-warning mr-1">Editar</button> 
          <button class="btn btn-danger">Excluir</button> 
        </div>
      </div>
      
      <hr/>
      <div className="row m-1 d-flex justify-content-center">
        <div class="col-md-7 d-flex flex-column mt-1">
          <button class="btn btn-outline-secondary ">Botão com o nome do grupo</button>
        </div>
        <div class="col-md-4 p-0 ml-1 d-flex flex-row justify-content-center mt-1">
          <button class="btn btn-secondary mr-1">Relatório</button>
          <button class="btn btn-warning mr-1">Editar</button> 
          <button class="btn btn-danger">Excluir</button> 
        </div>
      </div>
      <hr/>
      <div className="row m-1 d-flex justify-content-center">
        <div class="col-md-7 d-flex flex-column mt-1">
          <button class="btn btn-outline-secondary ">Botão com o nome do grupo</button>
        </div>
        <div class="col-md-4 p-0 ml-1 d-flex flex-row justify-content-center mt-1">
          <button class="btn btn-secondary mr-1">Relatório</button>
          <button class="btn btn-warning mr-1">Editar</button> 
          <button class="btn btn-danger">Excluir</button> 
        </div>
      </div>
      <hr/>
      <div className="row m-1 d-flex justify-content-center">
        <div class="col-md-7 d-flex flex-column mt-1">
          <button class="btn btn-outline-secondary ">Botão com o nome do grupo</button>
        </div>
        <div class="col-md-4 p-0 ml-1 d-flex flex-row justify-content-center mt-1">
          <button class="btn btn-secondary mr-1">Relatório</button>
          <button class="btn btn-warning mr-1">Editar</button> 
          <button class="btn btn-danger">Excluir</button> 
        </div>
      </div>
      <hr/>
      <div className="row m-1 d-flex justify-content-center">
        <div class="col-md-7 d-flex flex-column mt-1">
          <button class="btn btn-outline-secondary ">Botão com o nome do grupo</button>
        </div>
        <div class="col-md-4 p-0 ml-1 d-flex flex-row justify-content-center mt-1">
          <button class="btn btn-secondary mr-1">Relatório</button>
          <button class="btn btn-warning mr-1">Editar</button> 
          <button class="btn btn-danger">Excluir</button> 
        </div>
      </div>
      <hr/>
      <div className="row m-1 d-flex justify-content-center">
        <div class="col-md-7 d-flex flex-column mt-1">
          <button class="btn btn-outline-secondary ">Botão com o nome do grupo</button>
        </div>
        <div class="col-md-4 p-0 ml-1 d-flex flex-row justify-content-center mt-1">
          <button class="btn btn-secondary mr-1">Relatório</button>
          <button class="btn btn-warning mr-1">Editar</button> 
          <button class="btn btn-danger">Excluir</button> 
        </div>
      </div>
      <hr/>
      <div className="row m-1 d-flex justify-content-center">
        <div class="col-md-7 d-flex flex-column mt-1">
          <button class="btn btn-outline-secondary ">Botão com o nome do grupo</button>
        </div>
        <div class="col-md-4 p-0 ml-1 d-flex flex-row justify-content-center mt-1">
          <button class="btn btn-secondary mr-1">Relatório</button>
          <button class="btn btn-warning mr-1">Editar</button> 
          <button class="btn btn-danger">Excluir</button> 
        </div>
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
