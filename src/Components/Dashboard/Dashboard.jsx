import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
// import DashPessoas from "../DashPessoas/DashPessoas";
import DashDespesas from "../DashDespesas/DashDespesas";
// import DashAcertos from "../DashAcertos/DashAcertos";


const Dashboard = props => {
 
    return(
    
    <div>
        {/* // NAVBAR DASH */}
        <>
            < Navbar />
        </>
        {/* // OPTIONS TOGGLE */}

        <div className="dashMainMenu">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-outline-dark btn-yellow">
                        <NavLink to="/DashContas">Contas</NavLink>
                </label>
                <label className="btn btn-outline-dark btn-yellow">
                        <NavLink to="/DashContas">Contas</NavLink>
                </label>
                <label className="btn btn-outline-dark btn-yellow">
                        <NavLink to="/DashContas">Contas</NavLink>
                </label>
            </div>
        </div>
        <hr/>

        {/* // TOGGLE RESULT AREA */}
        <>
            <Switch>
                {/* <Route path="/DashPessoas" component={DashPessoas}/> */}
                <Route path="/DashDespesas" component={DashDespesas}/>
                {/* <Route path="/DashAcertos" component={DashAcertos}/> */}
            </Switch>
        </>
    </div>

  );
};


export default Dashboard;