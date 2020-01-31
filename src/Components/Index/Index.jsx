import React, { Component } from "react";
import { Link } from "react-router-dom";

const Index = props => {
  return (
    // <!-- NAVBAR GERAL -->
    <nav className="navbar navbar-light bg-yellow justify-content-between">
      <div>
          <Link className="navbar-brand" to="/"><strong>BANANA</strong><em>SPLIT</em></Link> //TODO TO="" onde ? auth?
      </div>
      <div>
          {/* Modal Triggers */}
          <button type="button" className="btn btn-outline-dark" data-toggle="modal" data-target="#loginbutton">
              Entre
          </button>
          <button type="button" className="btn btn-outline-dark" data-toggle="modal" data-target="#signupbutton">
              Cadastre-se
          </button>
      </div>
    </nav>
  

    // <!-- CONTENT -->
    <div>
      <h1>Aquele título top</h1>
      <p>Um textão bonito aqui pra chamar atenção</p>
      <p>Outro texto, mas agora explicando como funciona</p>
    </div>

    // <!-- SIGNIN MODAL -->
    <div className="modal fade" id="loginbutton" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Dados de acesso</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label for="recipient-email" className="col-form-label">Usuário:</label>
                <input type="email" className="form-control" id="recipient-email"/>
              </div>
              <div className="form-group">
                <label for="recipient-password" className="col-form-label">Senha:</label>
                <input type="password" className="form-control" id="recipient-password"/>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary">Entrar</button>
          </div>
        </div>
      </div>
    </div>

    // SIGNUP MODAL
    <div className="modal fade" id="signupbutton" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Dados para cadastro</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label for="recipient-email" className="col-form-label">Usuário:</label>
                <input type="email" className="form-control" id="recipient-email"/>
              </div>
              <div className="form-group">
                <label for="recipient-password" className="col-form-label">Senha:</label>
                <input type="password" className="form-control" id="recipient-password"/>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary">Entrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Index;