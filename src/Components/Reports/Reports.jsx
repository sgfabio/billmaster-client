import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {auth} from '../../util/api';  // Importa componente de serviços de autenticação que conversam com a API
import ReportsSummary from '../ReportsSummary/ReportsSummary';
import ReportsBills from '../ReportsBills/ReportsBills';
import ReportsSettle from '../ReportsSettle/ReportsSettle';


const Reports = props => {
    return(
        <div>
            <div>
                <h1> Resumo dos acertos </h1>
                <div>
                    {/* Para testar o componente ReportsSummary, passar algum 'groupId' na prop abaixo  */}
                    <ReportsSettle groupId={'5e3c1dc6a4cbab45acf1bc82'}/>
                </div>

                <hr/>

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
                <Link className="" data-toggle="collapse" to="/" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Crie seu próprio grupo!
                </Link>
            </p>
        </div>
    )
};


export default Reports;
