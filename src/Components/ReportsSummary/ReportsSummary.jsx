import React, { Component } from "react";
import { Link } from "react-router-dom";
import {groups} from '../../util/api'       // Groups component from API service 

class ReportsSummary extends Component {
    constructor(props){
        super(props);
        this.state = {msg:'', balances: []};

        //BINDS

    }

    componentDidMount() {
        groups.getBalance('5e39a5dcd92dfc45cc871308')
        .then(qryObj => {
            console.log('componentDidMount',qryObj);
            this.setState({msg: qryObj.data.msg, balances:qryObj.data.queryResult}, () => console.log(this.state) )

        })
        .catch(error => console.log('erro ReportSummary', error))

    }


    //Teste Enxertar o GoupID=5e39a5dcd92dfc45cc871308 e testar a API e renderização da tabela com os saldos
    //03. TODO Receber Prop com um GroupID e bater na API [ http://localhost:5000/api/groups/5e39a5dcd92dfc45cc871308/balance ]e renderizar os saldos que vierem 
    
   


    render(){
                
        if (this.state.balances) {//Conditional return 
            return(
            <div>
                <nav className="navbar navbar-light bg-yellow justify-content-between">
                    <div>
                        <a className="navbar-brand"><strong>BANANA</strong><em>SPLIT</em></a>
                    </div>
                    <div>
                        Grupo: {}
                    </div>
                </nav>
            
            <div className="mt-2">
                <h2>BARRA DE NAV AQUI: Resumo, Gastos, Acertos</h2>
                <hr/>
            </div>
            
                <p>
                    Resumo dos gastos por participante
                </p>
                
            
                <div className="resultTable">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Integrante</th>
                                <th scope="col">Gastou</th>
                                <th scope="col">Pagou</th>
                                <th scope="col">Recebeu</th>
                                <th scope="col">Rateio</th>
                                <th scope="col">Saldo</th>
                            </tr>
                        </thead>
                        <tbody>
            
                            {/* Map que recebe os registros da API e cria uma row de tabela - vide exemplo abaixo */}
                            {this.state.balances.map((qry, idx) => {
                                return (
                                    <tr key={idx} >    
                                        <td>{qry.member}</td>
                                        <td>{qry.expensePaid}</td>
                                        <td>{qry.settlePaid}</td>
                                        <td>{qry.settleReceived}</td>
                                        <td>{qry.share}</td>
                                        <td>{qry.balance}</td>
                                    </tr>
                                )
                            })}
    
                        </tbody>
                    </table>
                </div>
                <br/>
                <hr/>
                <br/>
            
                <p>
                    <a className="" data-toggle="collapse" href="/" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Crie seu próprio grupo!
                    </a>
                </p>
            </div>
            )
        } else { //Conditional return FALSE
            return(
                <div>
                    <h1>Carregando...</h1>
                </div>
            )
        }
    }//render()
}//ReportsSummary

export default ReportsSummary