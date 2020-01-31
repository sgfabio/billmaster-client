import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Despesas from "../DashDespesas/DashDespesas"


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
                        <label  className="btn btn-outline-dark btn-yellow-dashboard active" active>
                            <input type="radio" name="options" id="dashPessoas"/>Pessoas
                        </label >
                        <label className="btn btn-outline-dark btn-yellow-dashboard">
                            <input type="radio" name="options" id="dashDespesas"/>Despesas
                        </label>
                    </div>
                </div >
                <hr/>
                {/* <!-- Main content --> */}
                <div className="dashMainContent">
                    <Despesas />
















                </div>{/*  <!-- close main --> */}
            </div> {/* <!-- close right side --> */}
        </div>  
  </>
  );
};


export default Dashboard;