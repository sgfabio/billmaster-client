import React, { Component } from "react";
import { Link } from "react-router-dom";

const ReportSummary = props => {
  return (
    <div>
        <nav class="navbar navbar-light bg-yellow justify-content-between">
            <div>
                <a class="navbar-brand"><strong>BANANA</strong><em>SPLIT</em></a>
            </div>
            <div>
                    Grupo: {Group.groupName}
            </div>
        </nav>
        <div class="mt-2">
            <h2>BARRA DE NAV AQUI: Resumo, Gastos, Acertos</h2>
            <hr/>
        </div>
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
                    <tr>
                        <td>{Settle.paidBy}</td>
                        <td>{Settle.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                        <td>{Settle.paidTo}</td>
                    </tr>
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
                <a class="" data-toggle="collapse" href="/" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Crie seu próprio grupo!
                </a>
            </p>
    </div>
);
};


export default ReportSummary;