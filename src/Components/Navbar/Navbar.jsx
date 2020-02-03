import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"



const Navbar = props => {
  return (
    /* ----------------------------------------------------------- NAVBAR INTERNA ----------------------------------------------------------- */
    <>
    <nav className="navbar navbar-light bg-yellow justify-content-between">
      <div>
        <Link className="navbar-brand" to="/"><strong>BANANA</strong><em>SPLIT</em></Link>
      </div>

      <div className="dropdown ml-auto mr-3 btn btn-outline-dark dropdown-toggle">
        <button className="dropbtn">Grupos</button>
        <div className="dropdown-content">
          <button className="btn btn-success dropdown-item bg-success text-white" type="button" data-toggle="modal" data-target="#creategroupbutton">
            Criar Grupo
          </button>
          <hr className="py-0 my-1"/>
          <button className="dropdown-item px-0" type="button">GRUPO-01</button> 
          <button className="dropdown-item px-0" type="button">GRUPO-02</button>
        </div>
      </div>

      <div>
        <button type="button" className="btn btn-outline-dark" type="button" data-toggle="modal" data-target="#logoutButton">
          Sair
        </button>
      </div>

    </nav>

    {/* // CREATE A GROUP MODAL */}

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

    {/* // CONFIRM LOGOUT MODAL */}

    <div className="modal fade" id="logoutButton" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Deseja realmente sair?</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="recipient" className="col-form-label"> SAD IMAGE </label>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" > Cancelar </button>
              <button type="button" className="btn btn-danger"> Sair </button>
            </div>
          </div>
        </div>
      </div>

      {/* //TODO input all modals in this area.... its gonna work??? */}




    {/* // --------------------------------------------------------- FIM NAVBAR INTERNA ---------------------------------------------------------- */}
    </>
  );
};




export default Navbar;