import React, { Component } from "react";
import { Link } from "react-router-dom";



const Navbar = props => {
  return (
    /* ----------------------------------------------------------- NAVBAR INTERNA ----------------------------------------------------------- */
    // NAVBAR
    <>
    <nav className="navbar navbar-light bg-yellow justify-content-between">
      <div>
        <Link className="navbar-brand" to="/"><strong>BANANA</strong><em>SPLIT</em></Link>
      </div>

      <div className="dropdown ml-auto mr-3">

        <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          GRUPOS
        </button>

        <div className="dropdown-menu p-2" aria-labelledby="dropdownMenu2">

          <button className="btn btn-success dropdown-item bg-success text-white" type="button" data-toggle="modal" data-target="#creategroupbutton">
            Novo Grupo
          </button>

          <div className="dropdown-divider"></div>

          <button className="dropdown-item py-3" type="button">GRUPO-01</button> 
          {/* //TODO MAP - LISTA dos GRUPOS */}
          <button className="dropdown-item py-3" type="button">GRUPO-02</button>
        </div>

      </div>

      <div>
        <button type="button" className="btn btn-outline-dark">
          Sair
        </button>
      </div>

    </nav>

    // CREATE A GROUP MODAL

    <div className="modal fade" id="creategroupbutton" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">

      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">NOVO GRUPO</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <form>
              <div className="form-group">
                <label for="recipient" className="col-form-label">Digite um titulo para o grupo:</label>
                <input type="text" className="form-control" id="recipient"/>
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary">CRIAR</button>
          </div>

        </div>
      </div>
    </div>
    // {/* --------------------------------------------------------- FIM NAVBAR INTERNA ---------------------------------------------------------- */}
    </>
  );
};




export default Navbar;