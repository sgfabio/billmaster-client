import React, { Component } from "react";
import { Link } from "react-router-dom";
import {auth} from '../../util/api';  // Importa componente de serviços de autenticação que conversam com a API
import ReportsSummary from '../ReportsSummary/ReportsSummary'; //TESTE DO COMPONENTE NA HOME PAGE

export class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {username:'', password:''};
        
        //BINDS dos métodos
        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);
        this.handleSignUpFormSubmit = this.handleSignUpFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    // handleLoginFormSubmit(event)
    handleLoginFormSubmit(event) {
        event.preventDefault();
        auth.login(this.state.username, this.state.password)
        .then(userObj => {
            this.setState({
                username:'',
                password:'',
            });
            this.props.getUser(userObj)
        })
        .catch(error => console.log('erro handleSignUpFormSubmit:', error))
    }
    
    // handleSignUpFormSubmit(event)
    handleSignUpFormSubmit(event) {
        event.preventDefault();
        auth.signup(this.state.username, this.state.password)
        .then(userObj => {
            console.log('userObj do handleSignUpFormSubmit', userObj);
            this.setState({
                username:'',
                password:'',
            });
            this.props.getUser(userObj)
        })
        .catch(error => console.log('erro handleSignUpFormSubmit:', error))
    }

    // handleChange(event)
    handleChange(event){
        const {name, value} = event.target;
        this.setState({[name]: value});
        console.log("this.state.username:", this.state.username, " this.state.password:", this.state.password)
    }
    

    render(){

        return (
        <>
          <nav className="navbar navbar-light bg-yellow justify-content-between">
              <div>
                  <Link
                   className="navbar-brand" to="/"><strong>BANANA</strong><em>SPLIT</em></Link>
              </div>
              <div>
                  {/* <!-- Modal Triggers --> */}
                  <button type="button" className="btn btn-outline-secondary mr-3" data-toggle="modal" data-target="#loginbutton">
                      Entre
                  </button>
                  <button type="button" className="btn btn-outline-secondary" data-toggle="modal" data-target="#signupbutton">
                      Cadastre-se
                  </button>
              </div>
          </nav>
        
      
          {/* <!-- CONTENT --> */}
          <div>
              <h1>Aquele título top</h1>
              <p>Um textão bonito aqui pra chamar atenção</p>
              <p>Outro texto, mas agora explicando como funciona</p>
          </div>
          <div>
              <h1> ReportsSummary  </h1>
              <div>
                  {/* Para testar o componente ReportsSummary, passar algum 'groupId' na prop abaixo  */}
                  {/* <ReportsSummary groupId={'5e39a5dcd92dfc45cc871308'}/> */}
              </div>
          </div>
          
      
          {/* <!-- LOGIN MODAL DELETAR DAQUI  --> */}
          <div className="modal fade" id="loginbutton" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title">Dados de acesso</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>

                      <div className="modal-body">
                          <form  onSubmit={this.handleLoginFormSubmit} >
                              <div className="form-group">
                                  <label htmlFor="recipient-user" className="col-form-label">Usuário:</label>
                                  <input type="text" className="form-control" id="recipient-user" name='username' value={this.state.username} onChange={this.handleChange}/>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="recipient-password" className="col-form-label">Senha:</label>
                                  <input type="password" className="form-control" id="recipient-password" name='password' value={this.state.password} onChange={this.handleChange} />
                              </div>
                              
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                          {/* <button type="submit" onClick={this.handleLoginFormSubmit} className="btn btn-primary" data-dismiss="modal">Entrar</button> */}
                            <input type="submit" value="Entrar" className="btn btn-primary" />
                      </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      
          {/* <!-- SIGNUP MODAL --> */}
          <div className="modal fade" id="signupbutton" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title">Dados para cadastro</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div className="modal-body">
                      
                          <form onSubmit={this.handleSignUpFormSubmit}>
                              <div className="form-group">
                                  <label htmlFor="recipient-usuario" className="col-form-label">Usuário:</label>
                                  <input type="text" className="form-control" id="recipient-usuario" name='username' value={this.state.username} onChange={this.handleChange}/>
                              </div>
                              {/* API ainda não recebe e-mail para o signup */}
                              {/* <div className="form-group">
                                  <label htmlFor="recipient-email" className="col-form-label">E-mail:</label>
                                  <input type="email" className="form-control" id="recipient-email"/>
                              </div> */}
                              <div className="form-group">
                                  <label htmlFor="recipient-password" className="col-form-label">Senha:</label>
                                  <input type="password" className="form-control" id="recipient-password" name='password' value={this.state.password} onChange={this.handleChange} />
                              </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                          <button type="submit" className="btn btn-primary">CRIAR</button>
                      </div>
                          </form>
                          
                      </div>
                  </div>
              </div>
          </div>
        </>
        );
      };
        
    } //render


export default Index;