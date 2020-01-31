import React, { Component } from "react";
import { Link } from "react-router-dom";

const DashAcertos = props => {
  return (
    <div class="dashMainContent">
        {/* <!-- Add bills --> */}
        <h2>Adicionar novo acerto:</h2>
        <div class="dashAddBills d-flex justify-content-between align-items-end flex-wrap px-4">
            <div class="form-group text-left col-lg-3 mt-1 mb-0 p-0">
                Pagou:
                <select class="form-control" placeholder="Quem pagou?">
                    <option>Default select</option>
                    <option>Default select</option>
                    <option>Default select</option>
                    <option>Default select</option>
                    <option>Default select</option>
                </select>
            </div>
            <div class="form-group text-left col-lg-3 mb-0 mt-1 p-0">
                Recebeu:
                <select multiple class="form-control" placeholder="Quem pagou?">
                    <option><input type="checkbox" class="form-check-input" id="exampleCheck1" value="Default select"/></option>
                    <option><input type="checkbox" class="form-check-input" id="exampleCheck1" value="Default select"/></option>
                    <option><input type="checkbox" class="form-check-input" id="exampleCheck1" value="Default select"/></option>
                    <option><input type="checkbox" class="form-check-input" id="exampleCheck1" value="Default select"/></option>
                    <option><input type="checkbox" class="form-check-input" id="exampleCheck1" value="Default select"/></option>
                </select>
                
            </div>
            <div class="form-group text-left col-lg-2 mb-0 mt-1 p-0">
                Valor:
                <input type="number" class="form-control" min="0.00" max="10000.00" step="0.01" id="acertoValor" placeholder="R$ 10,00"/>
            </div>
            <button type="submit" class="btn btn-warning mt-2 col-lg-2">Submit</button>
        </div>
        <hr/>
        {/* <!-- Bills list --> */}
        <div class="dashBillsList">
            <div class="row">
                <div class="col-lg-6 p-0 my-1">
                    <button class="btn btn-outline-dark col-10">FULANO pagou para CICLANO o valor de VALOR</button> <button class="btn btn-danger col-1">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                    <button class="btn btn-outline-dark col-10">FULANO pagou para CICLANO o valor de VALOR</button> <button class="btn btn-danger col-1">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                    <button class="btn btn-outline-dark col-10">FULANO pagou para CICLANO o valor de VALOR</button> <button class="btn btn-danger col-1">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                    <button class="btn btn-outline-dark col-10">FULANO pagou para CICLANO o valor de VALOR</button> <button class="btn btn-danger col-1">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                    <button class="btn btn-outline-dark col-10">FULANO pagou para CICLANO o valor de VALOR</button> <button class="btn btn-danger col-1">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                    <button class="btn btn-outline-dark col-10">FULANO pagou para CICLANO o valor de VALOR</button> <button class="btn btn-danger col-1">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                    <button class="btn btn-outline-dark col-10">FULANO pagou para CICLANO o valor de VALOR</button> <button class="btn btn-danger col-1">X</button>
                </div>
            </div>
        </div>
    </div> 
  );
};


export default DashAcertos;