import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const ReportSummary = props => {
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
            <a class="" data-toggle="collapse" href="#infos" role="button" aria-expanded="false" aria-controls="collapseExample">
                Como funciona?
            </a>
        </p>
        <div class="collapse" id="infos">
            <div class="card card-body">
                <p class="justify">Nós do <strong>BANANA</strong><em>SPLIT</em>, além de calcularmos o quanto cada membro do grupo deve receber ou pagar, 
                    sugerimos uma forma mais inteligente para dividir suas contas, onde cada um deve fazer apenas uma transferência.
                    Para isso, basta seguir a sugestão abaixo e informar o administrador do grupo que o pagamento foi feito.
                </p>
            </div>
        </div>
            

        <div class="resultTable">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Pagante</th>
                        <th scope="col">Receber</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>{Settle.paidBy}</td>
                        <td>{Settle.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                        <td>{Settle.paidTo}</td>
                    </tr> */}
                    <tr>
                        <td>Reginaldo</td>
                        <td>R$270,00</td>
                        <td>Fábio</td>
                    </tr>
                    <tr>
                        <td>Fábio</td>
                        <td>R$80,00</td>
                        <td>Leonardo</td>
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


export default ReportSummary;