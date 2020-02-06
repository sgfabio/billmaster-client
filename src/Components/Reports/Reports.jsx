import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {auth} from '../../util/api';  // Importa componente de serviços de autenticação que conversam com a API
import ReportsSummary from '../ReportsSummary/ReportsSummary'; //TESTE DO COMPONENTE NA HOME PAGE

const Reports = props => {
    return(
        <div>
        {/* Navbar */}
            <nav className="navbar navbar-light bg-yellow justify-content-between">
                <div>
                    <Link
                    className="navbar-brand" to="/"><strong>BANANA</strong><em>SPLIT</em></Link>
                </div>
                <div>
                    <Link to="/">
                        <button type="button" className="btn btn-outline-secondary mr-3" data-toggle="modal" data-target="#loginbutton">
                            Início
                        </button>
                    </Link>
                </div>
            </nav>

            <div>
                <h1> ReportsSummary </h1>
                <div>
                    {/* Para testar o componente ReportsSummary, passar algum 'groupId' na prop abaixo  */}
                    <ReportsSummary groupId={'5e3c1dc6a4cbab45acf1bc82'}/>
                </div>
            </div>
        </div>
    )
};


export default Reports;
