import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashNavbar from "../DashNavbar/DashNavbar";

const DashDespesas = props => {
  return (
    <>
      <DashNavbar />
      <div class="dashMainContent mx-4">
        <h2>Adicionar pessoa:</h2>
        <div class="dashAddBills d-flex justify-content-between align-items-end flex-wrap">
          <div class="form-group text-left col-lg-4 mt-1 mb-0 p-0">
            Nome:
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group text-left col-lg-5 mb-0 mt-1 p-0">
            E-mail:
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" class="btn btn-warning mt-2 col-lg-2">
            Submit
          </button>
        </div>
        <hr />

        <div class="dashBillsList">
          <div class="row">
            <div class="col-lg-6 p-0 my-1">
              <button class="btn btn-outline-dark col-10">NAME 01</button>{" "}
              <button class="btn btn-danger col-1" type="button" data-toggle="modal" data-target="#deleteButton">X</button>
            </div>
            <div class="col-lg-6 p-0 my-1">
              <button class="btn btn-outline-dark col-10">NAME 01</button>{" "}
              <button class="btn btn-danger col-1" type="button" data-toggle="modal" data-target="#deleteButton">X</button>
            </div>
            <div class="col-lg-6 p-0 my-1">
              <button class="btn btn-outline-dark col-10">NAME 01</button>{" "}
              <button class="btn btn-danger col-1" type="button" data-toggle="modal" data-target="#deleteButton">X</button>
            </div>
            <div class="col-lg-6 p-0 my-1">
              <button class="btn btn-outline-dark col-10">NAME 01</button>{" "}
              <button class="btn btn-danger col-1" type="button" data-toggle="modal" data-target="#deleteButton">X</button>
            </div>
            <div class="col-lg-6 p-0 my-1">
              <button class="btn btn-outline-dark col-10">NAME 01</button>{" "}
              <button class="btn btn-danger col-1" type="button" data-toggle="modal" data-target="#deleteButton">X</button>
            </div>
            <div class="col-lg-6 p-0 my-1">
              <button class="btn btn-outline-dark col-10">NAME 01</button>{" "}
              <button class="btn btn-danger col-1" type="button" data-toggle="modal" data-target="#deleteButton">X</button>
            </div>
            <div class="col-lg-6 p-0 my-1">
              <button class="btn btn-outline-dark col-10">NAME 01</button>{" "}
              <button class="btn btn-danger col-1" type="button" data-toggle="modal" data-target="#deleteButton">X</button>
            </div>
            <div class="col-lg-6 p-0 my-1">
              <button class="btn btn-outline-dark col-10">NAME 01</button>{" "}
              <button class="btn btn-danger col-1" type="button" data-toggle="modal" data-target="#deleteButton">X</button>
            </div>
          </div>
        </div>
      </div>

      {/* // CONFIRM EXCLUSION MODAL */}

      <div className="modal fade" id="deleteButton" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
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
                  <label for="recipient" className="col-form-label"> NAME </label>
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

export default DashDespesas;
