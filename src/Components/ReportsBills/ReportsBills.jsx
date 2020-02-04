import React, { Component } from "react";
import { Link } from "react-router-dom";

const ReportsBills = props => {
  return (
<div>
    <nav class="navbar navbar-light bg-yellow justify-content-between">
        <div>
            <a class="navbar-brand"><strong>BANANA</strong><em>SPLIT</em></a>
        </div>
        <div>
                Grupo: {buscar.nome.grupo}
        </div>
    </nav>

    <div class="mt-2">
        <h2>BARRA DE NAV AQUI: Resumo, Gastos, Acertos</h2>
        <hr/>
    </div>

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
        <a class="" data-toggle="collapse" href="/" role="button" aria-expanded="false" aria-controls="collapseExample">
            Crie seu próprio grupo!
        </a>
    </p>
</div>
);
};


export default ReportsBills;