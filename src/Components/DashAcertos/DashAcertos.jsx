import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashNavbar from "../DashNavbar/DashNavbar"


const DashAcertos = props => {
  return (
      <>
      <DashNavbar />

    <div className="dashMainContent">
        {/* <!-- Add bills --> */}
        <h2>Adicionar novo acerto:</h2>
        <div className="dashAddBills d-flex justify-content-between align-items-end flex-wrap px-4">
            <div className="form-group text-left col-lg-3 mt-1 mb-0 p-0">
                Pagou:
                <select className="form-control" placeholder="Quem pagou?">
                    <option>Member 01</option>
                    <option>Member 02</option>
                    <option>Member 03</option>
                    <option>Member 04</option>
                    <option>Member 05</option>
                </select>
            </div>
            <div className="form-group text-left col-lg-3 mb-0 mt-1 p-0">
                Recebeu:
                <select className="form-control" placeholder="Quem pagou?">
                    <option>Member 01</option>
                    <option>Member 02</option>
                    <option>Member 03</option>
                    <option>Member 04</option>
                    <option>Member 05</option>
                </select>
                
            </div>
            <div className="form-group text-left col-lg-2 mb-0 mt-1 p-0">
                Valor:
                <input type="number" className="form-control" min="0.00" max="10000.00" step="0.01" id="acertoValor" placeholder="R$ 10,00"/>
            </div>
            <button type="submit" className="btn btn-warning mt-2 col-lg-2">Submit</button>
        </div>
        <hr/>
        {/* <!-- Bills list --> */}
        <div className="dashBillsList">
            <div className="row">
                <div className="col-lg-6 p-0 my-1">
                    <button className="btn btn-outline-dark col-10">FULANO pagou para CICLANO o valor de VALOR</button>
                    <button className="btn btn-danger col-1 mx-1"  type="button" data-toggle="modal" data-target="#deleteButton">X</button>
                </div>
                <div className="col-lg-6 p-0 my-1">
                    <button className="btn btn-outline-dark col-10">FULANO pagou para CICLANO o valor de VALOR</button>
                    <button className="btn btn-danger col-1 mx-1"  type="button" data-toggle="modal" data-target="#deleteButton">X</button>
                </div>
                <div className="col-lg-6 p-0 my-1">
                    <button className="btn btn-outline-dark col-10">FULANO pagou para CICLANO o valor de VALOR</button>
                    <button className="btn btn-danger col-1 mx-1"  type="button" data-toggle="modal" data-target="#deleteButton">X</button>
                </div>
                <div className="col-lg-6 p-0 my-1">
                    <button className="btn btn-outline-dark col-10">FULANO pagou para CICLANO o valor de VALOR</button>
                    <button className="btn btn-danger col-1 mx-1"  type="button" data-toggle="modal" data-target="#deleteButton">X</button>
                </div>
                <div className="col-lg-6 p-0 my-1">
                    <button className="btn btn-outline-dark col-10">FULANO pagou para CICLANO o valor de VALOR</button>
                    <button className="btn btn-danger col-1 mx-1"  type="button" data-toggle="modal" data-target="#deleteButton">X</button>
                </div>
                <div className="col-lg-6 p-0 my-1">
                    <button className="btn btn-outline-dark col-10">FULANO pagou para CICLANO o valor de VALOR</button>
                    <button className="btn btn-danger col-1 mx-1"  type="button" data-toggle="modal" data-target="#deleteButton">X</button>
                </div>
                <div className="col-lg-6 p-0 my-1">
                    <button className="btn btn-outline-dark col-10">FULANO pagou para CICLANO o valor de VALOR</button>
                    <button className="btn btn-danger col-1 mx-1"  type="button" data-toggle="modal" data-target="#deleteButton">X</button>
                </div>
            </div>
        </div>
    </div>


    {/* // CONFIRM EXCLUSION MODAL */}

    <div className="modal fade" id="deleteButton" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Deseja realmente remover?</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient" className="col-form-label"> O pagamento de FULANO para CICLANO </label>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" > Cancelar </button>
              <button type="button" className="btn btn-danger"> Excluir </button>
            </div>
          </div>
        </div>
      </div>






      </>
  );
};


export default DashAcertos;