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
            Grupo: {}
        </div>
    </nav>


<div class="mt-2">
    <h2>BARRA DE NAV AQUI: Resumo, Gastos, Acertos</h2>
    <hr/>
</div>

    <p>
         Resumo dos gastos por participante
    </p>
    

    <div class="resultTable">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Integrante</th>
                    <th scope="col">Gastou</th>
                    <th scope="col">Consumiu</th>
                    <th scope="col">Saldo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Alison</td>
                    <td>R$200,00</td>
                    <td>R$350,00</td>
                    <td>- R$150,00</td>
                </tr>
                <tr>
                    <td>Reginaldo</td>
                    <td>R$100,00</td>
                    <td>R$220,00</td>
                    <td>- R$120,00</td>
                </tr>
                <tr>
                    <td>Fábio</td>
                    <td>R$500,00</td>
                    <td>R$310,00</td>
                    <td>R$190,00</td>
                </tr>
                <tr>
                    <td>Leonardo</td>
                    <td>R$320,00</td>
                    <td>R$240,00</td>
                    <td>R$80,00</td>
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