import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import { Nav, NavItem } from 'react-bootstrap';
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

        <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="" disabled>
            Disabled
            </Nav.Link>
        </Nav.Item>
        </Nav>


        <div className="dashMainMenu">
            <div className="" data-toggle="buttons">
                <label className=" active">
                        <NavLink to="/DashContas">Contas</NavLink>
                </label>
                <label className="">
                        <NavLink to="/DashContas">Contas</NavLink>
                </label>
                <label className="">
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