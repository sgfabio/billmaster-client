import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {auth} from '../../util/api';  // Importa componente de serviços de autenticação que conversam com a API
import ReportsSummary from '../ReportsSummary/ReportsSummary';
import ReportsBills from '../ReportsBills/ReportsBills';


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
                <h1> Relatório individual </h1>
                <div>
                    {/* Para testar o componente ReportsSummary, passar algum 'groupId' na prop abaixo  */}
                    <ReportsSummary groupId={'5e3c1dc6a4cbab45acf1bc82'}/>
                </div>

                <hr/>

                <h1> Todas as contas </h1>
                <div>
                    {/* Para testar o componente ReportsSummary, passar algum 'groupId' na prop abaixo  */}
                    <ReportsBills groupId={'5e3c1dc6a4cbab45acf1bc82'}/>
                </div>

            </div>
            <p>
                <Link className="" data-toggle="collapse" href="/" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Crie seu próprio grupo!
                </Link>
            </p>
        </div>
    )
};


export default Reports;
