import React, { Component } from "react";
import { Link , NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Despesas from "../DashDespesas/DashDespesas"
import Index from "../Index/Index"


const Dashboard = props => {
  return (
  <>
  <Navbar />
  {/* <!-- CONTENT --> */}
        <div className="dashContent row">
            {/* <!-- RIGHT SIDE --> */}
            <div className="dashRight">
                {/* <!-- Top Main Menu --> */}
                <div className="dashMainMenu">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">

                        <NavLink to="/dashboard/despesas" className="btn btn-outline-dark btn-yellow-dashboard active" active>
                            <input type="radio" name="options" id="dashPessoas"/>Pessoas
                        </NavLink >

                        <NavLink to="/dashboard/index" className="btn btn-outline-dark btn-yellow-dashboard">
                            <input type="radio" name="options" id="dashDespesas"/>Despesas
                        </NavLink>

                        <label className="btn btn-outline-dark btn-yellow-dashboard">
                            <input type="radio" name="options" id="/dashDespesas"/>Acertos
                        </label>

                    </div>
                </div >
                <hr/>
                {/* <!-- Main content --> */}
                <div className="dashMainContent">
                <Switch>
                    <Route exact path="/despesas" component={Despesas} />
                    <Route exact path="/index" component={Index} />
                    {/* <Route exact path="/despesas" component={Despesas} /> */}
                    {/* <Route exact path="/" component={Despesas} /> */}
                </Switch>

                    {/* <NavLink to="/about">About</NavLink> */}
















                </div>{/*  <!-- close main --> */}
            </div> {/* <!-- close right side --> */}
        </div>  
  </>
  );
};


export default Dashboard;