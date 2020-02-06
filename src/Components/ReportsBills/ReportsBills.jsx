import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";



const ReportsBills = props => {
  return (
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

{/* Navegação */}
    <div className="dashContent row py-0 my-2">
        <div
        className="btn-group btn-group-toggle mx-auto my-0"
        data-toggle="buttons"
        >
        <NavLink
            to="/reports/bills"
            className="btn btn-outline-secondary btn-yellow-dashboard"
        >
            <input type="radio" name="options" id="reportsBills" />
            Contas
        </NavLink>

        <NavLink
            to="/reports/summary"
            className="btn btn-outline-secondary btn-yellow-dashboard"
        >
            <input type="radio" name="options" id="reportsSummary" />
            Resumo
        </NavLink>

        <NavLink
            to="/reports/settle"
            className="btn btn-outline-secondary btn-yellow-dashboard"
        >
            <input type="radio" name="options" id="reportsSettle" />
            Acertos
        </NavLink>
        </div>
    </div>
    <hr className="my-2" />


    <p>
        Resumo dos gastos do grupo
    </p>
        

    <div class="resultTable">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Integrante</th>
                    <th scope="col">Título</th>
                    <th scope="col">Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Alison</td>
                    <td>Pipoca</td>
                    <td>R$20,00</td>
                </tr>
                <tr>
                    <td>Leonardo</td>
                    <td>Starbucks</td>
                    <td>R$35,00</td>
                </tr>
                <tr>
                    <td>Fábio</td>
                    <td>Vinho</td>
                    <td>R$90,00</td>
                </tr>
                <tr>
                    <td>Leonardo</td>
                    <td>Carne p/ churrasco</td>
                    <td>R$240,00</td>
                </tr>
                <tr>
                    <td>Alison</td>
                    <td>Pipoca</td>
                    <td>R$20,00</td>
                </tr>
                <tr>
                    <td>Leonardo</td>
                    <td>Starbucks</td>
                    <td>R$35,00</td>
                </tr>
                <tr>
                    <td>Fábio</td>
                    <td>Vinho</td>
                    <td>R$90,00</td>
                </tr>
                <tr>
                    <td>Leonardo</td>
                    <td>Carne p/ churrasco</td>
                    <td>R$240,00</td>
                </tr>
            </tbody>
        </table>
    </div>
    <br/>
    <hr/>
    <br/>

    <p>
        <Link class="" data-toggle="collapse" to="/" role="button" aria-expanded="false" aria-controls="collapseExample">
            Crie seu próprio grupo!
        </Link>
    </p>
</div>
);
};


export default ReportsBills;